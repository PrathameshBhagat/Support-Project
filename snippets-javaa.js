ace.define("ace/snippets/javaa",["require","exports","module"], function(require, exports, module) {
  "use strict";

exports.snippetText = "\
snippet ank\n\tअंक\n\
snippet an\n\tअंक  ${1:a} = ${2:5000};\n\
snippet byte\n\tबाइट\
snippet byt\n\tबाइट  ${1:a} = ${2:123};\n\
snippet chota\n\tछोटा\n\
snippet ch\n\tछोटा  ${1:a} = ${2:500};\n\
snippet lamba\n\tलंबा\n\
snippet la\n\tलंबा  ${1:a} = ${2:50000};\n\
snippet float\n\tफ्लोट\n\
snippet fl\n\tफ्लोट  ${1:a} = ${2:5.00};\n\
snippet bada\n\tबड़ा\n\
snippet bad\n\tबड़ा  ${1:a} = ${2:5.0000};\n\
snippet va\n\tवर्ण\n\
snippet var\n\tवर्ण  ${1:a} = '${2:a}';\n\
snippet boolean\n\tबूलियन\n\
snippet bo\n\tबूलियन  ${1:a} = ${2:सच};\n\
snippet dor\n\tडोर\n\
snippet dorr\n\tडोर  ${1:a} = \"${2:hello}\";\n\
snippet agar\n\tअगर\n\
snippet agar+\n\tअगर(${1:सच}){\n\t\t${2:\'तो ये करो\'}\n\t}\n\
snippet agary\n\tअगर (${1:सच}){\n\t\t${2:\'तो ये करो\'}\n\t} या {\n\t${3:\'या फिर ये करो\'}\n\t}\n\
snippet agary+\n\tअगर (${1:सच}){\n\t\t${2:\'तो ये करो\'}\n\t} या अगर (${3:सच}){\n\t\t${4:\'या फिर ये करो\'}\n\t} या {\n\t\t${5:\'या फिर ये करो\'}\n\t}\n\
snippet ya\n\tया\n\
snippet keliye\n\tकेलिए\n\
snippet keliye+\n\tकेलिए(${1};${2};${3})\n\
snippet kel\n\tकेलिए (अंक ${1:i} = 0;${1:i}<${2:Things}.length;${1:i}++){\n\t\tThings[${1:i}]\n\t}\n\
snippet jab\n\tजब\n\
snippet jab+\n\tजब(${1}){${2}}\n\
snippet ja\n\tजब (${1:/*जब ये होगा*/}){\n\t\t${2:/*तब ये चलेगा */}\n\t}\n\
snippet badle\n\tबदले\n\
snippet bad\n\tबदले (${1:\"स्तिथि(a+b)\"}){\n\t\tयदि ${2:10}:\n\t\t\t${3://तब ये करो}\n\t\t\tभंग;\n\t\tयदि ${4:20}:\n\t\t\t${5://तब ये करो}\n\t\t\tभंग;\n\t\tआम : ${6://आम तौर पर ये}\n\t}\n\
snippet yadi\n\tयदि\n\
snippet jari\n\tजारी\n\
snippet bhang\n\tभंग\n\
snippet aam\n\tआम\n\
snippet karo\n\tकरो\n\
snippet kar\n\tकरो{\n\t\t${2:/*कोड काम करेगा*/}\n\t} जब (${1:/*जब ये होगा*/})\n\
snippet tantra\n\tतंत्र\n\
snippet bahar\n\tबाहर\n\
snippet kaksha\n\tकक्षा\n\
snippet kak\n\tकक्षा ${1:Animal}{${2://मै जानवर कक्षा हु}}\n\
snippet samuh\n\tसमूह\n\
snippet sam\n\tसमूह ${1:Animal}{${2://मै जानवर समूह हु}}\n\
snippet sarvajanik\n\tसार्वजनिक\n\
snippet sthir\n\tस्थिर\n\
snippet rikt\n\tरिक्त\n\
snippet jaruri\n\tजरूरी\n\
snippet jar+\n\tसार्वजनिक स्थिर रिक्त जरूरी(डोर[] ${1:args}){\n\t\t${2:pri}\n\t}\n\
snippet print\n\tप्रिंट\n\
snippet vapas\n\tवापस\n\
snippet pri\n\tतंत्र.बाहर.प्रिंट(${1:\'hello\'});\n\
";
 exports.scope = "javaa";
});
