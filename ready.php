<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

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
    
    $stmt = $conn->prepare("SELECT id FROM `query` WHERE (id = ? and `result` IS NOT NULL) LIMIT 1;");
    $stmt->bind_param("i",  $id );
    $stmt->execute();
    $result = $stmt->get_result();
    
    if  ($result->num_rows > 0) {
        echo "<script>window.location = 'result.php?id=".$id."';</script>";
    } else {
        echo "";
    }
    
?>