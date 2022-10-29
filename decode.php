<?php 
$s =file_get_contents('php://input');
$l=$_GET["lang"];
 function r($h,$e)
{
    global $s;$s= str_replace($h,$e,$s); 
}
if($l=="java"){
r("कक्षा","class");r("समूह","class");       
r("सार्वजनीक","public");r("सार्वजनिक","public");
r("स्थिर","static");       
r("रिक्त","void");
r("जरूरी","main");       
r("डोर","String");
r("आम","default");
//r("","");
r("अगर","if");       
r("वरना","else");
r("बदलो","switch");r("बदल","switch");       
r("हैतो","case");r("हैतो","case");
r("केलिए","for");r("के लिए","for");     
r("जबतक ","while");r("जबतक ","while");
r("करो","do"); 
    
}      
echo $s;
?>
