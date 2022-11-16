<?php 
$s =file_get_contents('php://input');
$l=$_GET["lang"];
 function r($h,$e)
{
    global $s;$s= str_replace($h,$e,$s); 
}
if($l=="java"){
    //OOP common keywords 
r("कक्षा","class");r("समूह","class");       
r("सार्वजनीक","public");r("सार्वजनिक","public");
r("प्रिंट","print");
//pure java keywords
r("स्थिर","static");       
r("रिक्त","void");
r("जरूरी","main");  
r("तंत्र","System");       
r("बाहर","out");
r("आम","default");
r("अंतिम","final");
///////////////////////r("","println");


// Data Types d for double is at last  
r("अंक","int");
r("बाइट","byte");
r("छोटा","short");
r("लंबा","long");
r("फ्लोट","float");
r("बड़ा","double");
r("वर्ण","char");
r("डोर","String");
r("बूलियन","bollean");
// Data Types 

/*
r("","");
r("","");*/
//Control Statments
//r("","");
r("अगर","if");       
r("या","else");
r("बदलो","switch");r("बदले","switch");       
r("यदि","case");
r("केलिए","for");     
r("जब-तक","while");r("जबतक","while");r("जब","while");
r("करो","do");
r("जारी","continue");
r("भंग","break");
r("आम","default");


//single words and booleans
r("ल","l");
r("ब","d");
r("फ","f");
r("सच","true");


}  /**/
if($l=="php"){
r("कक्षा","class");r("समूह","class");       
r("सार्वजनीक","public");r("सार्वजनिक","public");

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
