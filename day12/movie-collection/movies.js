// 1. 변수 선언 (const, let, var 각각 활용)
const DEFAULT_STRING = "Unknown"; // 변경되지 않는 기본값 상수로 선언
let movies = [];                 // 영화 객체를 저장할 배열
var totalMoviesCount = 0;        // 전역적 성격의 카운트 변수 (var 사용)

// 2. 하드코딩된 영화 정보 추가
movies.push({ title: "The Matrix", director: "Wachowskis", year: 1999, genre: "Sci-Fi" });
movies.push({ title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" });
movies.push({ title: "Parasite", director: "Bong", year: 2019, genre: "Drama" });
// 빈 속성 확인을 위한 테스트 데이터
movies.push({ title: "Interstellar", director: "", year: 2014, genre: "" });

/**
 * 3. 함수 선언문: 영화 목록 출력 함수
 * @param {Array} movieArray - 영화 객체 배열 (기본값 설정)
 */
function printMovies(movieArray = []) {
    console.log("Movie Collection:");

    // 4. 반복문 (for 루프 활용)
    for (let i = 0; i < movieArray.length; i++) {
        let movie = movieArray[i];

        // 5. 조건문과 연산자: 빈 속성 확인 및 기본값 설정
        // 논리 연산자(!)를 사용하여 데이터 존재 여부 확인
        if (!movie.title) movie.title = DEFAULT_STRING;
        if (!movie.director) movie.director = DEFAULT_STRING;
        if (!movie.genre) movie.genre = DEFAULT_STRING;
        
        // 산술 연산 및 문자열 결합을 통한 출력
        console.log(
            (i + 1) + ". Title: " + movie.title + 
            ", Director: " + movie.director + 
            ", Year: " + movie.year + 
            ", Genre: " + movie.genre
        );
    }

    // 전역 변수 업데이트
    totalMoviesCount = movieArray.length;
    console.log("Total Movies: " + totalMoviesCount);
}

/**
 * 6. 추가 문법 활용 (표현식, 화살표 함수, Rest 파라미터 등)
 * 요구사항에 명시된 문법들을 실제 로직에 녹여냄
 */
const addMoreMovies = (...newMovies) => {
    for (const item of newMovies) {
        movies.push(item);
    }
};

// 함수 실행
printMovies(movies);