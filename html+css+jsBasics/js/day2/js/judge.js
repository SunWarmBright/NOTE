// 判断语句
var a = 1;
// 0 null NaN undefined ''  这五个值转成Boolean是false其他都是true
// if (a) {
//     console.log('A')
// } else if (a == 1) {
//     console.log('B')
// } else {
//     console.log('C')
// }

// if (a > 0) {
//     console.log('D')
// }

var num = -6;
if(num>10){
	num++;
}else if(num>=0){
	num--;
}else{
	num += 2; // num = num + 2
}
// console.log(num); // -4
(num > 10) ? num++ : (num>=0 ? num-- : num+=2);
// console.log(num); // -2

var b = 1 - 'hello'; // NaN
// 条件 ? 代码1 ：代码2;
// > 如果条件为true 执行代码1 
// > 如果条件为false执行代码2
// b ? alert('A') : alert('B');
var num = -6;
if(num>=0){
	num--;
}else{
	num += 2; // num = num + 2
}

var lit = NaN ? 1 : 0; 
console.log(lit); // 0



var a = 1;
// switch (a) {
//     case 1:
//         alert('A');
//     case '1':
//         alert('B');
//         break;
//     default:
//         alert('C');
// }
var a = 1;
switch (a) {
    case a === 1: // 这个就是true 和 a 比较 一个布尔值一个number不相等
        alert('A');
        break;
    case '1':
        alert('B');
        break;
    default:
        alert('C');
}
// A c