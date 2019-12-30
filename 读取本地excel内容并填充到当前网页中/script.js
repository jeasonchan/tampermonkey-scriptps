// ==UserScript==
// @name         读取Excel填充网页
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/s?wd=js+xlsx&ie=UTF-8
// @grant        none
// @require https://cdn.bootcss.com/jquery/3.4.1/jquery.min.js
// @require https://cdn.bootcss.com/xlsx/0.15.1/xlsx.core.min.js
// ==/UserScript==

//本地编码时使用，此处使用了ES6标准的import，等价于const XLSX=require("xlsx")，
//前提是xlsx必须有default export 或者 使用了commonjs的导出风格
import XLSX, { write } from "xlsx";

'use strict';
// Your code here...油猴脚本，感觉就是的代替我们的在console进行了如下的js代码输入

//完全使用jquery操作，因此，函数体内中涉及元素操作的函数都要定义在ready函数内部，应该是油猴的特殊性
$(document).ready(function () {
    $('body').prepend('<input type="file" id="excel_file">');
    $('body').prepend('<button type="button" id="parser_and_input_button">填充</button>');

    //不能直接在标签内给标签的 onclick 属性赋值自己定义的函数，会报找不到的赋值的函数名错误
    //建议一整套搜使用jquery的操作，直接jquery的selector和action进行操作，如下：
    // $("#open_excel_button").on("click", parseFile);

    // $('body').prepend('<button type="button"  id="excel_file_2">button2</button>');
    // $("#excel_file_2").click(() => { $("#excel_file_2").hide() });  //已经明确某具体元素时，就不可以用this了

    // $("input").hover(() => { alert("别想输入东西！") });
    var excelFile;


    $("#excel_file").on("change", parseAndStoreToExcelFile);


    $("#parser_and_input_button").on("click", hahaha);

    //======================funciton define start=======================
    function parseAndStoreToExcelFile(event) {
        // console.log(event)

        var fileList = event.target.files;

        var fileReader = new FileReader();
        // console.log(fileReader);

        //和所有面向对象一样，js实例方法的第一个入参也是 this 对象，实际入参只需要一个入参：
        //输入为 ProgressEvent<FileReader> 类型 输出为void 的  函数对象
        function onload(ev) {
            console.log(ev)
            try {
                var data = ev.target.result;


                excelFile = XLSX.read(data, { type: 'binary' }); // 以二进制流方式读取得到整份excel表格对象

                // console.log(excelFile);

            } catch (e) {
                console.log(e);
                return;
            }

        }

        //将自己定义好的行为赋予给 fileReader 实例
        fileReader.onload = onload;

        // 以二进制方式打开文件，文件完全加载完毕(onload)之后，调用fileReader.onload
        // 典型的异步回调
        fileReader.readAsBinaryString(fileList[0]);
        // console.log(fileReader);

    }


    function hahaha() {
        write_cell_content_into_element(get_specific_cell_content());
    }


    function get_specific_cell_content() {
        console.log(excelFile);
        var sheetNameArray = excelFile.SheetNames;
        var sheet_1 = excelFile["Sheets"][sheetNameArray[0]];
        return sheet_1["B5"]["v"];
    }

    function write_cell_content_into_element(input) {
        console.log(input);
        $("#kw").val(input);

    }



    function printEachProperity() {
        // https://blog.csdn.net/sinat_19569023/article/details/78337553 jquery 获取input数据
        // https://www.cnblogs.com/imwtr/p/6001480.html

        // var files = $("#excel_file").prop('files')
        // var file = XLSX.readFile($("#excel_file").files[0]);
        // console.log(file.SheetNames);

        // //DOM原生方法，已经可行
        // var selectedFile = document.getElementById('excel_file').files[0];
        // var name = selectedFile.name;//读取选中文件的文件名
        // var size = selectedFile.size;//读取选中文件的大小
        // console.log("文件名:" + name);


    }


    // function parseFile() {
    //     // $("#excel_file").click();  //在ready函数外面不能使用，只能通过原始的文档树进行操作
    //     document.getElementById('excel_file').click();

    //     var files = document.getElementById("excel_file").prop("files");
    //     console.log(files)
    //     // var files = $("#excel_file").prop('files');//获取到文件列表
    //     var reader = new FileReader();//新建一个FileReader
    //     reader.onload = function (evt) { //读取完文件之后会回来这里
    //         console.log("hhh");
    //         var fileString = evt.target.result;
    //         console.log(a);
    //     }

    // }


    // function printAlert() {
    //     alert("WORKS");
    // }
    //======================funciton define end=======================

});
