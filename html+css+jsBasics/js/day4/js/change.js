var lis = document.getElementsByClassName('myLi');

for (var i = 0; i < lis.length; i++) {
    if (i % 2 === 0) lis[i].style.background = 'pink';
}