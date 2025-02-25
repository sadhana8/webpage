<?php
required_once("config.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="registration.css">
</head>
<body>
    <div class="header">
        <?php
        if(isset($_POST["submit"]))
        {
            $enroll=$_Post["enroll"];
            $name=$_Post["name"];
            $email=$_Post["email"];
            $phone=$_Post["phone"];
            $dob=$_Post["dob"];
            $branch=$_Post["branch"];
         $sql ="INSERT INTO users (enroll, name, email, phone, dob, branch) VALUES(?,?,?,?,?,?)";
         $stmtinsert = $db->prepare($sql);
         $result = $stmtinsert ->execute([$enroll,$name,$email,$phone,$dob,$branch]);

         if($result){
            echo 'successfully saved.';

         }
         else{
            echo 'The were errors while saving the data.';
         }

        }
        ?>
    </div>
    <div class="header">
        <form action="srportal.php" method="post">
            <div class="container">
                <div class="row">
                    <div class="data">
                        <h1 id="h1">User Registration.</h1>
                        <hr>
                        <h2 id="h2">Fill Details.</h2>
                        <hr>
                        <label for="enroll">Enrollment ID:</label>
                        <input type="text" name="enroll" id="enroll" placeholder="Enter the Enrollment id" required><br><br>
                        <label for="name">Name:</label>
                        <input type="text" name="name" id="name" placeholder="Enter the name" required><br><br>
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Enter the email/User id" required><br><br>
                        <label for="phone">Phone Number:</label>
                        <input type="number" name="number" id="number" placeholder="Enter the phone number" required><br><br>
                        <label for="dob">Date of Birth</label>
                        <input type="date" name="dob" id="dob" placeholder="Enter the dob" required><br><br>
                        <label for="branch">Branch:</label>
                        <input type="text" name="branch" id="branch" placeholder="Enter the branch" required><br><br>
                        <input type="submit" type="submit" name="submit" value="submit">
                    </div>
                </div>
            </div>
            <div id="left">
                <p id="pleft">College of Information and Technlogy of TU</p>
            </div>
        </form>
    </div>
    <div class="clear"></div>
    <div class="footer">
        <p align="center"><font color="red">&copy; 2024 College of information technology. Kathmandu. All Rights Reserved.</font></p>
    </div>
</body>
</html>