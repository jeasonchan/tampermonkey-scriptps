"use strict";
exports.__esModule = true;
var Xlsx = require("xlsx");
console.log("Start running......");
var excelFile = Xlsx.readFile("../tampermonkey-scriptps/resource/新建 Microsoft Excel 工作表.xlsx");
var sheetList = excelFile.SheetNames;
console.log("sheet有：" + sheetList);
console.log(excelFile.Props);
console.log(excelFile.Sheets);
console.log("start print sheet in cycle:");
for (var i = 0; i < sheetList.length; i++) {
    console.log(sheetList[i]);
    var sheetObject = excelFile.Sheets[sheetList[i]];
    console.log(sheetObject);
    // console.log(Xlsx.utils.sheet_to_json(sheetObject));
}
// https://www.jianshu.com/p/7d2e584cbcc1
console.log(typeof {});
