// 数组去重
var arr = [1, 2, 3, 1, 2, 3];
// var arr = [1, 2, 2, 2, 2, 3, 1, 2, 3];
// => [1, 2, 3, 4]
// 两次循环去重
// 时间复杂度 
for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];
    // 用cur 和 数组后面的每一项作比较
    // i + 1 就是cur后面的第一项
    for (var j = i + 1; j < arr.length; j++) {
        if (cur === arr[j]) {
            // 把索引为J这一项删除
            arr.splice(j, 1);
            // j = 3
            // [1,2,3,1,2,3] => [1,2,3,2,3]
            // j++ => 4 漏了比较第二个2这一项，这就是数组塌陷
             j--; //所以需要 -1
        }
    }
}
// console.log(arr)
// 两次循环嵌套
// 外部循环，拿到的一个值和内部循环每个值作比较，如果相同就删了内部循环相同的值

function unique1 (arr) {
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            if (cur === arr[j]) {
                arr[j] = arr[arr.length - 1];
                arr.splice(arr.length - 1, 1);
                j--;
            }
        }
    }
    return arr;
}
// 1  [1,2,3, ,2,3,1,2,3,1,2,3,1,2,3,1,2,3]
// 15 个单位的计算
// 1  [1,2,3, 3 ,2,3,1,2,3,1,2,3,1,2,3,1,2]
// 2  个单位的计算


// 删除数组最后一项
// arr.splice(arr.length - 1, 1);
// arr.pop()
// arr.length-- / arr.length = arr.length - 1

// 在数组末尾添加一项
// arr.push();
// arr.splice(arr.length, 0, 9);
// arr[arr.length] = '';


// 2. 使用对象属性名方式去重
// 如果对一个对象的一个属性名进行赋值操作
//，没有这个属性名那就是添加新的属性名，有这个属性名就是更改

var arr = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']
var obj = {}
// 第一步循环数组
// 判断obj里面有没有一项  obj[arr[0]] => obj['a'] 
// => 如果没有就在这个对象里面添加 obj[arr[i]] => obj['a'] = 'a'
// => 如果有这一项 删除arr[4]也就是说删除 'a'
var arr = ['a', 'b', 'c', 'a', 'b', 'c', 'd'];
var obj = {};
for (var i = 0; i < arr.length; i++) {
    var cur = arr[i];
    if (!obj[cur]) {
        // 没有obj[cur]这一项
        obj[cur] = true;
    } else {
        arr.splice(i, 1);
        i--;
    }
}
// console.log(arr);
//1. obj = {}, cur = 'a', obj['a'] == undefined obj = {a: true}
//2. obj = {a: true}, cur = 'b',
// obj['b'] == undefined obj = {a: true, b: true}
//3. obj = {a: true, b: true}, cur = 'c', obj['c'] == undefined 
// obj = {a: true, b: true, c:true}
//4. obj = {a: true, b: true, c:true}, 
// cur = 'a', obj['a'] == true , 删除


// 随机打乱一个数组 思考题 sort
var arr = [1, 2, 3, 4]; // 2 => 0.25

arr.sort(function(a, b) {
    return Math.random() - .5;
});
// console.log(arr);
// arr.sort(() => Math.random() - .5);
// var total = 0; 
// for (var i = 0; i < 999999; i++) {
//     arr.sort(function(a, b) {
//         return Math.random() - .5;
//     });
//     if (arr[1] === 2) {
//         total++;
//     }
// }
// console.log(total/999999) // 验证算法是否正确  值在0.25左右

// 洗牌算法
// arr = [1, 2, 3, 4, 5]
// 5个索引 取一个 2  arr[2]和最后一项调换位置  让可用索引减1
// 4个可用索引 取一下 0  arr[0]和倒数第二项调换位置 让可用索引减1
Math.floor(Math.random() * 5) // 0 1 2 3 4

