import * as Express from "express";//单独导入的Exprss命名空间
const express = require("express");//单独导入express构造函数



let server: Express.Express = express();

server.get('/', handle);//相当于传递了一个对象进来，或者用lambda表达式也可以

server.listen(3000, function () {
    console.log("server is lietening to port 3000");
});


function handle(req: Request, res: any) {
    console.log("got request from" + req);
    res.send('Hello World!')
}



