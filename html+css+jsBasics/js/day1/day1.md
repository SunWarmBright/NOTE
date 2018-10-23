### 自我介绍
王立军 
电话 18511574563
QQ/微信 270369591

### 前端
网页制作 css + html
html + css + ajax + jquery + js
html + css + ajax + jquery + zepto + js
html + css + ajax + /jquery/ + vue/react + webpack + js

### 浏览器
#### 渲染内核
webkit apple开发 Safari 以前的Chrome 
chromium/Blink  现在的Chrome浏览器 现在的欧朋浏览器
Trident 早期IE浏览器内核 
Edge内核 现在IE浏览器内核
gecko 火狐浏览器内核

国内大部分浏览器 和 手机浏览器都是用的 webkit/Blink 内核
双核浏览器就是 一个webkit/Blink内核 一个IE浏览器的内核

#### JS内核
V8引擎 Google自己开发的JS内核

### 编程语言
css 层叠样式表
HTML 超文本标记语言
编程得有自己的思想，比如面向对象/面向过程 
- 面向对象
- - java
- - php
- - c++
- - javascript
- 面向过程
- - c

### JS 组成
> 1. ECMAScript
> 2. DOM (Document Object Model) 文本对象模型
> 3. BOM (browser Object Model) 浏览器对象模型

### JS引入
通过script 标签
- 内嵌式  直接在script标签里面写JS代码
- 引入式  在script标签的src属性上写上JS文件的路径
> 引入式的script标签里面不能继续写JS代码(写了无效的)

### 变量
> 变量不是一个值，只是一个容器 存储我们的值，这个值是可以改变的所以称之为变量 variable
[语法]
1. var 变量名 = 值
2. function 函数名() {}  函数名也是变量名
3. let 变量名 = 值
4. const 变量名 = 值

#### 变量名的命名规范
1. 可用 a-z A-Z 0-9 _ $ 组成变量名 (强制的 不遵循会报错)
2. 关键词 保留词 不能用 (强制的 不遵循会报错)
3. 驼峰命名 多个英文单词命名的变量，从第二个单词开始首字母需要大写 (规范 不会报错)
4. 强英文语义化 (方便开发人员维护 规范 不会报错)   标签语义化主要为了SEO(搜索优化，给搜索引擎看的)
5. 区分大小写

### 数据类型
- 基本数据类型
- - String 字符串
- - Number 数字
- - Boolean 布尔值
- - Null 空对象指针
- - Undefined 空(未找到)
- 引用数据类型
- - Object 对象
- - - 普通对象(object) 数组 正则 时间对象
- - function 函数

`基本数据类型`
> 1. string(字符串) 用单引号或者双引号包裹零到多个字符
```javascript
var name = 'caoyuanye';// c a o 等等都叫字符
var age = "18"; // 就算里面的字符是18这个数字，但是用双引号包起来了，所以也是一个字符串
```
> 2. number(数字)  就是普通的数字和NaN
```javascript
var age = 18;
var ageNaN = 18 - 'hello'; // 结果就是NaN
```
> 3. boolean(布尔值) true/false
```javascript
var true1 = true;
var false1 = false;
```

`引用数据类型`
> 1. 普通对象 用大括号包起来的零到多组键值对(key value 就是属性名和属性值) {} 空对象
> 2. 数组 用中括号包起来的零到多个内容 [] 空数组
> 数组没有可见的属性名 但是它是有属性名的叫做index(索引)
> 数组索引从零开始 最大索引为数组长度减1
> 3. 函数 function fn(){}

### 输出内容
> 1. console.log() 日志输出 可以输出多项以逗号隔开
> 2. console.dir() 详细日志输出
> 3. alert() 弹窗输出

## 数据类型详解

### number详解

#### 将其他数据类型转成number数据类型

`基本数据类型转number数据类型`
方法 number() 或者 在需要转成number的数据前加上加号

#### 字符串转成number类型
> 1. 如果字符串的字符是一个有效数字 转换后的结果就是这个有效数字
> 2. 如果字符串的字符不是一个有效数字，结果是NaN
> 3. 如果是空字符串 结果是0
```javascript
var num1 = Number('18'); // => 18
var num2 = Number('hello');// => NaN
var num3 = Number('12hello');// => NaN
var num4 = Number('-12.5');// => -12.5
var num4 = Number('12.5');// => 12.5
var num5 = Number('');// => 0

var str1 = '18';
console.log(+str1);// => 18
console.log(Number(str1))// => 18
var str2 = 'hello';
console.log(+str2);// => NaN
console.log(Number(str2));// => NaN
```

#### 布尔值转成number类型
> 1. true 转成number类型就是 1
> 2. false 转成number类型就是 0
```javascript
var true1 = true;
var false1 = false;
var numTrue = Number(true1); // 1
var numFalse = Number(false1); // 0
```

#### null && undefined 转成number类型
> null 转成number类型结果是 0
> undefined 转成number类型是 NaN

#### 引用数据类型转成number类型
有两步操作
> 1. 现用toString方法将数据转成字符串
> 2. 再将这个字符串转成number类型
`普通对象`
> 1. 普通对象通过toString之后变成 '[object Object]'
> 2. 将字符串 '[object Object]' 转行number类型就是NaN
```javascript
var obj = {};
Number(obj); // NaN 
var strObj = obj.toString(); // [object Object]
var numObj = Number(strObj); // NaN
```

`数组`
> 1. 如果数组内容多于一项，结果就是NaN
> 2. 如果数组只有一项，并且这一项内容是有效数字(指的内容，不是数据类型) 结果就是这个有效数字
> 3. 空数组转成number类型 结果是 0
```javascript
var ary1 = [1, 2, 3];
var ary2 = [1];
var ary3 = [];
Number(ary1); // NaN ary1.toString() => '1,2,3' => NaN
Number(ary2); // 1 ary2.toString() => '1' => 1
Number(ary3); // 0 ary3.toString() => '' => 0
```

#### NaN => not a number
`isNaN()`
> 1. 将里面的值转成number类型
> 2. 判断这个值是不是NaN 是就返回true 不是就返回false
```javascript
// 1. 将里面的值转成number类型
// 2. 判断这个值是不是NaN
console.log(isNaN([1, 2, 3]), 'numAry1', 'NaN'); // true
console.log(isNaN([1]), 'numAry2', '1'); // false
console.log(isNaN([]), 'numAry3', '0'); // false
console.log(isNaN('hello'), 'hello'); // true
```
`NaN 和 NaN不相等`
> 绝对比较下NaN 和任何值都不相等 包括NaN本身
> 任何情况下 NaN 和 NaN 都不相等

### == && ===
> == 比较 返回一个布尔值 相等返回true 不相等返回false 如果数据类型不同会先转成相同数据类型
> === 绝对比较 如果两边数据类型不相等直接返回false

#### parseInt && parseFloat
> parseInt('12.5px') => 12
> parseFloat('12.5px') => 12.5
> 如果字符串开头是有效数字，截取所有连续的数字
> parseInt不能识别小数 parseFloat可以

### 将其他类型转成Boolean类型
>1. Boolean([value]) 返回一个布尔值
> 0 NaN null undefined ''(空字符串)这五个值转成Boolean类型是false 其他都是true
```javascript
Boolean('') // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(0) // false
```
>2. !!value 直接判断后面跟的值 和Boolean效果一样
两个感叹号跟着需要判断的数据
```javascript
!!'hello' // true
!!'' // false
!!null // false
!!0 // false
!!undefined // false
```
> 3. !value
一个感叹号两步
> 1. 将value转成Boolean类型
> 2. 再将这个布尔值取反
```javascript
!'hello' // false
!'' // true
!null // true
!0 // true
!undefined // true
```