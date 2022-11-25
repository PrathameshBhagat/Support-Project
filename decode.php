<?php 
$s =file_get_contents('php://input');
$l=$_GET["lang"];
 function r($h,$e)
{
    global $s;$s= str_replace($h,$e,$s); 
}
if($l=="java"){
  
r("सच","true");
r("","");
r("",""); 

}  /**/
if($l=="php"){

//r("","");
r("अगर","if");       
r("वरना","else");      
r("जबतक ","while");r("जबतक ","while");
r("करो","do"); 
    
}
echo $s;
?>
