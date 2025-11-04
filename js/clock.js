// 디지털 시계 (colck.js)

function digitalClock() {

            // 변수 선언
            // const: 재선언, 재할당 불가/ 선언하면서 할당도 같이 해야함
            // let: 재선언 불가, 재할당 가능
            // new Date(): 날짜와 시간 객체(인스턴스)
            const date = new Date();
            console.log(new Date()); // tue nov 04 2025 14:00:00 GMT+0900 *한국표준시
            // document: 문서 객체
            // getElementById(): 메서드(매개변수, ...)
            const  clockbox = document.getElementById('clock');
            let day; // 요일을 담을 변수
            let clock; // 출력 변수

            // 처리
/*             if (date.getDay() === 0) {
                day = '일';
            } else if (date.getDay() === 1) {
                day = '월';
            } else if (date.getDay() === 2) {
                day = '화';
            } else if (date.getDay() === 3) {
                day = '수';
            } else if (date.getDay() === 4) {
                day = '목';
            } else if (date.getDay() === 5) {
                day = '금';
            } else if (date.getDay() === 6) {
                day = '토';
            } */
// switch~case문으로 변형
switch (getDay()) {
    case 0: day = '일'; break; 
    case 1: day = '월'; break; 
    case 2: day = '화'; break; 
    case 3: day = '수'; break; 
    case 4: day = '목'; break; 
    case 5: day = '금'; break; 
    default: day = '토'; 
}

// 시간
let hour = date.getHours;
// AM/PM: 3항 연산자 사용하기
const ampm = hour >= 12 ? 'PM' : 'AM';
// 12시간제로 바꾸기
hour = hour % 12;

hour = hour ? hour : 12;




            // 출력
        clock = 
            date.getFullYear() + '년' +
            (date.getMonth() + 1) + '월' +
            date.getDate() + '일' +
            '(' + day + ')' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();

        clockbox.innerHTML = clock;
        }
        // setInterval(digitalClock, 1000);

