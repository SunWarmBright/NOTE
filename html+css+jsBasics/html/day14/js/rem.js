var winW = document.documentElement.clientWidth;/* 获取屏幕的宽度*/
/*将屏幕宽度平均分成十五份 并将html字体的大小设置成 winW / 15 + 'px'*/
document.documentElement.style.fontSize = winW / 15 + 'px';