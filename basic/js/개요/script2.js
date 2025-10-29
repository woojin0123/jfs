
    // 이벤트 객체.이벤트 함수("이벤트 종류", 함수);
window.addEventListener("DOMContentLoaded", function(){
    // 1. 버튼 찾기
    var btn4 = document.getElementById("btn4");

    // 2. 이벤트 작성
    // 이벤트 객체.on이벤트종류 = 함수;
    btn4.onclick = function(){
        alert('Welcome to JS World');
    };
});