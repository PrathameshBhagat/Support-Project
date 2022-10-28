let editoro = document.querySelector("#editor"); 
let editor=ace.edit(editoro);
editor.setTheme("ace/theme/cobalt");
editor.session.setMode("ace/mode/java");
function save(){
    let m=editor.getValue();//m=m.replace("\n",'');
    var a=m.toString();
    var xhr = new XMLHttpRequest();
    /* Code  when the  data completely  was a POST  request
    var a='{"script":"'+m.toString()+'","username":"'+document.getElementsByName("uname")[0].value+'"}';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "set.php");
    xhr.setRequestHeader("Content-Type", "application/json");    */
    xhr.open("POST", "set.php?username="+document.getElementsByName("uname")[0].value);
    xhr.setRequestHeader("Content-Type", "text/plain");
    xhr.onload = function () {
        console.log(this.response);
        alert("sent to server");
        noti("SAVED","N1");
    };
    xhr.send(a);
}
function run(){    
    var xhr = new XMLHttpRequest();
    var a='{"language":"'+document.getElementsByName("lang")[0].value.toString()+'","username":"'+document.getElementsByName("uname")[0].value.toString()+'"}';
    xhr.open("GET", "get.php?username="+document.getElementsByName("uname")[0].value.toString()+"&language="+document.getElementsByName("lang")[0].value.toString());
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        console.log(this.response);
        document.getElementById("view").innerHTML=this.response.toString();
         noti("COMPILED","N1");
    };console.log(a); 
    xhr.send(a);
}
function noti(data,n) {
  // Get the snackbar DIV
  var x = document.getElementById(n);
  x.innerHTML=data;
  // Add the "show" class to DIV
  x.className = "show";
  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", "");x.textContent="";x.padding="0px;"; }, 5000);
}
