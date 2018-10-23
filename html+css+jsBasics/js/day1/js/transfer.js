// 将其他数据类型转成number数据类型

// var num1 = Number('18');
// console.log(num1, 'num1', '18');
// var num2 = Number('hello');
// console.log(num2, 'num2');
// var num3 = Number('12hello');
// console.log(num3, 'num3');
// var num4 = Number('-12.5');
// console.log(num4, 'num4');
// var num5 = Number('');
// console.log(num5, 'num5');

// var str1 = '18';
// console.log(+str1);
// console.log(Number(str1))
// var str2 = 'hello';
// console.log(+str2);
// console.log(Number(str2));

// var true1 = true;
// var false1 = false;
// var numTrue = Number(true1);
// var numFalse = Number(false1);
// console.log(numTrue, 'true');
// console.log(numFalse, 'false');

// var null1 = null;
// var unde = undefined;
// console.log(Number(null1), 'null');
// console.log(Number(unde), 'undefined');

var obj = {};
Number(obj); // NaN
var strObj = obj.toString(); // [object Object]
var numObj = Number(strObj); // NaN

// array
var ary1 = [1, 2, 3];
var ary2 = [1];
var ary3 = [];
var numAry1 = Number(ary1); // NaN ary1.toString() => '1,2,3' => NaN
var numAry2 = Number(ary2); // 1 ary2.toString() => '1' => 1
var numAry3 = Number(ary3); // 0 ary3.toString() => '' => 0
// 1. 将里面的值转成number类型
// 2. 判断这个值是不是NaN
console.log(isNaN(ary1), 'numAry1', 'NaN'); // true
console.log(isNaN(numAry2), 'numAry2', '1'); // false
console.log(isNaN(numAry3), 'numAry3', '0'); // false
console.log(isNaN('hello'), 'hello'); // true
if (numAry1 == NaN) { // Nan == NaN false
    alert('hello')
}

Boolean('') // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(0) // false