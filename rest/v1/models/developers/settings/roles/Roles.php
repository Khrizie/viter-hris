<?php

<<<<<<< HEAD
class Roles
{
=======
class Roles {
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    public $role_aid;
    public $role_is_active;
    public $role_name;
    public $role_description;
    public $role_created;
    public $role_updated;

    public $connection;
    public $lastInsertedId;

    public $tblSettingsRoles;

<<<<<<< HEAD
    public function __construct($db)
    {
=======
    public function __construct($db){
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        $this->connection = $db;
        $this->tblSettingsRoles = "settings_roles";
    }

<<<<<<< HEAD
    // CREATE
    public function create()
    {
=======
    public function create(){
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        try {
            $sql = "insert into {$this->tblSettingsRoles} ";
            $sql .= " ( ";
            $sql .= " role_is_active, ";
            $sql .= " role_name, ";
            $sql .= " role_description, ";
            $sql .= " role_created, ";
            $sql .= " role_updated ";
<<<<<<< HEAD
            $sql .= " ) values (";
=======
            $sql .= " ) values ( ";
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            $sql .= " :role_is_active, ";
            $sql .= " :role_name, ";
            $sql .= " :role_description, ";
            $sql .= " :role_created, ";
            $sql .= " :role_updated ";
            $sql .= " ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_is_active" => $this->role_is_active,
                "role_name" => $this->role_name,
                "role_description" => $this->role_description,
                "role_created" => $this->role_created,
                "role_updated" => $this->role_updated,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
<<<<<<< HEAD
        } catch (PDOException $e) {
=======
        } catch (PDOException $e){
            returnError($e);
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            $query = false;
        }
        return $query;
    }

<<<<<<< HEAD
    // READ
    public function readAll()
    {
        try {
            $sql =  "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblSettingsRoles} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $e) {
=======
    public function readAll(){
        try{
            $sql = "select ";
            $sql .= " * ";
            $sql .= " from {$this->tblSettingsRoles} ";
            $query = $this->connection->query($sql);
        } catch(PDOException $e){
            returnError($e);
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            $query = false;
        }
        return $query;
    }
<<<<<<< HEAD
    // UPDATE

    public function update()
    {
        try {
            $sql = "update {$this->tblSettingsRoles} set ";
            $sql .= "role_name = :role_name, ";
            $sql .= "role_description = :role_description, ";
            $sql .= "role_updated = :role_updated ";
            $sql .= "where role_aid = :role_aid ";
=======

    public function update(){
        try{
            $sql = "update {$this->tblSettingsRoles} set ";
            $sql .= "role_name = :role_name, "; 
            $sql .= "role_description = :role_description, ";
            $sql .= "role_updated = :role_updated ";
            $sql .= "where role_aid = :role_aid"; 
            
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_name" => $this->role_name,
                "role_description" => $this->role_description,
                "role_updated" => $this->role_updated,
                "role_aid" => $this->role_aid,
            ]);
<<<<<<< HEAD
        } catch (PDOException $e) {
            returnError($e);
=======

        } catch(PDOException $e){
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            $query = false;
        }
        return $query;
    }

<<<<<<< HEAD
    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblSettingsRoles} set ";
            $sql .= "role_is_active = :role_is_active, ";
            $sql .= "role_updated = :role_updated ";
            $sql .= "where role_aid = :role_aid ";
=======
    public function active(){
        try{
            $sql = "update {$this->tblSettingsRoles} set ";
            $sql .= "role_is_active = :role_is_active, "; 
            $sql .= "role_updated = :role_updated ";
            $sql .= "where role_aid = :role_aid"; 
            
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_is_active" => $this->role_is_active,
                "role_updated" => $this->role_updated,
                "role_aid" => $this->role_aid,
            ]);
<<<<<<< HEAD
        } catch (PDOException $e) {
            // returnError($e); // use this error if invalid request error
=======

        } catch(PDOException $e){
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            $query = false;
        }
        return $query;
    }

<<<<<<< HEAD
    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSettingsRoles} ";
            $sql .= "where role_aid = :role_aid ";
=======
    public function delete(){
        try{
            $sql = "delete from {$this->tblSettingsRoles} ";
            $sql .= "where role_aid = :role_aid"; 
            
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_aid" => $this->role_aid,
            ]);
<<<<<<< HEAD
        } catch (PDOException $e) {
            // returnError($e); // use this error if invalid request error
=======

        } catch(PDOException $e){
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            $query = false;
        }
        return $query;
    }

<<<<<<< HEAD
    public function checkName()
    {
        try {
            $sql =  "select ";
            $sql .= "role_name ";
            $sql .= "from {$this->tblSettingsRoles} ";
            $sql .= "where role_name = :role_name ";
=======
    public function checkName(){
        try{
            $sql = "select ";
            $sql .= " role_name";
            $sql .= " from {$this->tblSettingsRoles} ";
            $sql .= " where role_name = :role_name ";
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            $query = $this->connection->prepare($sql);
            $query->execute([
                "role_name" => $this->role_name,
            ]);
<<<<<<< HEAD
        } catch (PDOException $e) {
=======
        } catch(PDOException $e){
            returnError($e);
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            $query = false;
        }
        return $query;
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
