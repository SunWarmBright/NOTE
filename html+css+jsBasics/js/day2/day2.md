### null && undefined
> null 空对象指针  多用来做占位
> undefined 未定义
赵凯文女朋友现在没有以后会有(null),他的男朋友现在没有以后也没有(undefined)

### toString
> 非普通对象转成字符串  就是你想的那样
> value.toString()  String(value) 常用将其他数据类型转成string类型
> null undefined 用不了toString
```javascript
(12).toString(); // '12'
(true).toString(); // 'true'
String(null); // 'null'
String(undefined); // 'undefined'
([1]).toString(); // '1'
([1, 2]).toString(); // '1,2'
console.log(String(null))
```

### 普通对象
> 用大括号包起来的键值对(key属性名 val属性值) 
```javascript
var obj1 = {
    name: 'zhaokaiwen',
    age: 25,
}
```
[添加/修改]
```javascript
// 1. 打点方式添加  对象.属性名 = 属性值
obj1.height = 178;
// 2. 用中括号添加 对象['weight'] = 属性值
obj1['weight'] = 120;

// 修改  和添加的操作一样 
// 如果有这个属性名就是修改，没有就是添加
obj1.height = 120;
obj1['weight'] = 180;
```
[查找]
```javascript
// 查  查找对象里面某个属性名的值
// console.log(obj1.height);
// console.log(obj1['weight']);
// 如果查找的属性名不存在，结果是undefined
```

[真删除/假删除]
```javascript
// 真删除 delete 对象.属性名
delete obj1.height;
delete obj1['weight'];
// 假删除
obj1.height = 120;
obj1['weight'] = 180;
```
`如果这个属性名是数字，就不用通过打点的方式操作`

### 数组的增删改查
> 数组用中括号包起来的零到多项内容 []是空数组
> 数组里面的每一项内容只要在JS有的数据类型，都可以
> 数组的属性名就是索引， 索引从0开始 逐一递加
> 数组还有一个属性叫length 存储的是数组内容的长度
[查找/添加]
```javascript
var arr = ['a', 'b', 'c'];
// 查找
console.log(arr[0]); // a
console.log(arr[1]); // b
arr[arr.length - 1]; // 获取数组最后一项
// 如果索引的内容不存在 拿到的值是undefined

// 添加
arr[3] = 'd';
arr[4] = 'e';

// 修改
arr[0] = 'hello';
arr[4] = 'world';
// console.log(arr);

// 删除
delete arr[0];
// 删除之后这个索引并不会消失，这个索引后面的值不会往前进一步(索引减一)
```

### 浅析JS运行机制
> 1. 浏览器拿到JS文件 形成一个全局作用域(global scope)是一个栈内存 运行JS代码
> 2. 变量提升/预解释
> 3. 代码自上而下运行
> 基本数据类型
`var a = 'hello'`
> 1. 在当前作用域开辟一个内存存储'hello'这个值
> 2. 在当前作用域下申明一个变量a
> 3. 将存储的值和变量联系起来
> 引用数据类型
`var obj = {name: 'xx'}  function fn() {...}`
> 1. 浏览器开辟一个堆内存(heap) 有一个16进制的地址 存储我们的值,
如果是对象存储的就是键值对；如果是函数存储的就是一堆字符串
> 2. 当前作用域下申明一个变量obj
> 3. 将变量和存储值的地址联系起来

### 数据类型检测
> [语法] typeof value
> 1. 返回一个字符串类型的值 描述的是value的数据类型
> 2. 不能区分object(对象)的细分，也就是说不能区分 普通对象 数组 正则 时间.....
```javascript
typeof true; // 'boolean'
typeof typeof typeof 12; // string
// 1. typeof typeof 'number'
// 2. typeof 'string'
// 3. 'string'
```
`需要记忆的其他检测数据类型的方式`
> 2. instanceof
> 3. constructor
> 4. Object.prototype.toString.call()

### 前置自增 ++i && 后置自增 i++
> 1. 自增 就是自增加一
> 2. ++i 表达式用的是自增之后的值  先自增后运算
> 3. i++ 表达式用的是自增前的值 先运算后自增
> 4. i = i + 1  和  i += 1
```javascript
var i = 1;
// i++;
// console.log(i); // 2
// ++i;
// console.log(i); // 3
// i = i + 1;
// console.log(i); // 4
// i += 2;
// console.log(i); // 5

// console.log(++i + 1) // ++i 表达式用的是自增之后的值  先自增后运算
// console.log(i++ + 2)  // i++ 表达式用的是自增前的值 先运算后自增
// console.log(i++ + 1 + i++); // 1 + 1 + 2
console.log(i++ + ++i + i++); // 1 + 3 + 3
console.log(i) // 4
```

### 数学运算 + - * /
> 1. - * /  把所有运算的项转成number类型再计算
> - NaN 和 任意number类型运算结果都是NaN
> 2. 加法运算
> - 数学运算 如果运算的两项都是number就是数学运算
> - 字符串相加 如果运算的两项都不是number类型，就都转成字符串类型然后拼接(拼接字符串)
> - {} +'1' // number 1
> - '1' + {} // '1[object Object]'
> - 如果表达式以左花括号开头，这是一个代码块，并不是我们认为的对象，会被忽略， 后面的 +'1' 其实就是把字符串1转成number1

### 判断语句
`if(条件) {} else if(条件) {} else {}`
> 1. 一旦有一个判断为true 后面的所有判断都不在执行
> 2. 会将条件转成Boolean数据类型，如果条件是表达式，会先计算表达式
```javascript
var a = 1;
if (a == 1) {
    ...
} else if (a == 1) {
    ...
} else {
    ...
}
if (a == 1) ...; // 只有一行可以这么写
```

`三元运算符`
[语法1] 条件 ? 代码1 ：代码2;
> 如果条件为true 执行代码1 
> 如果条件为false执行代码2
[语法2] val = 条件 ? val1 ：val2;
> 如果条件为true val等于val1
> 如果条件为false val等于val2
```javascript
var b = 1 - 'hello'; // NaN
b ? alert('A') : alert('B'); // B

var lit = NaN ? 1 : 0; 
console.log(lit); // 0
```

`switch case`
[语法]
switch (val) {
    case 条件1:
    ... val === 条件1 执行这里面的代码
    break;
    case 条件2:
    ... val === 条件2 执行这里面的代码
    break;
    default:
    .... 前面条件都不成立 执行这里面的代码
}

```javascript
var a = 1;
switch (a) {
    case 1:
        alert('A');
        break;
    case 1:
        alert('B');
        break;
    default:
        alert('C');
}
// 输出A
```

> 1. switch case 的比较是绝对比较 如果数据类型不同就直接不等 就是false
> 2. 如果不写break后面的判断就会被忽略 直接执行下面的代码，直到遇到break