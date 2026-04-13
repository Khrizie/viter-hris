<?php

require 'Database.php';
require 'Response.php';
require 'header.php';

function sendResponse($result) {
    $response = new Response();
    $response->setSuccess(true);
    $response->setStatusCode(200);
    $response->setData($result);
    $response->send();

}

function checkDbConnection() {
   try{
    $conn = Database::connectionDB();
    return $conn;
   }catch(PDOException $error) {
    $error = [];
    $error['type'] = 'invalid_request_error';
    $error['success'] = 'false';
    $error['error'] = 'database connection failed: ';
    $response->setSuccess(false);
    $response->setData($error);
    $response->send();
    exit;
}
}