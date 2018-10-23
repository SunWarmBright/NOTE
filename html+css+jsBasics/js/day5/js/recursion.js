// 递归 自己调用自己

function fn(n) {
    if (n < 1) {
        return 0;
    } // 临界值终断函数 下面代码就不走了
    return n + fn(n-1)
}
var result = fn(9) // 9 + 8 + 7 + 6 + ... + 1
// result = 9 + fn(8)
// result = 9 + 8 + fn(7)
// result = 9 + 8 + 7 + fn(6)
// ...
// ...
// ...
// result = 9 + 8 + 7 + 6 + 5 + 4 + 3 + fn(2) 
// result = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + fn(1) 
// result = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + fn(0) 
// result = 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0

var arr = [1,2,3, [4,5, [6,7, [8,9]]]]
// > [1,2,3,4,5,6,7,8,9] 数组扁平化
function myFlat(arr, result) {
    if (!result) {
        var result = []
    }
    for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        if (typeof cur === 'object') {
            myFlat(cur, result);
        } else {
            result.push(cur)
        }
    }
    return result;
}
// function myFlat(arr) {
//     return [].concat(...arr.map(x => Array.isArray(x) ? myFlat(x) : x))
// }
console.log(myFlat(arr))

// return 
// function fn() {
//     var a = 123;
//     console.log(1);
//     console.log(2);
//     return 'a'; // 终断函数执行
//     console.log(3);
//     console.log(4);
// }
// var result = fn();
// console.log(result); // 'a'