<?php

    $DS = DIRECTORY_SEPARATOR;
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."serverside".$DS."libs".$DS."xtemplate".$DS."xtemplate.class.php";
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."serverside".$DS."config.php";
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."serverside".$DS."users.php";

    $link = pg_pconnect("host=$db_host port=5432 dbname=$db_name user=$db_user password=$db_password");
    if (!$link) die ("can't connect to db");

    $template = new XTemplate($_SERVER["DOCUMENT_ROOT"].$DS."serverside".$DS."templates".$DS."application.html");
    $template -> assign("USERS", getUsers());
    $template -> parse("main");
    $template -> out("main");

?>