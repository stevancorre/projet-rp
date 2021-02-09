<?php
    include_once "api/objects/user.php";
    include_once "api/shared/responseModel.php";

    class UpdateRpRequest
    {
        private $db;

        function __construct($conn)
        {
            $this->db = $conn;
        }

        public function get($request)
        {
            $rp = new Rp($this->db);    
            $rp->id = $request->id;
            
            $response = new UpdateRpResponseModel();

            if(isset($request->user_id)) { $rp->user_id = $request->user_id; }
            if(isset($request->is_public)) { $rp->is_public = $request->is_public; }
            if(isset($request->content)) { $rp->content = $request->content; }
            if(isset($request->title)) { $rp->title = $request->title; }

            if($rp->update())
            {
                $response->code = 200; // Ok
                $response->content = array("message" => "Rp updated.");
            }
            else
            {
                $response->code = 404; // Service unavailable
                $response->content = array("message" => "Rp does not exist.");
            }
            
            return $response->emit();
        }
    }
    
    // Request
    class UpdateRpRequestModel
    {
        public $user_id;
        public $is_public;
        public $title;
        public $content;
    }

    // Response
    class UpdateRpResponseModel extends ResponseModel
    {}
?>