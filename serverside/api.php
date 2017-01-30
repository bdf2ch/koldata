<?php

    $DS = DIRECTORY_SEPARATOR;
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."serverside".$DS."config.php";
    $params = json_decode(file_get_contents("php://input"));


    $link = pg_pconnect("host=$db_host port=5432 dbname=$db_name user=$db_user password=$db_password");
    if (!$link) die ("can't connect to db");


    switch ($params -> action) {
        case "add_user": add_user($params -> data);
            break;
    }


    pg_close($link);

?>