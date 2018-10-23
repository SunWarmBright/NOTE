// forEach 用法
var arr = ['a', 'b', 'c', 'd'];
arr.forEach(function(item, index, array) { 
    // 会执行arr.length次 遍历数组里面的内容
    // 第三个参数array代表的就是调用forEach的原数组
    // item和index分别代表每次执行的内容(arr[index])和索引
    // console.log(item, index, array);
});
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i], i)
// }
arr.includes('d'); // true
arr.includes('e'); // false

// 取一个3-10的随机数 包括3不包括10
3 + Math.random() * 7


// 写一个方法 传入 '2017/9/12 09:20:11' 返回 '09月12日 09时20分'
function addZero(n) {
    return n.length === 2 ? n : '0' + n;
}
function time(str) {
    var strArr = str.split(' '); // [2017/9/12, 09:20:11]
    var arrA = strArr[0].split('/'); 
    // '2017/9/12'.split('/') => [2017, 9, 12]
    var month = addZero(arrA[1]); // 9 => 09
    var day = addZero(arrA[2]); // 12
    var arrB = strArr[1].split(':'); // [09, 20, 11]
    var hour = arrB[0];
    var min = arrB[1];
    return month + '月' + day + '日 ' + hour + '时' + min + '分';
    // return 09 + '月' + 12 + '日 ' + 09 + '时' + 20 + '分';
}
// debugger;
time('2017/1/2 09:20:11')
// console.log(time('2017/1/2 09:20:11'));



var url = 'baidu.com?name=caoyuanye&age=18&heigth=170#hey';
// var url = 'baidu.com?name=caoyuanye&age=18&heigth=170';
function query(str) {
    var obj = {};
    // 第一步 拿到 name=caoyuanye&age=18&heigth=170
    var quertArr = str.split('?')[1]
                        .split('#')[0]
                        .split('&');4
    // 第二步 [name=caoyuanye, age=18, heigth=170]
    // 第三步 循环数组 将每一项name=caoyuanye => [name, caoyuanye]
    quertArr.forEach(function(item) {
        var cur = item.split('='); // [name, caoyuanye]
        // 第四步 obj[name] = caoyuanye
        obj[cur[0]] = cur[1];
    })
    return obj;
}
// console.log(query(url))
//query(url);// => {name: caoyouye, age: 18, height: 170}

//  a-z A-Z 0-9 取四位不重复的随机值形成一个验证码
// qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890
// 循环四次
// 在0-62中取一个随机数
// 将 str[index] 放入结果(放入结果之前需要判断是否重复)

function validata() {
    var str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    var result = '';
    for (var i = 0; i < 4; i++) {
        var index = Math.floor(Math.random() * 62);
        var cur = str.charAt(index);
        if (result.includes(cur)) {
            i--;
            continue;
        }
        result += cur;
    }
    return result;
}
function validata2() {
    var str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
    var result = '';
    while (result.length < 4) {
        var index = Math.floor(Math.random() * 62);
        var cur = str.charAt(index);
        if (!result.includes(cur)) result += cur;
    }
    return result;
}
// console.log(validata2());

function num() {
    // 遍历实参
    // 判断只要number 和 string 类型
    // 判断是不是有效数字，是就累加
    var type = ['number', 'string'];
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        var cur = arguments[i];
        if (type.includes(typeof cur)) {
            var curNum = +cur;
            if (!isNaN(curNum)) total += curNum;
        }
    }
    return total;
}
// var res = num(1, 3, 5, 'hello', 'hey', '12', true, ['1'], NaN); 
// => 21

function num1() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        var cur = arguments[i];
        // if (typeof cur === 'number' || 'string') 不能这么写
        // if (true || 'string')
        // if (false || 'string')
        // === 10级  || 5级  && 6级
        if (typeof cur === 'number' || typeof cur === 'string') {
            var curNum = +cur;
            if (!isNaN(curNum)) total += curNum;
        }
    }
    return total;
}
var res = num1(1, 3, 5, 'hello', 'hey', '12', true, ['1'], NaN); 
// console.log(res)

// 递归 
// 函数自己调用自己
// 必须有一个临界值，结束自己调用自己

function fn(n) {
    if (n === 1) return 1;
    return n + fn(n - 1);
}
fn(4); // 4 + 3 + 2 + 1
// 4 + fn(3)
// 4 + 3 + fn(2)
// 4 + 3 + 2 + fn(1)
// 4 + 3 + 2 + 1 => 10

function fn1(n) {
    if (n === 1) return 1;
    if (n % 2 === 0) return fn1(n - 1);
    return n * fn1(n - 2);
}
// console.log(fn1(5)); // 15
// console.log(fn1(4)); // 3
fn1(5); // 5 * 3 * 1
fn1(4); // 3 * 1
// fn1(3)
// 3 * fn1(1)
// 3 * 1


function queryAllId(id) {
    var ids = [];
    // 获取所有的元素
    var allHtml = document.getElementsByTagName('*');
    for (var i = 0; i < allHtml.length; i++) {
        var cur = allHtml[i];
        if (cur.id === id) ids.push(cur);
    }
    return ids;
}
console.log(queryAllId('myId'));
queryAllId('myId'); // [.., ..]











