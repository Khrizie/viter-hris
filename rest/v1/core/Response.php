<?php

<<<<<<< HEAD
class Response
{
=======
class Response {
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    private $_success;
    private $_data;
    private $_toCache = false;
    private $_responseData = array();

<<<<<<< HEAD
    public function setSuccess($success)
    {
        $this->_success = $success;
    }
    public function setData($data)
    {
        $this->_data = $data;
    }
    public function toCache($toCache)
    {
        $this->_toCache = $toCache;
    }
    public function send()
    {
        header("Content-type: application/json;charset=utf-8");
        if ($this->_toCache == true) {
            header("Cache-Control: max-age=60");
        } else {
            header("Cache-Control: no-cache,no-store");
        }

        // if($this->success== false){
        //     $this->_responseData =$this->_data
        // }else{
        //     $this->_responseData =$this->_data
        // }
        $this->_responseData = $this->_data;

        echo json_encode($this->_responseData);
    }
}
=======
    public function setSuccess($success) {
        $this->_success = $success;
    }
    public function setData($data) {
        $this->_data = $data;
    }
    public function toCache($toCache) {
        $this->_toCache = $toCache;
    }

    public function send() {
        header("Content-Type: application/json;charset=UTF-8");
        
        if ($this->_toCache == true){
            header("Cache-Control: max-age=60");
        } else {
            header("Cache-Control: no-cache, no-store");

        }

        // if($this->_success == false) {
        //    $this->_responseData = $this->_data;
        // } else {
        //     $this->_responseData = $this->_data;
        //  }

        $this->_responseData = $this->_data;
        echo json_encode($this->_responseData);
    }
}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
