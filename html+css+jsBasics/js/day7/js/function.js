// function add() {
//     // arguments = > [1,2,3,4,5] 传入的实参集合 是一个类数组
//     var result = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         result += arguments[i];
//         // total = total + arguments[i]
//     }
//     return result;
// }
// var total = add(1,2,3,4,5); // 15
// console.log(total); // 15

function fn(a, b) {
    console.log(a, b); // 1, 2
    arguments[1] = 'world';
    console.log(a, b); // 1, 'world'
    a = 'hello';
    console.log(arguments); // ['hello', 'world']
}
// fn(1, 2);

var arr = [1,2,3];
function fn1(a) {// a = AAAFFF00
    a[0] = 2;
    console.log(arguments); // [2,2,3]
}
// arr = AAAFFF00
// fn1(arr);
// console.log(arr); // [2,2,3] 






var str = 'hello';
function fn2(c, d) {
    var a = 1;
    function fn3(f) {console.log()}
    console.log(a); // 1
}
// fn2();
// console.log(str); // 'hello'
// console.log(a); // 报错 a is not defined(a找不到)


function add() {
    // 私有变量 => 函数内部申明的变量 和 形参
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
var total = add(1,2,3,4,5); // 15
// console.log(total); // 15

// //  实名函数  name: 'fn3'
// console.dir(function fn3(){});
// //  匿名函数  name: ''
// console.dir(function (){});

// 自执行函数 ~(匿名函数)();
var str = 'hello world!';
// ~(function (a){
//     alert(a);
// })(str);
// function fn4(a) {
//     alert(a);
// }
// fn4(str);





















