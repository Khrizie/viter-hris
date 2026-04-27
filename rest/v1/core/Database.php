<?php

class Database
{
    private static $dbConnection;

    public static function connectDb()
<<<<<<< HEAD
    {
=======
    { 
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        // Localhost
        $host = "localhost";
        $dbname = "viter_hris_v1";
        $username = "root";
        $password = "";

        if (self::$dbConnection === null) {
            self::$dbConnection = new PDO("mysql:host={$host};dbname={$dbname};", $username, $password, [PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
            self::$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            self::$dbConnection->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        }

        return self::$dbConnection;
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
