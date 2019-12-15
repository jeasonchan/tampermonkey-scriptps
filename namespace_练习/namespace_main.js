"use strict";
exports.__esModule = true;
var server = {};
var Express = require("express"); //这种方式不能导出明明空间，所以，导出的就只是 function e了
var appjijii = Express();
appjijii.get("/api", function (request, response) {
    console.log("got " + request);
    response.send({ "code": 0, "message": "success" });
});
appjijii.listen(3000, function () {
    console.log("server is lietening to port 3000");
});
