<?php
    include_once "api/shared/responseModel.php";
    include_once "api/objects/rp.php";

    class GetRpRequest
    {
        private $db;

        function __construct($conn)
        {
            $this->db = $conn;
        }

        public function get($request)
        {
            $rp = new RP($this->db);
            $rp->id = $request->id;
            $rp->getOne();
            
            $response = new GetRpResponseModel();

            if(isset($rp->user_id))
            {
                $response->user_id = $rp->user_id;
                $response->is_public = $rp->is_public;
                $response->content = htmlspecialchars_decode($rp->content);
                $response->title = $rp->title;
                $response->date = $rp->date;

                $response->_code = 200; //Ok
                $response->_content = $response->getObject();
            }
            else
            {
                $response->_code = 404; // Not found
                $response->_content = array("message" => "The RP does not exist.");
            }

            return $response->emit();
        }
    }

    // Request
    class GetRpRequestModel
    {
        public $id;
    }

    // Response
    class GetRpResponseModel extends ResponseModel
    {
        public $user_id;
        public $is_public;
        public $content;
        public $title;
        public $date;
    }
?>