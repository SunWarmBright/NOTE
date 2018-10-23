var arr = [1, 2, 3, 4, 5];
// console.log(arr[0], arr[1], arr[2], arr[3]);

for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]) // i = 0 1 2 3
}
// var i = 0; i < 4; 执行循环体; i++
// i = 1; i < 4; 执行循环体; i++
// i = 2; i < 4; 执行循环体; i++
// i = 3; i < 4; 执行循环体; i++
// i = 4; i < 4 为false 循环终止

for (var i = 0; i < arr.length; i += 2) {
    // console.log(arr[i]) // i = 0 2 4
}

var num = 0;
for (var i = 0; i < 10; i++) {
    if (num < 5) {
        num++;
        i++
    } else if (num < 8) {
        num += 2;
        i++
    } else {
        num += 3
    }
}
console.log(num); // 12 11 5
// 1.  i = 0; i < 10; num = 1,i = 1; i = 2
// 2.  i = 2; i < 10; num = 2,i = 3; i = 4
// 3.  i = 4; i < 10; num = 3,i = 5; i = 6
// 4.  i = 6; i < 10; num = 4,i = 7; i = 8
// 5.  i = 8; i < 10; num = 5,i = 9; i = 10
// 6.  i = 10; i < 10 不成立循环结束