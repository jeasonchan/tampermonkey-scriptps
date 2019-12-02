//function  关键字定义类
function Person(name: string, age: number) {
    this.name = name;
    this.age = age;
}
Person.prototype.type = "Person";
new Person("jeason", 12);



//===========================ts中接口独有的用法？？？？？？
//使用接口约束函数的入参和返回类型？？？？？？？
interface FetchInstance {
    (config: {}): {};
    (url: string, config: {}): {};
}


// 定义具有两个重载的 fetch0
function fetch0(config: {}): {};
function fetch0(url: string, config: {}): {};

function fetch0(url: string | {}, config?: {}): {} {
    return {};
}

// 赋值给 FetchInstance 类型的变量无压力
const fetch1: FetchInstance = fetch0;

var test_var: FetchInstance = {};//接口规定了函数的输入和方法两个方面；
//其实应该赋值一个函数对象，输入和输出都和接口里定义的相同才行

//类型和FetchInstance不符合
class hahaha implements FetchInstance {
}


//===========================类似于java中的接口用法
interface Operate {
    add(number1: number): number;
}

class Test implements Operate {
    add(number1: number): number {
        throw new Error("Method not implemented.");
    }

}


//===========typescript动态添加属性
class Session {

}
interface IUser {
    name: string;
    password: string;
    url: string;
}
var session = new Session();
var user = (session as IUser);
user.name = "Tokyo-hot";
user.password = "None";
user.url = "magnet:?xt=urn:btih:ff671a45cbd3688bc06a15958be292cb649c3b4e";

//忙的时候就使用万能的any;
//session.haha=123;   //报错，session上不存在属性haha
(session as any).name = 'papapapa';

//另一种优雅的解决方法
interface LooseObject {
    [key: string]: any
}

var obj: LooseObject = {};

//==================================
