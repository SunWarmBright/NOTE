### for循环
[语法] for (var 变量 = val; 条件; 变量的变化) {} 
var arr = [1, 2, 3]
for (var i = 0; i < arr.length; i++) {}

```javascript
// 输出奇数项
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    i++
}
// 取余的方式输出奇数项
for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) console.log(arr[i]);
}
```
`取余 %`
取余的过程叫做模
[语法] value1 % value2

`break`
> 终断整个循环 for 里面的i++也不执行了
```javascript
arr = [1, 2, 3, 4, 5, 6, 7];
// 输出前五项
// break
for (var i = 0; i < arr.length; i++) {
    if (i > 4) break;
    console.log(arr[i]);
}
```
`continue` 
> 终断本次循环下面的代码都不执行，后面的循环继续
```javascript
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 5) continue; // 终断本次循环
    console.log(arr[i]);
}
```

`== !=`
> == 比较 判断是否相等 如果遇到数据类型不同会转成相同数据类型
> != 比较 判断是否不等 如果遇到数据类型不同会转成相同数据类型
`=== !==`
> === 绝对比较 判断是否相等 如果遇到数据类型不同直接不等
> !== 绝对比较 判断是否不相等

### 获取页面中的DOM
> 1. var id = document.getElementById('')
> > 只能用document 并且拿到的是一个(如果页面有相同的ID，拿到的是第一个DOM)
> > 是一个对象 typeof id => 'object'
> > 有很多属性/方法
> id 
> className 元素的类名(是一个字符串)
> style 元素的样式(对象)
> tagName 元素大写的标签名
> innerHTML 如果是获取拿到的是带HTML标签的字符串 如果是设置会把字符串里面的HTML标签识别
> innerText 如果是获取拿到的只有text没有标签 如果是设置浏览器不会识别字符串里面的HTML标签
> onclick 绑定点击事件
> 2. [context].getElementsByClassName('')
> context 上下文的意思 一般是其他DOM, 在上下文中寻找有这个classname的DOM
> 获取的是一个像数组的内容(HTMLCollection)，其实是类数组(普通对象)
> 里面的每一项都是DOM对象

### 函数 浅析
> 函数的本质就是封装，将实现同一功能的代码封装成一个函数。如果需要再次使用这个功能，直接执行这个函数就可以了。减少页面冗余的代码，提高代码复用率(低耦合高内聚)
[语法] function 函数名(参数) {  函数体(真正需要执行的代码)  } // 定义函数
[语法] 函数名()  // 执行函数
```javascript
num = 1;
function fn() {
    num += 10; // 11 15.5 17.75
    num /= 2; // 5.5 7.75 8.875
}
fn(); // num = 5.5
fn(); // num = 7.75
fn(); // num = 8.875
// console.log(num)
console.log(fn) // 输出的是函数本身
```
`函数运行机制 如图`
> 函数是引用数据类型
> 函数执行的时候回形成一个私有作用域 (是一个栈内存)
> 形成私有作用域后将存储在heap里面的字符串复制一份过来自上而下执行

`参数 (形参 实参)`
> 形参 ：函数定义的时候里面传入的参数是形参，本质是一个在函数内部使用的私有变量
> 实参 ：函数执行的时候传入的参数是实参，本质是一个值
> 如果形参数量大于传入的实参数量，没有对应上的形参就是undefined
> 如果传入的实参数量大于需要的形参数量，多余的实参会被忽略