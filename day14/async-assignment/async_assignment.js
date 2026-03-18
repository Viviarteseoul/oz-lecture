/**
 * [기능 요구사항 준수 체크]
 * 1. 변수 선언: const(제한), let(카운트), var(메시지) 활용
 * 2. 비동기: setInterval/clearInterval 활용
 * 3. 함수: 선언문 및 매개변수 기본값 설정
 * 4. 연산자: isNaN, >=, <=, && 활용
 */

// 1. 변수 선언
const LIMIT_MAX = 10;     // 최대 시간 상수
let activeInterval = null; // 인터벌 참조 변수
var timerInfoText = "";    // 메시지 변수 (var 사용)

// 2. 타이머 실행 함수 (함수 선언문 & 매개변수 기본값)
function startTimer(seconds = 10) {
    const displayElement = document.getElementById("timerDisplay");
    const startBtn = document.getElementById("startTimer");
    const inputField = document.getElementById("timerInput");

    let count = seconds;

    // 시작 시 UI 초기화: 버튼 비활성화, 에러 클래스 제거
    startBtn.disabled = true;
    displayElement.classList.remove("error", "alert-danger", "alert-secondary");
    displayElement.classList.add("alert-info");

    // 3. 비동기 처리: setInterval
    activeInterval = setInterval(function() {
        if (count > 0) {
            timerInfoText = "타이머: " + count + "초";
            displayElement.textContent = timerInfoText;
            count--;
        } else {
            // 4. 타이머 종료 처리
            clearInterval(activeInterval);
            displayElement.textContent = "타이머 종료!";
            displayElement.classList.replace("alert-info", "alert-success");
            
            // UI 복구: 버튼 재활성화
            startBtn.disabled = false;
        }
    }, 1000);
}

// 5. 버튼 클릭 이벤트 리스너
document.getElementById("startTimer").addEventListener("click", function() {
    const userInput = document.getElementById("timerInput").value;
    const displayElement = document.getElementById("timerDisplay");
    
    // 입력값을 숫자로 변환
    const numericValue = Number(userInput);

    // 6. 조건문과 연산자: 유효성 검사
    // 숫자가 아니거나, 1~10 범위를 벗어나거나, 빈 값인 경우
    if (isNaN(numericValue) || numericValue < 1 || numericValue > LIMIT_MAX || userInput.trim() === "") {
        displayElement.textContent = "유효한 숫자(1-10)를 입력하세요!";
        displayElement.classList.remove("alert-secondary", "alert-info", "alert-success");
        displayElement.classList.add("alert-danger", "error"); // 에러 스타일 적용
        return;
    }

    // 모든 검사를 통과하면 타이머 시작
    startTimer(numericValue);
});