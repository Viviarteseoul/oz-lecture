// 1. 변수 선언 (var, let, const 사용 및 다양한 데이터 타입)
var userStatus = "Active";          // String
let points = 1500;                 // Number
const isDeveloper = true;          // Boolean
let gradDate = null;               // Null (데이터 타입 추가)

// 2. 객체 리터럴 (최소 3개 속성 포함)
const profile = {
    name: "강신우",
    age: 38,
    job: "Full-stack Developer"
};

// 3. 배열 리터럴 (최소 3개 요소 포함)
let hobbies = ["Coding", "Hiking", "Reading"];

// 4. 문자열 처리 (이스케이프 문자 \n, \t 사용)
// 줄바꿈(\n)과 탭(\t)을 활용하여 콘솔 가독성을 높임
console.log("--- Profile Information ---\nName:\t" + profile.name + "\nJob:\t" + profile.job);

// 5. 문자열 연결 연산자(+) 사용
let introSentence = "안녕하세요, 제 이름은 " + profile.name + "이고 직업은 " + profile.job + "입니다.";
console.log(introSentence);

// 6. 배열 요소를 문자열로 결합하여 출력
console.log("My hobbies: " + hobbies.join(", "));

// 7. 객체 속성을 사용하여 프로필 문장 생성
console.log(`나이 정보: ${profile.name}님의 나이는 ${profile.age}세입니다.`);

// 8. typeof를 사용하여 데이터 타입 출력 (최소 2개)
console.log("Type of points:", typeof points);       // number
console.log("Type of hobbies:", typeof hobbies);     // object (배열은 object로 출력됨)
console.log("Type of profile:", typeof profile);     // object
console.log("Type of isDeveloper:", typeof isDeveloper); // boolean

console.log("\n프로필 생성 완료!");