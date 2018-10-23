var arr = [1, 2, 3, 4];
// console.log(1, 2, 3, 4);
// console.log(arr[0], arr[1], arr[2], arr[3]);

for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])
}
// 第一次循环 var i = 0; i < 4; 执行循环体; i++
// 第二次循环 i = 1; i < 4; 执行循环体; i++
// 第三次循环 i = 2; i < 4; 执行循环体; i++
// 第四次循环 i = 3; i < 4; 执行循环体; i++
// 第五次循环 i = 4; i < 4 条件不成立，结束循环

// 输出奇数项
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     i++
// }

// 叫模 意思是取余 %
// console.log(9 % 2) // 1
// for (var i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) console.log(arr[i]);
// }

arr = [1, 2, 5, 3, 4, 5, 6, 7];
// break
for (var i = 0; i < arr.length; i++) {
    if (i > 4) break; // 终断整个循环
    // console.log(arr[i]);
}

// 需求遇到值为5的不打印
for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== 5) {
        // console.log(arr[i])
    }
}

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 5) continue; // 终断本次循环
    // console.log(arr[i]);
}

var num = 0
for (var i = 0; i < 10; i++) {
    if (i < 5) {
        num++;
        i++
        continue;
    } else if (i < 8) {
        num += 2;
        i +=2;
        break;
    } else {
        num += 2
    }
    num++
    i++
}
// console.log(num, i); //5 8
// 1 2
// 2 4
// 3 6
// 5 8


