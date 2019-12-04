//创建数组
var array01 = [1, 2, 3, 4, 5];
var array02 = [1, 2, 2, 3, "string"];
var array03 = new Array(1, 2, 3, 4);
//感觉元组就是一种r特殊的数组
var variable = ["1", ""];
variable.push("true");
console.log(variable);
variable.shift();
console.log(variable);
//试试数组的一些方法
for (var each in array01) {
    console.log(each);
}
console.log(array01.concat(array02));
function checkBiggerThan4(element, index, array) {
    console.log("now is checking " + element + " and result is " + (element < 4));
    return element < 4;
}
//返回true，相当于continue；返回false，相当于break；
array01.every(checkBiggerThan4);
array01.forEach(function (each, index, array) { return console.log("\u7B2C" + index + "\u4E2A\u5143\u7D20\u662F" + each); });
var result = "**";
console.log(array02.join(result));
console.log(array01.map(function (each) {
    //一定要有返回值！返回值会作为map出来的新值放进一个新数组
    return each * 2 + 1;
}));
var ouuputResult = array01.reduce(function (previous, current, currentIndex, outputArray) {
    console.log(previous + "+" + current + "=" + (previous + current));
    return previous + current;
});
console.log(ouuputResult);
