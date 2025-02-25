<?php
define('DBSERVER','localhost');   //Database server
define('DBUSERNAME','root');      //Database username
define('DBPASSWORD','');          //Database password
define('DBNAME','demo');          //DAtabase name
/* connect to mysql database*/ 
$db = mysqli_connect(DBSERVER,DBUSERNAME,DBPASSWORD,DBNAME);
//Check db connection
if($db === false){
    die("Erroe : connection error." .mysqli_connect_error());
}

?>