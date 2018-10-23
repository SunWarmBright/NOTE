var num = 1;

// num += 10;
// num /= 2;

// num += 10;
// num /= 2;

// num += 10;
// num /= 2;

// function 函数名(参数) {}
num = 1;
function fn() {
    num += 10; // 11 15.5 17.75
    num /= 2; // 5.5 7.75 8.875
}
fn(); // num = 5.5
fn(); // num = 7.75
fn(); // num = 8.875
// console.log(num)
// console.log(fn) // 

var total = null;
function add(n, m, q) {
    console.log(q);
    total = n + m;
}
add(7, 3, 5, 7);
console.log(total);