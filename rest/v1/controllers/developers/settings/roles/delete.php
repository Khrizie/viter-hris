<?php

//check database connection
<<<<<<< HEAD

$conn = null;
$conn = checkDBConnection();

$val = new Roles($conn);

if (array_key_exists("id", $_GET)) {
    $val->role_aid = $_GET['id'];

    checkId($val->role_aid);

    $query = checkDelete($val);
    http_response_code(200);
    returnSuccess($val, "Roles Delete", $query);
}


checkEndpoint();
=======
$conn = null;
$conn = checkDbConnection();
//make use of classes for save database
$val = new Roles ($conn);

if(array_key_exists("id",$_GET)){
$val->role_aid = $_GET ['id'];

checkId($val->role_aid);

$query = checkDelete($val);
http_response_code(200);
returnSuccess($val, "Roles Delete", $query);
}

checkEndPoint();
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
