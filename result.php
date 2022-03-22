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



$id = intval($_GET['id']);
$stmt = $conn->prepare("SELECT `result` from `query` where id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$result = $result->fetch_assoc();
$results = $result['result'];



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
                margin-bottom:0;
                padding-bottom:0;
            }
            h1 {
                margin-top: 10vh;
                font-size: 50px;
            }
            .wrapper {
                width:95%;
                padding:20px;
                height: 90vh;
                margin-right:auto;
                margin-left:auto;
                background-color:#f7f7f7;
                border-radius: 10px 10px 0 0;
                margin-bottom:0;
                box-shadow: 0px 1px 2px rgb(0 0 0 / 12%), 0px 0px 0px 1px rgb(0 0 0 / 5%);
                padding-top: 20px;
                box-sizing: border-box;
            }
            table {
                table-layout: auto;
                width:100%;
                margin-top: 0px;
                margin-bottom: 20px;
                border-collapse: collapse;
                border-style: hidden;
                box-shadow: 0px 1px 2px rgb(0 0 0 / 12%), 0px 0px 0px 1px rgb(0 0 0 / 5%);
                border-radius: 3px;
            }
            th {
                background-color: whitesmoke;
                padding-left: 10px;
                padding-top: 5px;
                padding-bottom: 5px;
                text-align: left;
                border-left: 1px solid lightgray;
                border-bottom: 1px solid lightgray;
                color: #2b4d88;
            }
            .first {
                border-left: none;
            }
            td {
                height: 25px;
                margin:0;
                padding: 4px 10px 4px 10px;
                text-align: left;
                border-left: 1px solid lightgray;
                border-bottom: 1px solid lightgray ;
                word-wrap: break-word;
                color:gray;
                background-color: white;
            }
            h4 {
                text-align: left;
                padding-bottom: 0;
                margin-bottom: 10px;
                color: #2b4d88;
            }
            
            
        </style>
        <script>
             window.onpopstate = function() {
                window.location = "./";
            }; history.pushState({}, '');
        </script>
    </head>
    <body>
        
            <h1>Your Results</h1>
            <div class="wrapper"><?=$results ?></div>
        
    </body>
</html>
