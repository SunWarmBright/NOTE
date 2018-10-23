var zhaoGf = null;
zhaoGf = 1+1;
// console.log(String(null))
(true).toString();
var obj1 = {
    name: 'zhaokaiwen',
    age: 25,
    1: 'hello'
}
// console.log(obj1);
// 添加
// 1. 打点方式添加  对象.属性名 = 属性值
obj1.height = 178;
// console.log(obj1);
// 2. 用中括号 对象['weight'] = 属性值
obj1['weight'] = 120;
// console.log(obj1);

// 修改  和添加的操作一样 
// 如果有这个属性名就是修改，没有就是添加

obj1.height = 120;
obj1['weight'] = 180;
// console.log(obj1);

// 查  查找对象里面某个属性名的值
// console.log(obj1.height, 'height');
// console.log(obj1['weight'], 'weight');
// 如果查找的属性名不存在，结果是undefined

// 删除
// 真删除 delete 对象.属性名
delete obj1.height;
delete obj1['weight'];
// console.log(obj1)

// 假删除
obj1.height = 120;
obj1['weight'] = 180;

obj1.height = null;
obj1['weight'] = null;
// console.log(obj1);

console.log(obj1);