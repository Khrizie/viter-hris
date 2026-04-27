<?php

//check database connection
<<<<<<< HEAD

$conn = null;
$conn = checkDBConnection();

$val = new Users($conn);
=======
$conn = null;
$conn = checkDbConnection();
//make use of classes for save database
$val = new Users ($conn);


>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
$val->users_is_active = 1;
$val->users_first_name = trim($data['users_first_name']);
$val->users_last_name = trim($data['users_last_name']);
$val->users_email = trim($data['users_email']);
<<<<<<< HEAD
$val->users_password = trim($data['users_password']);
$val->users_role_id = $data['users_role_id'];
$val->users_created = date("Y-m-d H:m:s");
$val->users_updated = date("Y-m-d H:m:s");

//VALIDATIONS
isNameExist($val, "{$val->users_first_name} {$val->users_last_name}");
isEmailExist($val, $val->users_email);

$query = checkCreate($val);
http_response_code(200);
returnSuccess($val, "Users Create", $query);
=======
$val->users_role_id = trim($data['users_role_id']);
$val->users_password = trim($data['users_password']);
$val->users_created = date("Y-m-d H:i:s");
$val->users_updated = date("Y-m-d H:i:s");
// Validations
isNameExist($val, $val->users_first_name);

$query = checkCreate($val);
http_response_code(200);
returnSuccess($val, "users Create", $query);
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
