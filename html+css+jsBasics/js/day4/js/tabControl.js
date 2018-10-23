var butttons = document.getElementsByClassName('butt')[0];
var lis = butttons.getElementsByTagName('li');
var boxPar = document.getElementsByClassName('box')[0];
var boxs = boxPar.getElementsByTagName('div');

function change(n) {
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = '';
        boxs[i].className = '';
    }
    lis[n].className = 'active';
    boxs[n].className = 'active';
}

// 绑定点击事件 就是给DOM的onclick属性赋值一个函数，
// 当点击这个DOM的时候就执行这个函数
// lis[0].onclick = function () {
//     change(0)
// }
// lis[1].onclick = function () {
//     change(1)
// }
// lis[2].onclick = function () {
//     change(2)
// }
// lis[3].onclick = function () {
//     change(3)
// }
// 有问题
// for (var i = 0; i < lis.length; i++) {
//     console.log(i); // 3
//     lis[i].onclick = function () {
//         change(i) // 当我点击的时候i只是4
//     }
// }
// console.log(i); // 4

// 这是第一种方式 自定义属性的方式
// for (var i = 0; i < lis.length; i++) {
//     // 给每一个li(DOM对象) 存储对应的 i 
//     lis[i].index = i;
//     lis[i].onclick = function () {
//         // 当点击的时候 把当前点击的 DOM对象获取到，并且取到里面的index
//         // 绑定事件(函数)里面的 this 代表了触发这个事件时的DOM
//         console.log(this.index);
//         change(this.index);
//     }
// }

// 用闭包方式实现的
// for (var i = 0; i < lis.length; i++) {
//     ~(function(i) {
//         lis[i].onclick = function () {
//             change(i);
//         }
//     })(i)
// }

// 用let 方式实现 考试不可以用这种方式
for (let i = 0; i < lis.length; i++) {
    lis[i].onclick = function () {
        change(i);
    }
}
