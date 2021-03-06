import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stopwatch } from "ts-stopwatch";
import { GetUsersRequest, GetUsersRequestModel, GetUsersResponseUserModel } from 'src/apiwrapper/users/getUsersRequest';
import { LoginService } from '../_services/login/login.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit 
{
  previousPageIndex: number = 1;
  currentPageIndex: number = 1;
  nextPageIndex: number = 1;
  lastPageIndex: number = 1;

  users: Array<GetUsersResponseUserModel>;
  result: string;
  
  params: any;
  query: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private loginService: LoginService) {
    if(!loginService.isLoggedIn())
    {
      router.navigate([ "/connexion" ], 
      {
        state: {
          from: "home"
        }
      });
    }
   }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const filter: string = params["f"] || "users";
      const query: string = params["q"] || "";
      const page: number = Number(params["p"]) || 1;
      
      this.query = query;

      this.search(filter, query, page);
    });
  }

  search(filter: string, query: string, page: number): void {
    const stopwatch = new Stopwatch();
    stopwatch.start();

    switch(filter)
    {
      case "users":
      default:
        this.users = [];
        this.result = "";

        const request: GetUsersRequest = new GetUsersRequest();
        const requestModel: GetUsersRequestModel = new GetUsersRequestModel(query, page);

        request.get(requestModel)
          .then(res => {
            this.users = res.users;

            this.previousPageIndex = page - 1;
            this.currentPageIndex = page;
            this.nextPageIndex = page + 1;

            this.lastPageIndex = res.pages.pages.length;        
          })
          .catch(console.error)
          .then(_ => {
            stopwatch.stop();
            
            const time: number = stopwatch.getTime() / 1000;
            this.result = `${this.users.length} résultats (${time.toFixed(2)} secondes)`;
          });
        
        break;
    }
  }

  hideIf(condition: boolean): string {
    return `visibility: ${condition ? 'hidden' : 'visible'}`;
  }

  gotoPage(page: number): void {
    this.router.navigate(
      [], 
      {
        relativeTo: this.activatedRoute,
        queryParams: { p: Number(page) },
        queryParamsHandling: 'merge'
      });
  }
}
