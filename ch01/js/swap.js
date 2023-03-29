//변수의 값을 교환하기
let x = 0, y = 1;
let temp;

document.write("--- 교환 전 ---<br>");
document.write("x=" + x + ", y=" + y);

//교환 처리 오른쪽이 먼저 
temp = x; //temp = 0
x = y; // x = 1
y = temp; // y = 0



document.write("<br>--- 교환 후 ---<br>");
document.write("x=" + x + ", y=" + y);