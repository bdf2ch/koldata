<?php

    $DS = DIRECTORY_SEPARATOR;
    require_once $_SERVER["DOCUMENT_ROOT"].$DS."serverside".$DS."config.php";

    $link = oci_connect($dbuser, $dbpassword, $dbhost, "AL32UTF8");
    if (!$link) {
        $error = oci_error();
        $message = $error != false ? $error["code"]." - ".$error["message"]." - ".$error["sqltext"] : "";
        return false;
    }



    function getDivisions () {

    }

?>