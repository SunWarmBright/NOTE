// var num = 9;
// if(num>10){
// 	num++;
// }else if(num>=0){
// 	num--;
// }else{
// 	num+=2;
// }
// console.log(num); // 8

var num = 10;
if(num - 'hello'){ // NaN
	num+=2;
}else if(num + 'hello'){ // '10hello'
	num+=3;
}else{
	num+=4;
}
// console.log(num); // 13

// 1 ? alert('A') : alert('B');
// var a = 1 ? 0 : 1; // a = 0
// if (a) {
//     alert('A')
// } else {
//     alert('B')
// }

// var a = 10;
// if (a > 10) {
//     alert('A')
// } else if (a - 10 + '') { // '0' 字符串0为true 
//     alert('B')
// } else {
//     alert('C')
// }
// a > 10 ? alert('A') : ((a - 10 + '') ? alert('B') : alert('C'));
// B 
// 如果需要后台返回一个 1 或者 0 作为判断
// 一定要先把后台转过来的值转成number类型，再去做判断
// review 

// var a = '1';
// switch (a) {
//     case 1 == '1': // '1'  true
//         alert('A');
//         break;
//     case true:
//         alert('B');
//         break;
//     default:
//         alert('C')
// }
// C

var a = false;
switch (a) {
    case 0:
        alert('A');
    case 1 === '1': // 1 === '1'返回值是false  false === false
        alert('B');
    case true:
        alert('C');
        break;
    default:
        alert('D');
}
// B
// AB