// 第一步获取到所有需要操作的DOM
var butt = document.getElementsByClassName('butt')[0];
// 拿到所有的 li
var lis = butt.getElementsByTagName('li');

var boxParent = document.getElementsByClassName('box')[0];
// 拿到boxParent下的div
var boxs = boxParent.getElementsByTagName('div');

// 点击时候真正的功能
function change(index) {
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = '';
        boxs[i].className = '';
    }
    lis[index].className = 'active';
    boxs[index].className = 'active';
}
// 第二步 给每一个LI绑定点击事件
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i; 
    // 循环的时候给每一个 li 添加一个私有属性index 值是每一次循环的 i
    lis[i].onclick = function () {
        // this 代表的是当前点击的DOM对象
        change(this.index);
    }
}

// i = 4

// 将this 和每一个li对比 拿到this在lis里面的位置
// lis是类数组 0：lis[0], 1: lis[1], 2: lisp[2], 3: lis[3]
// lis[i].onclick = function () {
//     // this 代表的是当前点击的DOM对象
//     // this 在 lis里面的位置(0,1,2,3)
//     var index = null;
//     for (var i = 0; i < lis.length; i++) {
//         if (lis[i] == this) {
//             index = i;
//         }
//     }
//     alert(index)
// }