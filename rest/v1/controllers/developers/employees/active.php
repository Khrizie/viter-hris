<?php
//  set http header
require '../../../core/header.php';
// use needed functions
require '../../../core/functions.php';
// use models
require '../../../models/developers/employees/Employees.php';

//check database connection
$conn = null;
$conn = checkDbConnection();
//make use of classes for save database
// store models into var
$val = new Employees ($conn);

//get payload from frontend
$body = file_get_contents('php://input');
$data = json_decode($body, true);

if(array_key_exists('id', $_GET)){
    // check data if exist and data is required
    checkPayload($data);
    $val->employee_aid = $_GET ['id'];
    $val->employee_is_active = trim($data['isActive']);
    $val->employee_first_name = $data['employee_first_name'];
    $val->employee_middle_name =$data['employee_middle_name'];
    $val->employee_last_name =$data['employee_last_name'];
    $val->employee_updated = date("Y-m-d H:i:s");

    // validate is id
    checkId($val->employee_aid);

    $query = checkActive($val);
    http_response_code(200);
    returnSuccess($val,'employee_is_active',$query);

}

// return 404 if endpoint is not available
checkEndpoint();