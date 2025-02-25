<?php//start the session
session_start();
//Destroy the session
if(session_destroy()){
    //redirect to the login page
    header("Location:Login.php");
    exit;
}
?>