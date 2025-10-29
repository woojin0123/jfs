// 함수 작성
function fn2() {
    // JS 실행 문장;
    alert('Javascript');
}

// 버튼 선택
// 자바스크립트는 명령어 대소문자 구분함 (카멜표기법)
var btn2 = document.getElementById("btn2");

// 클릭 이벤트 작성
btn2.onclick = function(){
// 함수 호출
    fn2();
}