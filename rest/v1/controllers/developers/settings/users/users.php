<?php

<<<<<<< HEAD
//set http header
require '../../../../core/header.php';
// use needed funcions
=======
//  set http header
require '../../../../core/header.php';
// use needed functions
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
require '../../../../core/functions.php';
// use models
require '../../../../models/developers/settings/users/Users.php';

<<<<<<< HEAD
//get payload from frontend
$body = file_get_contents("php://input");
$data = json_decode($body, true);

if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    //CREATE / POST
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $result = require 'create.php';
        sendResponse($result);
        exit;
    }

    //READ / GET
    if ($_SERVER['REQUEST_METHOD'] == 'GET') {
        $result = require 'read.php';
        sendResponse($result);
        exit;
    }

    //Update / PUT
    if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
        $result = require 'update.php';
        sendResponse($result);
        exit;
    }

    //Delete / PUT
    if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
        $result = require 'delete.php';
        sendResponse($result);
        exit;
    }
}

//return access error
checkAccess();
=======

//get payload from frontend
$body = file_get_contents('php://input');
$data = json_decode($body, true);

if(isset($_SERVER['HTTP_AUTHORIZATION'])){
//Create/post
if($_SERVER['REQUEST_METHOD'] === 'POST') {
   $result = require 'create.php';
   sendResponse($result);
   exit;
}
//Read/get
if($_SERVER['REQUEST_METHOD'] === 'GET') {
   $result = require 'read.php';
   sendResponse($result);
   exit;
}
//Update/put
if($_SERVER['REQUEST_METHOD'] === 'PUT') {
   $result = require 'update.php';
   sendResponse($result);
   exit;
}
//delete/put
if($_SERVER['REQUEST_METHOD'] === 'DELETE') {
   $result = require 'delete.php';
   sendResponse($result);
   exit;
}
}

// return access error
checkAccess();
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
