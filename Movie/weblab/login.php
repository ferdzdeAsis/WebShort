<?php 
 
$host="localhost";
$user="root";
$password="";
$db="accounts";
 
mysql_connect($host,$user,$password);
mysql_select_db($db);

$uname=$_GET['username'];
$pword=$_GET['password'];

if(!empty($uname) && !empty($pword)){
    
    $sql = "select * from acc_details where username='".$uname."' AND password ='".$pword."' limit 1";
    
    $result = mysql_query($sql);
    
    if(mysql_num_rows($result)==1){
        echo "You Have Successfully Logged in";
        exit();
    }
    else{
        echo " You Have Entered Incorrect Password";
        exit();
    }
}
?>