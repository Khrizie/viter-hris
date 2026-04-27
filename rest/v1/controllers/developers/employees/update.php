<?php

//check database connection
<<<<<<< HEAD

$conn = null;
$conn = checkDBConnection();

$val = new Employees($conn);

if (array_key_exists("id", $_GET)) {

    $val->employee_aid = $_GET['id'];
    $val->employee_first_name = trim($data['employee_first_name']);
    $val->employee_middle_name = trim($data['employee_middle_name']);
    $val->employee_last_name = trim($data['employee_last_name']);
    $val->employee_email = $data['employee_email'];
    $val->employee_updated = date("Y-m-d H:m:s");

    $employee_name_old = $data['employee_first_name_old'];

    // validations
    checkId($val->employee_aid);
    compareName(
        $val, //models
        $employee_name_old, //old record
        $val->employee_first_name // new record
    );

    $query = checkUpdate($val);
    http_response_code(200);
    returnSuccess($val, "Employees Update", $query);
}


checkEndpoint();
=======
$conn = null;
$conn = checkDbConnection();
//make use of classes for save database
$val = new Employees ($conn);

if(array_key_exists("id",$_GET)){
$val->employee_aid = $_GET ['id'];
$val->employee_first_name = $data['employee_first_name'];
$val->employee_middle_name =$data['employee_middle_name'];
$val->employee_last_name =$data['employee_last_name'];
$val->employee_email =$data['employee_email'];
$val->employee_updated = date("Y-m-d H:i:s");

$employee_first_name_old = $data['employee_first_name_old'];

// Validations
checkId($val->employee_aid);
compareName($val, //models
    $employee_first_name_old, //old record
    $val->employee_first_name //new record
);

$query = checkUpdate($val);
http_response_code(200);
returnSuccess($val, "employee Update", $query);
}

checkEndPoint();
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
