let score = 99;
score = parseInt(score);
let grade;

if(score >= 90 && score <100){
    grade = "A";
}
else if(score >= 80 && score <90){
    grade = "B";
}
else if(score >= 70 && score <80){
    grade = "C";
}
else if(score >= 60 && score <70){
    grade = "D";
}
else if(score < 60){
    grade = "F";
}
document.write("학점은 <span class = access>" + grade + "</span>입니다.");