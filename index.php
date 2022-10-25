<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <form>
        <h3 class="question">Write a program in hindi we will get it converted into java/python/c++/js/php code
            <INPUT TYPE="TEXT" name="uname" placeholder="prathamesh " >&nbsp
            <INPUT TYPE="TEXT" name="lang" placeholder="java">
            <input type="button" value="SAVE" onclick="save()">
            <input type="button" value="RUN" onclick="run()">
        </h3>

    <div class="editor-container" id="mycode">
         <div id="editor" name="pl">execuऐdscv int ैte song
        </div>
        <div id="view"  style="margin-left:51%;height:100%" class=" ace_editor ace-cobalt ace_dark">
       
        </div>
        
    </div>
        </form>
    





     <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.3/ace.js" integrity="sha512-yARx+3W/tyZPXyRfZ4DLRdj0rXF2yjH2D6bKpPslrl1c62Q6ZC808L++ft9jkzIN9vmLtQCFsYNrzoOE/Im2Dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
     <script>
let editoro = document.querySelector("#editor"); 
let editor=ace.edit(editoro);
editor.setTheme("ace/theme/cobalt");
editor.session.setMode("ace/mode/java");
console.log(m);
function save(){
    let m=editor.getValue();m=m.replace("\n",'');
console.log(m);
    var a='{"script":"'+m.toString()+'","username":"'+document.getElementsByName("uname")[0].value+'"}';
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "set.php");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        console.log(this.response);
    };console.log(a);
    xhr.send(a);
}
function run(){
    console.log("bj");
}


</script>
   <!-- <script src="main.js"></script>-->
  </body>
</html>
