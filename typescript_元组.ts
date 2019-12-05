//元组
//元组既可以是两位
var tuple01: [string, number, string] = ["", 1, ""];
var tuple02: [string, number] = ["1", 2];

interface aaaa {
    (arg1: string): string;
    (arg1: string, arg2: number): string;
    age: number;
    [name: string]: number
}

var person: aaaa = { "age": 888 };
person.age = 7;


var kkkk = function (hahaha: string): string {
    return "";
}


var ahahha: aaaa = (arg1: string) => {
    return ""
}

ahahha("222");
