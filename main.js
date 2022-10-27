let editoro = document.querySelector("#editor"); 
let editor=ace.edit(editoro);
editor.setTheme("ace/theme/cobalt");
editor.session.setMode("ace/mode/python");

function save(){
    let m=editor.getValue();//m=m.replace("\n",'');

    var a='{"script":"'+m.toString()+'","username":"'+document.getElementsByName("uname")[0].value+'"}';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "set.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        console.log(this.response);
        alert("sent to server");
    };console.log(a);
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

        
    };console.log(a);
    xhr.send(a);
    
}
