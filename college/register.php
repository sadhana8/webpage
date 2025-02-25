<?php
require_once "configuration.php";
require_once "session.php";

if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['submit'])){
    $fullname = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST["confirm_password"]);
    if($query = $db->prepare("SELECT * FROM users  WHERE email=?")){
    $error='';
    //Bind parameter (s = string, i = int, b= blob,etc), in our case the username is a string so we use "s"
    $query->bind_param('s',$email);
    $query->execute();
    //store the result so we can check if the account exists in the database.
    $query->store_result();
    }
    if($query->num_rows>0){
        $error .='<p class="error"> The email address is already registered!</p>';

    }else{
        //Validate password
        if(strlen($password)<6){
            $error .='<p class="error"> Password must have atleast 6 characters.</p>';
        }
        //validate confirm password
        if(empty($confirm_password)){
            $error .='<p class="error">Please enter confirm password.</p>';
        }else{
            if(empty($error)&&($password !=$confirm_password)){
                $error .='<p class="error">Password did not match.</p>';
            }
        }
        if(empty($error)){
            $insertQuery = $db->prepare("INSERT INTO users(name, email, password) VALUE(?,?,?);");
            $insertQuery->bind_param("sss",$fullname,$email,$password);
            $result = $insertQuery->execute();
            if($result){
                $error .='<p class="success">Your registration was successful!</p>';
            }else{
                $error .='<p class="error">Something went wrong!</p>';
            }
        }
    

$query->close();
        
}
// close connection 
mysqli_close($db);
}

?>




<!DOCTYPE html>
<html>
    <head>
        <title> Resgistration Form</title>
        <meta charset="UTf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <h1>College Resgistration form</h1>
    <body bgcolor="#B0E0E6">
        <div>
            <h2>Regis</h2>
        </div>
        <form action="connect.php" method="post">
            <label for="name">Name:</label>
            <br><br>
            <input type="text" name="name" id="name" required>
            <br>
            <label for="email">Gmail:</label>
            <br><br>
            <input type="email" name="email" id="email" required>
            <br>
            <label for="age">Age:</label>
            <br><br>
            <input type="number" name="age" id="age" required>
            <br>
            <label for="bgrp">Blood Group</label>
            <br><br>
            <input type="text" name="bgrp" id="bgrp" required>
            <br>
            <label for="Phone">Phone Number</label>
            <br><br>
            <input type="text" name="phone" id="phone" required>
            <br>
            <label for="address">Address:</label>
            <br><br>
            <input type="text" name="address" id="address" required>
            <br><br><br>
            <input type="submit" name="summit" id="summit" >

        </form>

            
    </body>
</html>