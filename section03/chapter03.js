// 패키지
// -> Node.js에서 사용하는 프로그램의 단위
// -> 하나의 프로젝트 = 하나의 패키지

// 프로젝트 생성
// -> 프로젝트 폴더를 루트 폴더로 하여 VSCode 열기
// -> npm init 으로 Node.js 패키지 생성
// -> package name : (소괄호 내용은 디폴트 값) -> 변경내용 없으면 그냥 엔터
// -> version -> 배포할 때 의미 있으므로 생성 시에는 그냥 패스
// -> description -> 패키지에 대한 간단한 설명. 굳이 적을 필요 없음
// -> entry point -> 메인으로 실행될 파일이 뭐냐 -> 그냥 넘어가도 무방
// -> test command -> 테스트 명령어 -> 그냥 넘어가도 무방
// -> git repository -> 그냥 넘어감
// -> keywords -> 그냥 넘어감
// -> author -> 그냥 넘어감
// -> license -> 그냥 넘어감
// -> package.json 파일 생성

// Node.js로 파일 실행하기
// node 파일명 -> node index.js
// node 경로명 -> node src/index.js
// -> script를 활용하면 편리함 -> package.json의 script에 작성 후 npm run "명령어"로 실행 ex) npm run start
