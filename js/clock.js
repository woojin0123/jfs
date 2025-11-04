// 디지털 시계 (clock.js)

function digitalClock() {

            // 변수 선언
            // const: 재선언, 재할당 불가/ 선언하면서 할당도 같이 해야함
            // let: 재선언 불가, 재할당 가능
            // new Date(): 날짜와 시간 객체(인스턴스)
const date = new Date();
console.log(new Date()); // tue nov 04 2025 14:00:00 GMT+0900 *한국표준시
            // document: 문서 객체
            // getElementById(): 메서드(매개변수, ...)
const clockbox = document.getElementById('clock');
let day; // 요일을 담을 변수
let clock; // 출력 변수
// 날짜
let yyyy = date.getFullYear(); // 년
let mm = date.getMonth() + 1; // 월
let dd = date.getDate(); // 일
// 시간
let hour = date.getHours(); // 시
let minute = date.getMinutes(); // 분
let second = date.getSeconds(); // 초
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
// 요일: 숫자에서 문자열로 변경
switch (date.getDay()) {
    case 0: day = '일'; break; 
    case 1: day = '월'; break; 
    case 2: day = '화'; break; 
    case 3: day = '수'; break; 
    case 4: day = '목'; break; 
    case 5: day = '금'; break; 
    default: day = '토'; 
}

// AM/PM: 3항 연산자 사용하기
const ampm = hour >= 12 ? 'PM' : 'AM';
// 12시간제로 바꾸기
hour = hour % 12; // 0-11로 변경
hour = hour ? hour : 12; // 0시>12시로 표시
// 0~11까지는 나머지가 0~11
// 12~23까지는 나머지가 0~11

// if문으로 두자리 맞추기
// 시

/* 
if (hour < 10) {
    hour = '0' + hour;
} else {
    hour = hour;
}
// 분
if (minute < 10) {
    minute = '0' + minute;
} else {minute
    minute = minute;
}
// 초
if (second < 10) {
    second = '0' + second;
} else {
    second = second;
} 
*/

// 함수: 반복 코드를 재사용할 떄
// 선언적 함수 사용
// 함수명: twoDigits
// 매개변수: timepara
hour = twoDigits(hour);
minute = twoDigits(minute);
second = twoDigits(second);

function twoDigits(timepara) {
/*     
if (timepara < 10) {
        timepara = "0" + timepara;
    } else {
        timepara = timepara;
    } 
*/
    timepara = (timepara < 10) ? "0" + timepara : timepara;
    return timepara; // timepara를 호출문에 돌려준다
}
// 삼항연산자: (조건) ? 표현식1 : 표현식2;

// 함수 호출
twoDigits(hour);
twoDigits(minute);
twoDigits(second);

// 출력
// 문자열 연결 연산자 
// '' 사용 시 전체 문자열로 
// 템플릿 리터럴(ver.ES6): 기호는 백틱(backtick, ')
clock = yyyy + "년" + mm + "월" + dd +"일" + "(" + day + ")" + ampm + hour + ":" + minute + ":" + second;
// 문자열과 표현식(변수, 연산, 함수호출) 구별: ${표현식}
// 불필요한 문자열 제거
clock = '${yyyy} ${mm} ${dd}(${day}) ${ampm} ${hour}:${minute}:${second}'; 

clock = 
    yyyy + '년' +
    mm + '월' +
    dd + '일' +
    '(' + day + ')' +
    ampm + hour + ':' +
    minute + ':' +
    second;

clockbox.innerHTML = clock;
}
setInterval(digitalClock, 1000);

