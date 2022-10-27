<?php
$_POST = json_decode(file_get_contents('php://input'), true);
$script=$_POST["script"];
$uname=$_POST["username"];
$file = fopen('./text/'.$uname.".txt", "w") or die("Unable to open file!");
fwrite($file, $script);
fclose($file);
echo "baapaaay(saved)script:".$_POST["script"].",uname:".$_POST["username"];
?>
