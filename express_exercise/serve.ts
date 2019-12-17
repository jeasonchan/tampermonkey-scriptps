import * as Express_NameSpace from "express"  //这种方法默认导入的是命名空间 e
var server: Express_NameSpace.Express = {} as Express_NameSpace.Express

import Express = require("express")  //这种方式不能导出明明空间，所以，导出的就只是 function e了

var appjijii: Express_NameSpace.Express = Express()
appjijii.get("/api", (request, response) => {
    console.log(`got ${request}`)
    response.send({ "code": 0, "message": "success" });
});

appjijii.listen(3000, function () {
    console.log("server is lietening to port 3000");
});



//最正确的导入方法！！！！主要是还是因为express模块写的不好，没有默认的到导出，导致ts原生导出无法识别