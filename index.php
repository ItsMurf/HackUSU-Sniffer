<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

$server = "localhost";
$username = "admin";
$password = "Eden2013";
$database = "portscan";

$conn = mysqli_connect($server,$username,$password) or die("Error in Connection");
mysqli_select_db($conn, $database ) or die("Could not select database");

if ( $conn->connect_error ){

    die("Connection failed: " . $conn->connect_error);

}

if (isset($_POST['host'])) {
    $sessionid = session_id();
    $port = $_POST['port'];
    if (strlen($_POST['port']) <= 0) {
        $port = "*";
    }
    $host = $_POST['host'];
    $stmt = $conn->prepare("insert into `query` values (null,?,?, ? , null);");
    $stmt->bind_param("sss", $sessionid, $host, $port);
    $stmt->execute();
    $insertid = $conn->insert_id;

    if (null != $insertid) {
        echo "<script>window.location = 'loading.php?id=".$insertid."';</script>";
    }

    exec("sudo -u ubuntu ./main.py > /dev/null &");
    
    

}


?>

<!DOCTYPE html>
<html>
    <head>
        <title>Port Scan</title>
        <style>
            body {
                background-color: #DD1D48;
                color: #931936;
                text-align: center;
                font-family: Helvetica,Arial,sans-serif;
            }
            h1 {
                margin-top: 20vh;
                font-size: 50px;
            }
            .host {
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 20px;
                width: 300px;
                height: 50px;
                background-color: #931936;
                border:none;
                border-radius: 10px;
                color: #DD1D48;
                padding-left: 20px;
                font-family: Helvetica,Arial,sans-serif;
                font-weight: bold;
                font-size: 20px;
                display: block;
            }
            ::placeholder {
                color: #DD1D48;
                font-family: Helvetica,Arial,sans-serif;
                font-weight: bold;
                font-size: 20px;
            }
            .submit {
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 20px;
                width: 100px;
                height: 50px;
                background-color: #931936;
                border:none;
                border-radius: 10px;
                color: #DD1D48;
                font-family: Helvetica,Arial,sans-serif;
                font-weight: bold;
                font-size: 15px;
                
                display: block;
                text-transform: uppercase;
                font-family: Helvetica,Arial,sans-serif;
            }
            input [type=radio] {
                display: inline-block;

            }
            label {
                display: inline-block;
            }
            
        </style>
    </head>
    <body>
        <form method="post" action="">
            <h1>Port Scan Tool</h1>
            <input class="host" type="text" placeholder="IP or Hostname" name="host">
            <input class="host" type="text" placeholder="Port" name="port">
            <p>Leave Port Blank For Top 1000 Most Common Ports</p><br>
            <!--
            <input type="radio" id="t1" name="type" value="0">
            <label for="t1">All</label>
            <input type="radio" id="t2" name="type" value="1">
            <label for="t2">TCP</label>
            <input type="radio" id="t3" name="type" value="2">
            <label for="t3">UDP</label><br><br>-->
            <input class="submit" type="submit">
        </form>
    </body>
</html>
