// ==UserScript==
// @name         读取Excel填充网页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/s?wd=js+xlsx&ie=UTF-8
// @grant        none
// @require https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @require https://cdn.bootcss.com/xlsx/0.15.1/xlsx.min.js
// ==/UserScript==

//本地编码时使用



'use strict';
// Your code here...油猴脚本，感觉就是的代替我们的在console进行了如下的js代码输入

//完全使用jquery操作，因此，函数体内中涉及元素操作的函数都要定义在ready函数内部，应该是油猴的特殊性
$(document).ready(function () {
    $('body').prepend('<input type="file" id="excel_file">');
    $('body').prepend('<button type="button" id="parser_and_input_button">解析并填充</button>');

    //不能直接在标签内给标签的 onclick 属性赋值自己定义的函数，会报找不到的赋值的函数名错误
    //建议一整套搜使用jquery的操作，直接jquery的selector和action进行操作，如下：
    // $("#open_excel_button").on("click", parseFile);


    // $('body').prepend('<button type="button"  id="excel_file_2">button2</button>');
    // $("#excel_file_2").click(() => { $("#excel_file_2").hide() });  //已经明确某具体元素时，就不可以用this了

    // $("input").hover(() => { alert("别想输入东西！") });


    $("#parser_and_input_button").click(printEachProperity)

    //======================funciton define start=======================
    function printEachProperity() {
        
        alert($("#excel_file").value);
    }


    function parseFile() {
        // $("#excel_file").click();  //在ready函数外面不能使用，只能通过原始的文档树进行操作
        document.getElementById('excel_file').click();

        var files = document.getElementById("excel_file").prop("files");
        console.log(files)
        // var files = $("#excel_file").prop('files');//获取到文件列表
        var reader = new FileReader();//新建一个FileReader
        reader.onload = function (evt) { //读取完文件之后会回来这里
            console.log("hhh");
            var fileString = evt.target.result;
            console.log(a);
        }

    }


    function printAlert() {
        alert("WORKS");
    }
    //======================funciton define end=======================

});
