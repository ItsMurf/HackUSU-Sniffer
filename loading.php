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




?>
<!DOCTYPE html>
<html>
    <head>
        <title>Port Scan</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
        <script src="loading.js"></script>
        <script>
            var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
            function init() {
                canvas = document.getElementById("canvas");
                anim_container = document.getElementById("animation_container");
                dom_overlay_container = document.getElementById("dom_overlay_container");
                var comp=AdobeAn.getComposition("E2315515DC4D4198BB5D9D590E3FD676");
                var lib=comp.getLibrary();
                handleComplete({},comp);
            }
            function handleComplete(evt,comp) {
                //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
                var lib=comp.getLibrary();
                var ss=comp.getSpriteSheet();
                exportRoot = new lib.Untitled1();
                stage = new lib.Stage(canvas);	
                //Registers the "tick" event listener.
                fnStartAnimation = function() {
                    stage.addChild(exportRoot);
                    createjs.Ticker.framerate = lib.properties.fps;
                    createjs.Ticker.addEventListener("tick", stage);
                }	    
                //Code to support hidpi screens and responsive scaling.
                AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
                AdobeAn.compositionLoaded(lib.properties.id);
                fnStartAnimation();
            }
            </script>
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
            .wrapper {

            }
            
        </style>
    </head>
    <body onload="init();" style="margin:0px;">
        <h1 id="">Loading Results</h1>
        <div id="animation_container" style="background-color:#DD1D48; width:800px; height:146px; margin-right:auto; margin-left:auto;">
		<canvas id="canvas" width="800" height="146" style="position: absolute; display: block; background-color:#DD1D48;"></canvas>
		<div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:800px; height:146px; position: absolute; left: 0px; top: 0px; display: block;">
		</div>
	</div>
        
        <p id="test"></p>
    </body>
    <script>
        var id = "<?=$_GET['id'] ?>";
        var text = "Loading Results."
        function updatetext(){
            text += ".";
            document.getElementById('header').innerHTML = text;


        }
        setInterval(updatetext, 1000);

        setInterval(function(){
        $('#test').load("./ready.php?id="+id).fadeIn("slow");
        
        }, 2000);
        
    </script>
</html>