<?php
//get data
$curl = curl_init();
$uname=$_GET["username"];
$lang=$_GET["language"];
//READ FILE
$myfile = fopen('./text/'.$uname.".txt", "r") or die("Unable to open file!");
//HTTP REQUEST TO GET BYTECODE
$url = "https://api.jdoodle.com/v1/execute";
$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$scr=fread($myfile,filesize('./text/'.$uname.".txt"));
$scr=str_replace("\n","\\n", $scr);
$scr=str_replace("\"","\\\"", $scr);
$headers = array(
   "Content-Type: application/json",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
$data = '{"clientId": "bad4b3695b0c1e45eeb5ade8be594c4d","clientSecret":"354b6582f76fab8cf0151a56493c8407ab7b7f3d74632ed4f02bc2edcec1f8a9","language":"';
$data.=$lang;
//SET language
$data.='","script":"';
$data.=$scr;//set script
$data.='","versionIndex":"0"}';
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
$resp = curl_exec($curl);
curl_close($curl);
$r=json_decode($resp);
// OUTPUT
if (isset($r->output))  echo $r->output;
if (isset($r->error))   echo $r->error;
//var_dump();
//HTTP REQUEST END

fclose($filer);
?>
