// JS运行机制例题
var obj1 = {n: 100};
var obj2 = obj1;
obj2['n'] = 200;
console.log(obj1.n);

var ary1 = [3, 4];
var ary2 = ary1;
ary2[0] = 1;
ary2 = [4, 5];
ary2[1] = 2;
ary1[1] = 0;
console.log(ary1, ary2);

// var obj = {
//     n: 10,
//     m: obj.n * 10 // Cannot read property 'n' of undefined
// };
// console.log(obj);