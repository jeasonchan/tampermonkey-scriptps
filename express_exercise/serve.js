"use strict";
exports.__esModule = true;
var server = {};
var Express = require("express"); //这种方式不能导出明明空间，所以，导出的就只是 function e了
var appjijii = Express();
appjijii.get("/test", function (request, response) {
    console.log("got:", request);
    response.send({ "code": 0, "message": Date.now() + " success" });
});
appjijii.listen(666, function () {
    console.log("server is lietening to port 666");
});
//最正确的导入方法！！！！主要是还是因为express模块写的不好，没有默认的到导出，导致ts原生导出无法识别
