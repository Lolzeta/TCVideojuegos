<?php
$url = $_SERVER['REQUEST_SCHEME']."://";
// $port = ":".$_SERVER['SERVER_PORT'];
$serverName = $_SERVER['SERVER_NAME']."/";
$urlParts = explode("/",$_SERVER['REQUEST_URI']);
$request = $urlParts[1]."/";
/** URL principal de la aplicación */
define('APP_URL', $url.$serverName.$request);
?>