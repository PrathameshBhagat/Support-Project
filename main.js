ace.require("ace/ext/language_tools");
let editoro = document.querySelector("#editor"); 
let editor=ace.edit(editoro);
editor.setTheme("ace/theme/cobalt");
editor.session.setMode("ace/mode/javaa");
editor.setOptions({
       enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true
});
var snippetManager = ace.require("ace/snippets").snippetManager;
        var config = ace.require("ace/config");
         ace.config.loadModule("ace/snippets/javaa", function(m) {
        if (m) {
          snippetManager.files[editor.session.$mode.$id] = m;          
          m.snippets = snippetManager.parseSnippetFile(m.snippetText);
          // or do this if you already have them parsed
        snippetManager.register(m.snippets, m.scope);
          }
        });

function save(){
    let m=editor.getValue();
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
        console.log("Run: "+this.response);
        var result=this.response.toString();
        //remove extras from server
        result=result.replace(/<style>/g,"<may>");
        result=result.replace(/[\r\n]/g,"<br>");
        result=result.replace(/<[/]style>/g,"</may>");       
        result=result.replace(/<pre>|<[/]pre>/g,"");
        //now remove the contents of style 
        document.getElementById("view").innerHTML=result;
        //remove extras from server and a style tag
        var remove=document.getElementsByTagName("may")[0];
        remove.parentNode.removeChild(remove);     
        //notiyfy
        noti("COMPILED","N2");
    };console.log(a); 
    xhr.send(a);
}
function noti(data,n) {
  // Get the snackbar DIV
  var x = document.getElementById(n);
  x.innerHTML=data;
  // Add the "show" class to DIV
  x.className = "show";
  // After sometime, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", "");x.textContent="";x.padding="0px;"; }, 5000);
}
