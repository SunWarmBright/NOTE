### 数组常用方法
var arr = [1, 2, 3, 4]
`改变原数组的方法 详细介绍7个`  
> 1. push  arr.push(6, 7, 8) => arr = [1, 2, 3, 4, 6, 7, 8]  
> 再数组的末尾添加任意项  返回的是数组的长度  
> 2. pop arr.pop() => arr = [1,2,3]  
> 删除数组最后一项  返回删除的那一项  
> 3. shift arr.shift() => [2, 3, 4]  
> 删除数组第一项， 返回删除的那一项  
> 4. unshift arr.unshift(6, 7, 8) => arr = [6, 7, 8, 1, 2, 3, 4]  
> 在数组的前面添加任意项， 返回数组的长度  
> 5. sort arr.sort() [3,7,9,2,1].sort() 排序 只在0-9范围之内是准确的  
> [3,7,9,2,1,19, 10].sort(function(a,b) {return a-b})   
> => [1, 2, 3, 7, 9, 10, 19]  
> 如果想排序10以上的数字需要传入一个方法,   
> return a - b 是升序  return b - a 就是降序   
> 6. reverse [1, "hello", "world"].reverse() => ['world', 'hello', 1]  
> 颠倒数组，最后一项变第一项一次类推， 返回颠倒过后的数组  
> 7. splice arr.splice(n, m, a, b, c)  
> arr.splice(n, m, a, b, c) 从索引n开始(包括n)删除m个内容,并且从索引n(包括n)处添加 a b c   
> 只传n,m就是只删除不添加  
> 只传 n 表示从索引n开始(包括n)一直删除到末尾  
> 如果 n 是负数 就是从数组末尾开始数的第n项 (-1就是最后一项，没有-0)  

`不改变原有数组的方法 6`
> 1. slice(n, m) 截取 从索引n(包括)开始截取到索引m(不包括m)   
返回的是一个数组里面是截取的内容  
> 如果没有m 表示截取到最后一项(包括最后一项)  
> n, m 都可以为负数 如果为负数就是从最后一项开始数(最后一项是-1)  
> 2. arr.toString() 转字符串 [1,2].toString() => '1,2'  
> 3. arr.join() 将数组以指定的内容拼接成字符串
> [1,2,3].join() => '1,2,3' // 和arr.toString() 一样  
> [1,2,3].join('') => '123'
> [1,2,3].join('+') => '1+2+3'
> 4. arr.concat([1,2], 3)  将原数组和其他数组或内容合并成一个数组 (合并数组)
> 5. arr.indexOf(val) 返回一个索引值，表示val在数组中第一次出现的位置(从左边开始计算) 如果不存在返回 -1 
> 在项目中用来判断 数组里有没有某个值(arr.indexOf(val) === -1)
> 6. arr.lastIndexOf(val) 和indexOf一样只不过从右边开始数，也就是内容最后一次出现的位置

### 递归
> 函数自己调用自己

`函数的return`
> 碰到return 函数就不再往下执行了，并且返回return后面的值
> 如果没有写return 或者return后面没有值。函数执行的返回值就是undefined

### 字符串常用的方法
> 1. str.charAt(index)  ===  str[index]
> 通过索引(index)查找字符
> 2. str.subStr(index, num)
> 从索引index(包括index)开始截取num个
> 3. str.charCodeAt(index)
> 通过索引(index)查找字符的Unicode码
> 4. str.subString(index1, index2)
> 从索引index1(包括)开始，截取到索引index2(不包括) 索引不能为负数
> 5. str.split 
> str.split() 不传值 就是将整个字符串作为一个数组的第一项，返回这个数组
> str.split('') 传入空字符串 将字符串里面每一个字符作为数组的一项内容，返回这个数组
> str.split(val) 以val作为分割符，将字符串分割成数组，分割的每一项都是数组的内容。分割符不会出现在数组里
> 6. str.slice(n, m) 和数组一样 也和str.subString一样只不过 n m 可以为负数
> 7. str.replace(oldVal, newVal) 
> 将字符串str中 oldVal 替换成 newVal
> 8. str.indexOf(val) 和数组一样 返回val在str中第一次出现的索引(从左开始计算)
> 9. str.lastIndexOf(val) 和数组一样 返回val在str中第一次出现的索引(从右开始计算)
> 如果找不到返回 -1
> 10. str.toUpperCase() 将str所有的字符转成大写
> 11. str.toLowerCase() 将str所有的字符转成小写














