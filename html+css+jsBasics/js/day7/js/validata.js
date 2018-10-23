// 验证码
// 在页面中点击一个按钮，随机出现4个字符(验证码)
// 这四个字符来自 a-z A-Z 0-9


function validata() {
    var str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890' 
    var index = null;
    var result = '';
    for (var i = 0; i < 4; i++) {
        // 在当前str的所有索引中随机取一个
        index = Math.floor(Math.random() * str.length);
        // 取到索引index在str中的值 和 result进行字符串拼接
        var cur = str.charAt(index);
        if (result.indexOf(cur) === -1) { // h => 12h
            // 如果在str中没有这个值 就将它加入result
            result += cur;
        } else {
            // 如果在str中有这个值，我们需要再循环一次
            i--;
        }
    }
    return result;
}

function validata2() {
    var str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890' 
    var index = null;
    var result = ''; // 0
    var cur = '';
    while (4 > result.length) {
        // 取到可用的随机数(索引)
        index = Math.floor(Math.random() * str.length);
        cur = str[index]; // 取到索引的值
        // 判断这个值在不在result里面，不再就将这个值放入result
        if (result.indexOf(cur) === -1) result += cur;
    }
    return result;
}

// 获取到需要绑定点击事件的button
var button = document.getElementsByTagName('button')[0];
// 获取到需要替换验证码的div
var cont = document.getElementById('cont');
// 给button绑定点击事件，点击的时候更换验证码
button.onclick = function (){
    var data = validata2(); // 获取到四位不同的验证码
    cont.innerText = data; // 将验证码放入div中
}

var names = document.getElementsByName