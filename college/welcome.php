<?php
//start the session
session_start();
//check if the user is not logged in, then redirect the user to login page 
if(!isset($_SESSION['userid'])|| $_session["userid"] !==true){
    header("location:login.php");
    exit;
     
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>welcome</title>
    <link href="https://cdn.usebootstrap.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet">

</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Hello, <strong><?php echo $_SESSION["name"];?></strong>Welcome to our site.</h1>

            </div>
            <p>
                <a href="logout.php" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Log Out</a>
            </p>
        </div>
    </div>
    
</body>
</html>