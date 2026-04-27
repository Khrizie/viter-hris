<?php

<<<<<<< HEAD
$conn = null;
$conn = checkDBConnection();

$val = new Users($conn);

if (empty($_GET)) {
=======
//check database connection
$conn = null;
$conn = checkDbConnection();
//make use of classes for save database
$val = new Users ($conn);

if(empty($_GET)){
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    $query = checkReadAll($val);
    http_response_code(200);
    getQueriedData($query);
}

// return 404 if endpoint not found
checkEndpoint();
