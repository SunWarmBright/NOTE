### 函数
function 函数名(形参) {} // 申明一个函数
函数名(实参)  // 函数执行
> 1. 参数
> 形参 函数定义时候的参数，本质是个变量
> 实参 函数执行时传入的值，本质是个值
> 2. return 
> 返回一个值，就是函数执行时的返回值，如果没有return函数执行返回undefined
> 终断这个函数，return后面的代码都不再执行
> 3. 函数运行机制
> 函数是一个引用数据类型，函数是以字符串形式存储在内存中的
> 函数执行的时候
> > 形成一个私有作用域，将存储的字符串转化成可执行的代码，代码自上而下执行

> 1. arguments => 实参集合，是函数自带的
> 是一个类数组 看起来像数组其实是一个普通对象
> 形参跟随 在没有剩余参数，解构赋值等情况下 形参和arguments是紧密联系在一起的，一个改动另个就会跟随改动

> 2. 私有变量
> 全局变量 => 在全局作用下申明的变量
> 私有变量 => 在私有作用域(函数执行的时候可以形成私有作用域...)下申明的变量 => 函数内部定义的变量，形参

> 3. 匿名函数 和 实名函数
> 匿名函数的name属性为空字符串，实名函数的name属性为函数名

> 4. 自执行函数
[语法] ~(匿名函数)(); !(匿名函数)();
> 后面一个小括号表示函数执行的意思，和 fn() 中的小括号一个意思，
同样也可以传参

### 获取DOM
> 1. document.getElementById('');  // 通过ID获取DOM
> 2. [context].getElementsByTagName(''); // 在指定上下文中通过标签名获取DOM，返回的是一个DOM集合(HTMLCollection)是一个类数组
> 3. [context].getElementsByClassName(''); // 在指定上下文中通过classname获取DOM，返回的是一个DOM集合(HTMLCollection)是一个类数组
> 4. document.getElementsByName(''); // 通过name属性获取DOM
返回的是一个NodeList,一个类数组
> 5. [context].querySelector(); // 通过CSS选择器 获取`一个`DOM对象
> 6. [context].querySelectorAll(); // 通过CSS选择器 获取DOM 返回的是一个NodeList,一个类数组
> 7. document.body 获取body标签
> 8. document.head 获取head标签
> 9. document.documentElement 获取html标签