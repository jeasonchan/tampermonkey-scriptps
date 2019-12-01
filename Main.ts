import * as Xlsx from 'xlsx'

console.log("Start running......")


let excelFile: Xlsx.WorkBook = Xlsx.readFile("../tampermonkey-scriptps/resource/新建 Microsoft Excel 工作表.xlsx");
let sheetList: string[] = excelFile.SheetNames;
console.log("sheet有：" + sheetList);
console.log(excelFile.Props);
console.log(excelFile.Sheets)

console.log("start print sheet in cycle:")

for (let i: number = 0; i < sheetList.length; i++) {
    console.log(sheetList[i]);
    let sheetObject: Xlsx.WorkSheet = excelFile.Sheets[sheetList[i]];
    console.log(sheetObject);
    // console.log(Xlsx.utils.sheet_to_json(sheetObject));
}

// https://www.jianshu.com/p/7d2e584cbcc1


var hahah = {};
(hahah as any).name = "123";
