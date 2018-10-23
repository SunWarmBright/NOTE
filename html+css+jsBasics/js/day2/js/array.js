// 数组的增删改查
var arr = [0, 1, 2, , 3, null, {}, []];
// length
console.log(arr['length']);
console.log(arr.length);

// 查找
var arr = ['a', 'b', 'c'];
arr[arr.length - 1]; // 获取数组最后一项
// console.log(arr[0]); // a
// console.log(arr[1]); // b
// 如果索引的内容不存在 拿到的值是undefined
// 添加
arr[3] = 'd';
arr[4] = 'e';
// console.log(arr);

// 修改
arr[0] = 'hello';
arr[4] = 'world';
// console.log(arr);

// 删除
delete arr[0];
