var hey = document.getElementById('hey');
// console.log(hey);
// console.dir(hey);
// alert('hello world');

// var obj = {
//     name: 'caoyuanye',
//     age: 18
// }
// obj.height = 185;
// obj['weight'] = 180;
// delete obj.name; // 真删除
// obj.age = null;
// console.log(obj, obj.height, obj['weight'])

var name = 'age';
var personObj = {
    name: 'caoyuanye',
    age: 81,
    height: 156
}
// console.log(personObj[name], '>>>>');// 81
// console.log(personObj['name'], '>>>>');// caoyuanye
 // undefined caoyuanye  81  throw error


 var arr = [1, 2, {}, 'hello', true, []];
//  console.log(arr[3]);
//  arr[0] = 'world'
//  console.log(arr[0]);
//  arr[6] = 'hey';
//  console.log(arr);
//  delete arr[0];
//  console.log(arr);
arr[9] = 'hey';
console.log(arr);



var a = {
    name: 'caoyuanye',
    age: 18
}
// a = AAAFFF000
var b = a; 
// b = AAAFFF000
b.age = 28;
b = {
    name: 'zhaokaiwen',
    age: 61
}
// b = AAAFFF111
b.name = 'xuyifan'
// console.log(a, b)
// {name: 'caoyuanye', age: 28} {name: 'xuyifan', age: 61}


var obj1 = {
    num: 10,
    num2: obj1.num * 10 // Cannot read property 'num' of undefined
}
console.log(obj1);