<?php

//check database connection
<<<<<<< HEAD

$conn = null;
$conn = checkDBConnection();

$val = new Roles($conn);
$val->role_is_active = 1;
$val->role_name = trim($data['role_name']);
$val->role_description = $data['role_description'];
$val->role_created = date("Y-m-d H:m:s");
$val->role_updated = date("Y-m-d H:m:s");

//VALIDATIONS
=======
$conn = null;
$conn = checkDbConnection();
//make use of classes for save database
$val = new Roles ($conn);

$val->role_is_active = 1;
$val->role_name = trim($data['role_name']);
$val->role_description =$data['role_description'];
$val->role_created = date("Y-m-d H:i:s");
$val->role_updated = date("Y-m-d H:i:s");
// Validations
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
isNameExist($val, $val->role_name);

$query = checkCreate($val);
http_response_code(200);
<<<<<<< HEAD
returnSuccess($val, "Roles Create", $query);
=======
returnSuccess($val, "Roles Create", $query);
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
