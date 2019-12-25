// ==UserScript==
// @name         读取Excel填充网页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/*
// @grant        none
// @require https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @require https://cdn.bootcss.com/xlsx/0.15.1/xlsx.min.js
// ==/UserScript==

//本地编码时使用
// const xlsx = require('xlsx');



'use strict';
// Your code here...

//添加控件        
$(document).ready(function () {
    $('body').prepend('<input type="file" style="display:None" id="excel_file">');
    $("#open_excel_button").on("click", parseFile);
    $('body').prepend('<button type="button" id="open_excel_button">选择Excel</button>');
    $("#open_excel_button").on("click", parseFile);
});




//======================funciton define start=======================
function printEachProperity(object, properity) {
    alert(properity);
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


