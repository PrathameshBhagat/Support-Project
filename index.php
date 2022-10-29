<html lang="UTF-8">
  <head>    
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body><div id="N1" align="left" ></div><div id="N2"  ></div>
    <form>
        <h3 class="question">Write a program in hindi we will get it converted into java/python/c++/js/php code<br>
            <INPUT TYPE="TEXT" name="uname" placeholder="prathamesh " >&nbsp
            <INPUT TYPE="TEXT" name="lang" placeholder="java">
            <input type="button" value="SAVE" onclick="save()">
            <input type="button" value="RUN" onclick="run()">
        </h3>
    <div class="editor-container" id="mycode">
         <div type=text id="editor" name="pl">public class Main {
public static void main(String [] a){
    System.out.println("hello world");
    }
}</div>
        <textarea id="view"  style="margin-left:51%;height:100%" class=" ace_editor ace-cobalt ace_dark"></textarea>
    </div>
        </form>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/ace/1.12.3/ace.js" integrity="sha512-yARx+3W/tyZPXyRfZ4DLRdj0rXF2yjH2D6bKpPslrl1c62Q6ZC808L++ft9jkzIN9vmLtQCFsYNrzoOE/Im2Dg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
   <script src="main.js"></script>
  </body>
</html>
