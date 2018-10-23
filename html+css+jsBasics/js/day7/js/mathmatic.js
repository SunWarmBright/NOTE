// 数组不变式/循环不变式
// |---未操作---|---已经操作---|
//             i
// 洗牌算法 => 随机打乱一个数组
arr = [1, 2, 3, 4, 5];
// 每次循环拿到随机拿到一个可用索引
// 和未操作部分的最后一项做交换
// 已操作部分就加一 未操作部分减一
// 初始化 |----整个数组----|i|

// var len = arr.length;// 5
// for (var i = arr.length - 1; i >= 0; i--) {
//     var index = Math.floor(Math.random() * len); // 0 1 2 3 4
//     var temp = arr[i]; 
//     arr[i] = arr[index];
//     arr[index] = temp;
//     len--
// }
// 1. 在可用索引中随机取一个值 |---取索引---|--已经洗好牌的--|
// 2. 将取到的索引所在的值和未洗牌的最后一项调换位置
// (未洗牌数量-1/ 可用的索引-1)
arr = [1, 2, 3, 4, 5];
function ful(arr) {
    var len = arr.length; // 5
    while (len > 0) {
        var index = Math.floor(Math.random() * len); // 0 1 2 3 4
        var temp = arr[len - 1]; // 4
        arr[len - 1] = arr[index];
        arr[index] = temp;
        len--
    }
    return arr;
}
// var total = 0;
// arr = [1, 2, 3, 4, 5]; // 0.2
// for (var i = 0; i < 999999; i++) {
//     var result = ful(arr);
//     if (result[1] === 2) {
//         total++;
//     }
// }
// console.log(total/999999); // 0.2左右


// 冒泡排序 https://juejin.im/entry/59250db844d904006cefa11f
arr = [1, 4, 2, 7, 4, 2, 1];
//第一次大循环 i = 0
// arr[0] = arr[j] 1 和 4 比较 [1, 4, 2, 7]
// 4  和  2 比较 [1, 2, 4, 7]
// 4  和  7 比较 [1, 2, 4, 7]

// 第二次大循环 i = 1
// 1 和 2 比较  [1, 2, 4, 7]
// 2 和 4 比较  [1, 2, 4, 7]

// 第三次大循环 i = 2
// 1 和 2 比较 [1, 2, 4, 7]
function bubble_sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// |--未排序--|--已排序--|
// |---未排序---|j---|

// arr = [1, 4, 2, 7];
// for (var i = arr.length; i > 1; i--) {
//     var j = 0;
//     // [1, 4, 2, 7]
//     // j=0; 4 - 0 > 0; 1 和 4 [1, 4, 2, 7]
//     // j=1; 4 - 1 > 0; 4 和 2 [1, 2, 4, 7]
//     // j=2; 4 - 2 > 0; 4 和 7 [1, 2, 4, 7]
//     while(arr.length - j > 1) {
//         if (arr[j] > arr[j+1]){

//         }
//         j++;
//     }

    
//     // 每次这个for循环 都将
// }








