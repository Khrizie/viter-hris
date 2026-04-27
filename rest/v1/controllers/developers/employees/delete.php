<?php

//check database connection
<<<<<<< HEAD

$conn = null;
$conn = checkDBConnection();

$val = new Employees($conn);

if (array_key_exists("id", $_GET)) {
    $val->employee_aid = $_GET['id'];

    checkId($val->employee_aid);

    $query = checkDelete($val);
    http_response_code(200);
    returnSuccess($val, "Employee Delete", $query);
}


checkEndpoint();
=======
$conn = null;
$conn = checkDbConnection();
//make use of classes for save database
$val = new Employees ($conn);

if(array_key_exists("id",$_GET)){
$val->employee_aid = $_GET ['id'];

checkId($val->employee_aid);

$query = checkDelete($val);
http_response_code(200);
returnSuccess($val, "Employees Delete", $query);
}

checkEndPoint();
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
