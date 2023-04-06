window.onload = function(){

//입력값 검증(유효성 체크)
var id = document.getElementById("user-id");
var pw1 = document.getElementById("user-pw1");
var pw2 = document.getElementById("user-pw2");

//onchange 속성 - 포커스가 입력상자를 벗어났을때 작동
id.onchange = checkId; //checkId 함수 호출

//이벤트 처리기 함수를 사용했을 경우
//id.addEventListener("change", checkId);

pw1.onchange = checkPw;
pw2.onchange = comparePw;

function checkId(){
    if(id.value.length < 4 || id.ariaValueMax.length > 15){
        alert("4~15자리의 영문과 숫자로 입력해 주세요");
        id.select(); // 현재 텍스트 범위 선택(지정)
    }
}

function checkPw(){
    if(pw1.value.length < 8){
        alert("비밀번호는 8자리 이상이어야 합니다.");
        pw1.value = ""; // 기존 문자 지우기
        pw1.focus(); // 커서가 위치함
    }
}

function comparePw(){
    if(pw1.value != pw2.value){
        alert("비밀번호가 일치하지 않습니다.");
        pw2.value = ""; // 기존 문자 지우기
        pw2.focus(); // 커서가 위치함
    }
}
}