### 删除数组最后一项
> 1. arr.splice(arr.length - 1, 1);
> 2. arr.pop()
> 3. arr.length-- / arr.length = arr.length - 1
### 在数组末尾添加一项
> 1. arr.push();
> 2. arr.splice(arr.length, 0, 9);
> 3. arr[arr.length] = '';
> 4. arr = arr.concat('hello');

### Math 常用方法
> 1. Math.abs(-10) => 10 // 取绝对值
> 2. Math.max(9, 8, 7, 6) => 9 // 取最大值
> 3. Math.min(9, 8, 7, 6) => 6 // 取最小值
> 4. Math.floor(1.3) => 1 // 向下取整(数) 
> 5. Math.ceil(0.1) => 1 // 向上取整
> 6. Math.round(0.6) = > 1 // 四舍五入
> 7. Math.random() => 0.6021696907829615 // [0, 1) 取0(包括)到1(不包括)之间的随机数
> 8. Math.sqrt(64) => 8 // 开平方
> 9. Math.pow(2, 3) => 8 // 求2的3次幂