// 첫 React App 생성하기

// React로 만든 웹 서비스들은 보통 React App, React Application 이라고 불리움

// React역시 npm에 등록된 라이브러리다.

// React App 생성법
// 1. Node.js 패키지 생성
// 2. React 라이브러리 설치
// 3. 기타 도구 설치 및 설정 (입문자에게 까다롭고 어려움)
// => Vite 사용하여 기본 설정이 미리 다 완료된 상태의 리액트 앱을 한 방에 생성
//  - Vite? 차세대 프론트엔드 개발 툴, 기본 설정이 적용된 React App 생성 가능, React 공식 문서에서도 권장하고 있음

// Vite로 React app 생성
// 1. 프로젝트 폴더 내에서 npm create vite@latest 실행
//  - Need to install the following packages? y
//  - Projiect name? 자유롭게 설정
//  - Select a framework? React 선택
//  - Select a variant? JavaScript 선택
//  - Done. Now run 메세지 보이면 생성 완료
// 2. 프로젝트 폴더를 루트 경로로 해서 따로 VSCode로 열기
// 3. npm i 로 package.json의 라이브러리 설치하기 -> node_modules 폴더 생성
// 4. 각 파일 살펴보기
//  - public 폴더 : 이미지, 폰트, 동영상 같은 코드가 아닌 정적인 파일들을 보관하는 저장소
//  - src 폴더 : 우리가 작성하는 리액트나 자바스크립트 코드들을 보관하는 폴더
//  - eslintrc 파일 : 개발자들 사이에 코드 스타일을 통일하는 데 도움을 주는 도구
//  - gitignore : github에 업로드하면 안되는 파일들 명시하는 곳
//  - index.html : 리액트는 JavaScript 함수로 되어 있는 컴포넌트를 DOM을 수정해서 추가하는 방식으로 동작하는데 이 때 가장 기본적인 틀이 되는 파일
//  - vite.config.js : vite 도구의 옵션을 설정하는 파일
// 5. React앱 실행 : npm run dev 로 실행
//  - h + enter로 프로젝트 실행 시 도움이 되는 명령어들을 볼 수 있다.
