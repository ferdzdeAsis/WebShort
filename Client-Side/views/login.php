<?php

$host = "localhost";
$user = "root";
$password = "";
$db = "bus_db";

$conn = mysqli_connect($host, $user, $password, $db)
or die("Connect failed: %s\n" . $conn->error);

//This is used to very the connection of PHP and Database
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// } else {
//     echo "Connected susccessfully";
// }

try {
    if (isset($_POST['username']) && isset($_POST['password'])) {

        $uname = $_POST['username'];
        $pword = $_POST['password'];

        //Query and used to match if the credentials are registered in the Database
        $sql = "select * from bus_db where bus_db.username = '" . $uname . "' AND bus_db.password = '" . $pword . "' limit 1";
        $result = $conn->query($sql);

        if (mysqli_num_rows($result) == 1) {
            echo "<script type='text/javascript'>
            window.location.href='viewTrips.html'; </script>";
        } else {
            echo "<script type='text/javascript'>alert('Incorrect Credentials!!!');
                window.location.href='login.html'; </script>";
        }

    } else {
        echo "Fill up all the data";
    }

} catch (Exception $e) {
    echo 'Message: ' . $e->getMessage();
}

//     $result = mysql_query($sql);

//     if($result==true){
//         echo "You Have Successfully Logged in";
//         exit();
//     }
//     else{
//         echo " You Have Entered Incorrect Password";
//         exit();
//     }
// }
