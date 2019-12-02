var txt = new String("123");
var txt2 = "123";
console.log(txt == txt2);
//结果竟然时 true，和java不同……
console.log("txt\u7684\u6784\u9020\u65B9\u6CD5\u662F\uFF1A" + txt.constructor);
//txt的构造方法是：function String() { [native code] }
var aList = ["1", "2", "3"];
for (var each in txt) {
    console.log(each);
}
console.log(txt[1]);
console.log(txt.charAt(1));
var newTxt = txt.concat("——" + txt2);
console.log(newTxt);
var str = "Apples are round, and apples are juicy.";
var splitted = str.split(" ", 0);
console.log(splitted); // [ 'Apples', 'are', 'round,' ]
