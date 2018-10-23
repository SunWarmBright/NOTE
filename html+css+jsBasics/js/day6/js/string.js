// 格式化时间  2018-1-7 09:35:36 => 01月07日 09时35分 
function addZero(val) {
    return val.length === 2 ? val : '0' + val;
}
function time(date) { // '2018-1-7 09:35:36'
    var str = '';
    var dateArr = date.split(' '); // => 以空格分割'2018-1-7 09:35:36' => ['2018-1-7', '09:35:36]
    var d = dateArr[0].split('-'); // => ['2018', '1', '7']
    var month = d[1]; // 月
    var day = d[2]; // 日
    var a = dateArr[1].split(':'); // ['09', '35', '36']
    var hour = a[0]; // 小时
    var min = a[1]; // 分钟
    str = addZero(month) + '月' + addZero(day) + '日 ' + hour + '时' + min + '分';
    // str = 1 + '月' + 7 + '日 ' + hour + '时' + min + '分';
    return str;
} 
console.log(time('2018-1-7 09:35:36'))
// time('2018-11-7 09:35:36'); // => 01月07日 09时35分

// 查询字符串
var url = 'https://www.baidu.com/s?ie=utf-8&username=caoyuanye&password=123&age=11&height=165#hey';
// =>
    // 1. 拿到 ？ 的索引， 拿到 # 的索引
    // 2.  截取 (?+1, #) => ie=utf-8&username=caoyuanye&password=123&age=11&height=165
    // 3.  再以 & 分割 =》 [ie=utf-8, username=caoyuanye]
    // 4. 循环数组  把每一项用 = 分割 => [ie, utf-8]
    // 5. 第一项作为属性名arr[0] 第二项作为属性值arr[1]
function query(url) {
    var obj = {};
    // obj[arr[0]] = arr[1]
    var indexQ = url.indexOf('?');
    var indexW = url.indexOf('#');
    var queryStr = '';
    if (indexW === -1) {
        queryStr = url.slice(indexQ + 1);
    } else {
        queryStr = url.slice(indexQ + 1, indexW);
    }
    // queryStr = ie=utf-8&username=caoyuanye&password=123&age=11&height=165
    var queryArr = queryStr.split('&');
    // [ie=utf-8, username=caoyuanye....]
    for (var i = 0; i < queryArr.length; i++) {
        var cur = queryArr[i]; // ie=utf-8
        var curArr = cur.split('='); // [ie, utf-8]
        obj[curArr[0]] = curArr[1];
    }
    return obj;
}
console.log(query(url));