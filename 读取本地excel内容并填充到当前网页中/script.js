// ==UserScript==
// @name         New Userscript
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




(function () {
    'use strict';
    // Your code here...
    
    //添加控件        
    $(document).ready(function () {
        $('body').prepend('<input type="file" id="excel_file">');
        $('body').prepend('<button type="button" id="open_excel_button">选择Excel</button>');
        $("#open_excel_button").on("click", parseFile);
    });

    console.log("haah");




    //======================funciton define start=======================
    function printEachProperity(object, properity) {
        alert(properity);
    }


    function parseFile() {
        console.log("click")
        $("#excel_file").click();
        console.log("click2")
        var files = $('input[id="excel_file"]').prop('files');//获取到文件列表
        var reader = new FileReader();//新建一个FileReader
        reader.onload = function (evt) { //读取完文件之后会回来这里
            var fileString = evt.target.result;
            console.log(a);
        }

    }


    function printAlert() {
        alert("WORKS");
    }
    //======================funciton define end=======================


})();
