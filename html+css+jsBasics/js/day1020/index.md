### 数组的常用方法
`改变原数组的 7个` arr = [1, 2, 3]
> 1. arr.push(x, y); 在数组末尾添加任意项
> 2. arr.pop(); 删除数组最后一项
> 3. arr.shift(); 删除数组的第一项
> 4. arr.unshift(x, y); 在数组开头出添加任意项
> 5. arr.sort(); 如果不传参数只能排序10以内的，
> arr.sort(function(a, b) {return a - b}); 如果需要排序10以上的数，需要穿一个函数，有两个形参a, b，这个函数return a-b表示升序，return b-a降序
> 6. arr.reverse(); 颠倒数组顺序
> 7. arr.splice(n, m, x, y, z); 从数组索引为n开始，删除m个值，再添加上(索引n处开始添加)内容(x, y, z) 
> arr.splice(n, m); 表示从索引n开始删除m项
> arr.splice(n); 表示从索引n开始一直删除到末尾
`不改变原数组的 6个` arr = [1, 2, 3]
> 1. arr.slice(n, m); 复制原数组的部分内容，从索引n开始到索引m，包括索引n不包括索引m, n 和 m可以为负数 如果是负数就是从数组的最后开始数(-1 为数组的最后一项， 没有-0)
> 2. arr.toString(); 将数组转成字符串 [1,2].toString() => '1,2'
> 3. arr.join(); 和toString()一样 [1,2].join() => '1,2'
> arr.join(''); 没有逗号 [1,2].join('') => '12'
> arr.join('+'); 以固定连接符链接数组  [1,2].join('+') => '1+2'
> 4. arr.concat(); 合并数组(合并的内容可以不是数组)
> 5. arr.indexOf(val); 返回查找内容的索引，也就是返回val在数组中的索引，如果找不到这个内容返回 -1
> 6. arr.lastIndexOf(val); 返回查找内容(val)在数组最后一次出现的索引
> 7. arr.includes(val); 返回一个布尔值，如果数组里面有val这项内容返回的就是true，如果没有这项内容返回的就是false
> 7. arr.forEach()forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。注意: forEach() 对于空数组是不会执行回调函数的。
> forEach, filter, map, some, reduce

### 字符串常用方法 str = 'hello'
> 1. str.charAt(index);  查找str中索引为index的值
> 2. str.charCodeAt(index); 查找str中索引为index的Unicode值
> 3. str.subStr(index1, m); 从str索引index处开始查找m个值
> 4. str.subString(index1, index2); 从索引index1(包括) 查找字符 到index2(不包括) index1 和 index2 不可以为负数
> 5. str.split(val); 以val分割字符串，返回一个数组(不包括val本身)
> 6. str.slice(index1, index2); 从索引index1(包括) 查找字符 到index2(不包括), index1 和 index2 可以为负数
> 7. str.replace(oldVal, newVal); 用newVal替换字符串中的oldVal
如果不经过处理，只能替换第一个oldVal
> 8. str.toUpperCase(); 将str所有字符转成大写
> 9. str.toLowerCase(); 将str所有字符转成小写
> 10. str.indexOf(); 和数组一样
> 11. str.lastIndexOf(); 和数组一样

### Math 常用方法 
> 1. Math.abs(num); 去绝对值
> 2. Math.max(a, b, c); 取a, b, c 的最大值
> 3. Math.min(a, b, c); 取a, b, c 的最小值
> 4. Math.floor(num); 向下取整
> 5. Math.ceil(num); 向上取整
> 6. Math.random(); 取随机数 在0(包括) 到 1(不包括)范围
> 7. Math.round(num); 四舍五入
> 8. Math.sqrt(); 开平发
> 9. Math.pow(n, m); 求n的m次幂

### 时间格式化 查询字符串  获取随机数

### 函数
[语法] function 函数名(形参){} // 申明一个函数
[语法] 函数名(实参)  // 函数执行
> 1. 函数是一个引用数据类型
> 2. 参数 
> 形参 函数申明的时候定义的， 本质是一个变量
> 实参 函数执行的时候传的参数，本质是一个值
> 实参集合 arguments,是一个类数组，可以拿到所有的实参
> 3. 私有变量 => 1.函数内部申明的变量 2.形参
> 4. return => 1. 函数运行后返回一个值  2. 终断函数

### 逻辑或(||)  逻辑与(&&)
`在判断语句中`
> 逻辑或的两边，有一边为true，则整个为true
> 逻辑与的两边都为true整个语句才为true，一边为false则为false
```javascript
Boolean(0 || NaN); // false 两边都为false结果为false
Boolean(0 || 1); // true 有一边为true结果为true
Boolean(true && 1); // true 两边都为true结果才为true
Boolean(true && 0); // false 有一边为false结果就是false
```
`在赋值语句`
> 逻辑或赋值, 如果左边为真就赋值左边的值，否则赋值右边的值
```javascript
a = '' || 'hello'; // a = 'hello'
a = 1 || 2; // a = 1;
```
> 逻辑与赋值，左边为真赋值右边的值，否则赋值左边的值
```javascript
a = 1 && 3; // 3
a = 1 && 'hello'; // 'hello
a = 0 && 'hello'; // 0
```

### 获取DOM的方式
```JavaScript
document.getElementById();
[context].getElementsByClassName();
document.getElementsByName(); // 通过name属性获取
[context].getElementsByTagName();
[context].querySelector(); // 通过CSS选择器获取 第一个符合条件的标签
[context].querySelectorAll(); // 通过CSS选择器获取 所有符合条件的标签
document.head(); // 获取head标签
document.body(); // 获取body标签
document.documentElement(); // 获取 HTML 标签
```
> 获取多个元素的结果 都是类数组