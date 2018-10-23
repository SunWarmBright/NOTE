### 浏览器内核
> 1. 渲染内核 
> webkit apple开发的浏览器内核 Safari浏览器 以前Chrome浏览器
> chromeium/Blink 现在的Chrome浏览器的内核 
> gecko 火狐的内核
> Trident 早期IE浏览器内核 edge内核 新版IE浏览器内核
> 大部分国内浏览器和手机浏览器都是基于 webkit和Blink 内核
> WebKit技术内幕 
> 浏览器拿到资源(html) => DOM树,CSSstyleSheet(CSS结构) => renderTree（渲染树，display:none的标签，script标签等在DOM树里有但是在renderTree里面没有） => 布局 => 渲染
> 2. JS内核 V8引擎

### JS组成
> 1. ECMAScrpt 
> 2. DOM Document Object Model (文档对象模型)
> 3. BOM Browser Object Model (浏览器对象模型)

### 编程语言
> css 层叠样式表
> HTML 超文本标记语言
> css HTML 都不属于编程语言，编程语言需要有自己的思想 (面向对象，面向过程)
> 面向对象 Java PHP c++ js
> 面向过程 C 

### 变量
> 变量就是一个容器，并不是一个具体的值，存储的才是我们的值，这个值是可以被改变的，所以叫变量(variable)
[语法] : var 变量名 = 值；

### 变量命名规范
> 1. 数字(0-9) 字母(a-z A-Z) 下划线 $ 
> 2. 驼峰命名 第一个单词首字母小写，从第二个有意义的单词开始首字母大写
> 3. 关键词和保留词不能使用
> 4. 严格区分大小写
> 5. 英文语义化

### 数据类型
`基本数据类型`
> 1. 字符串(string) 用单引号或者双引号包起来的零到多个字符
> 2. 数字(number) 普通数字  NaN(not a number) 
> 3. 布尔值(boolean) true / false
> 4. null 空对象指针
> 5. undefined 未定义
`引用数据类型`
> 1. object  普通对象 数组 正则 时间...
> 2. function 函数

### 常用输出
> 1. console.log(value1, value2)
> 2. console.dir(value) 详细输出
> 3. alert() 弹窗输出

### 把其他数据类型转成字符串数据类型
[语法] value.toString()  String(value)
> 除了普通对象，其他数据类型转成字符串和我们想象的差不多
```javascript
(12).toString(); // '12'
true.toString(); // 'true'
String(null); // 'null'
String(undefined); // 'undefined'
String([1,2,3]); // '1,2,3'
String([]); // ''
String({}); // 所有的普通对象转成字符串的结果都是'[object Object]'
```

### 把其他数据类型转成number类型
Number(value) +value     
parseInt() parseFloat() 这两个不是准确的把所有其他类型转成number类型
> 1. 字符串类型转成number类型
> 都是数字直接转成数字
> 有非数字就是NaN
> 空字符串为0
```javascript
Number('121'); // 121
Number('121p'); // NaN
Number(''); // 0
```
> 2. boolean类型转成number类型
> true => 1
> false => 0
```javascript
Number(true); // 1
Number(false); // 0
```
> 3. Number(null) => 0
> 4. Number(undefined) => NaN

> 5. 引用数据类型转成number
> 引用数据类型 => 字符串(toString) => number(Number)
[] => '' => 0
[1] => '1' => 1
[1,2] => '1,2' => NaN
{} => '[object, Object]' => NaN

`parseInt() parseFloat()`
> 字符串
> parseInt，如果第一个字符是数字，截取到第一个非数字，不识别小数;如果第一个字符非数字 结果就是NaN
> parseFloat和parseInt相似，只不过可以识别小数
> parseInt('12.4px') => 12
> parseFloat('12.4px') => 12.4
> parseInt/parseFloat('p12') => NaN

`NaN && isNaN`
> NaN number类型 (not a number)
> NaN 和谁都不相等 包括自己
> isNaN(value)  判断value是不是NaN
如果value是number类型，直接判断是不是NaN,如果不是number类型，先转成number类型。


### 将其他数据类型转成布尔值
> undefined NaN null '' 0 只有这五个值转成布尔值是false
> 其他都是true
```javascript
Boolean(0); // false
```
> !!value 和 Boolean(value) 效果是一样的
> !value 先将value转成布尔值再取反

### null && undefined
> null 空对象指针 不占用内存 现在不存在以后可能存在
> undefined 未找到  现在不存在以后也不可能存在
赵凯文(男生) 女朋友是null(现在没有以后可能有) 男朋友是undefined(现在没有以后也没有)

### 普通对象
> 用花括号包起来的零到多组键值对(key属性名 value属性值)
> 对象的增删改查
> 通过打点方式
> 通过中括号加字符串方式
```javascript
var obj = {
    name: 'caoyuanye',
    age: 18
}
obj.height = 185;
obj['weight'] = 180;
delete obj.name; // 真删除
obj.age = null; // 假删除
console.log(obj, obj.height, obj['weight'])
```

### 数组
> 数组是对象，用中括号包起来的零到多组内容
> 1. 数组像普通对象那样有看得到的属性名，
但是它是有属性名的我们叫它索引(index)
> 2. 数组有一个length属性，表示数组的长度
```javascript
 var arr = [1, 2, {}, 'hello', true, []];
 console.log(arr[3]);
 arr[0] = 'world'
 console.log(arr[0]);
 arr[6] = 'hey';
 console.log(arr);
 delete arr[0];
 console.log(arr);
 arr[9] = 'hey';
 console.log(arr);
```
> 如果对象的属性名是数字不能通过打点的方式操作

### JS运行机制
> 1. 浏览器拿到JS文件 形成一个全局作用域(global scope) 是一个栈内存(stack)
> 2. 预解释/变量提升
> 3. 代码自上而下运行
- - 遇到基本数据类型
var a = 'hello'
> > 1. 在当前作用域下开辟一个内存 存储hello
> > 2. 在当前作用域下申明一个变量
> > 3. 将变量和存储的值联系起来
- - 引用数据类型
var obj = {}
> > 1. 开辟一个堆内存(heap) 如果是对象就以键值对形式存储起来，如果是函数就把函数体以字符串形式存储起来，这个堆内存有一个16进制的地址
> > 2. 在当前作用域下申明一个变量
> > 3. 将这个变量和堆内存的地址联系起来

### 数据类型检测
> typeof value
> 返回一个字符串类型的值，描述的是value的数据类型
```javascript
// 基本数据类型
typeof ''; // 'string'
typeof 12; // 'number'
typeof true; // 'boolean'
typeof null; // 'object'
typeof undefined; // 'undefined'
// 引用数据类型
typeof function() {}; // 'function'
typeof {}; // 'object'
typeof []; // 'object'
typeof /^q/; // 'object'
```
> 1. typeof null 的结果是object
> 2. typeof 不能准确区分出Object大类下的小类，就是说不管是普通对象还是数组等输出的结果都是object

> typeof
> instanceof  
> constructor
> Object.prototype.toString.call()

```javascript
typeof typeof typeof 12; // 'string'
typeof 12; // 1. 'number'
typeof 'number'; // 2. 'string'
typeof 'string'; // 3. 'string'
```

### ++i(前置自增) i++(后置自增)
> 前置自增先自增后运算 表达式中用到的i是自增后的i
> 后置自增是先运算后自增 表达式中用到的i是自增前的i
```javascript
var i = 1;
var a = ++i + i++;
// 2 + 2
console.log(i); // 3
```
### JS中的数学运算
> 1. - * / 就是普通的数学运算 如果有不是number类型的值参与运算，就把这个值转成number类型
> 2. NaN 和任意数 - * / 都是NaN
> 加法
> 如果是基本数据类型会被转成number类型
> 引用数据类型会先转成string类型，在进行字符串拼接
> 1. 数字相加 都是number类型就是普通数字相加
> 2. 字符串拼接 有一方为string类型 就是字符串拼接
> 3. 特例 {} + '1' => 1  1 + {} => '1[object Object]'
> 因为一左花括号开头被认为是一个代码块，和+'1' 没有任何关系
> 所以我们计算的结果只是 +'1' 

## 条件判断
`if else`
[语法]
if (条件) {
    ...要执行的代码
} else if(条件) {
    ...要执行的代码
} else {
    ...要执行的代码
}
> 1. 条件可以是任意值，如果是表达式会先计算表达式，最后将这个值转成布尔值(这个值不是布尔值)
> 2. 如果前面有一个条件成立，后面的条件就不在判断

`三元运算符`
[语法] 条件 ? 代码1 : 代码2;
[语法] var a = 条件 ? value1 : value2;
```javascript
1 ? alert('A') : alert('B'); // A

var a = 1 ? 0 : 1; // a = 0
if (a) {
    alert('A')
} else {
    alert('B')
} // B
```

`= & == & ===`
> 1. = 一个等号就是赋值
> 2. == 比较 如果左右两边数据类型不同，会将两边数据转成相同类型
> 3. === 绝对比较 如果两边数据类型不同，直接不等

`switch case`
[语法]
switch (val) {
    case A: 如果 val === A 执行代码1
        代码1;
        break;
    case B: 如果 val === B 执行代码2
        代码2;
        break;
    default: 上面判断都不成立执行代码3
        代码3;
}
> 1. 判断条件是 val === A 和A是否为true没关系
> 2. break, 如果条件成立并且没写break会忽略下面的判断知道遇到break
> 如果条件不成立和break没关系

### for循环




































