// Node.js 라이브러리 사용하기

// 1. 라이브러리란?
// -> 프로그램을 개발할 떄 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것
// -> 설치 후 모듈 시스템으로 불러와서 사용

// [실습] 라이브러리 사용하기 (index.js)
// -> npm 사이트에서 randomcolor 검색 -> npm i randomcolor 로 설치
// -> package.json의 dependencies에 설치된 것 확인 (package.json에 표시된 라이브러리의 버전 정보는 대략적인 버전 명시(0 ~ 1 사이 중 최신버전)
// -> node_modules 폴더 생성 (라이브러리가 실제 설치된 곳)
// -> package-lock.json 생성 (패키지가 사용하고 있는 라이브러리들의 버전이나 정보를 package.json보다 더 정확하고 엄밀하게 저장하는 파일, 라이브러리의 정확한 버전 명시)
// -> 라이브러리에서 import해올 때는 폴더 경로는 명시하지 않고 라이브러리명만 표시
// -> node_modules 폴더와 package-lock.json 파일이 삭제되어도 npm i로 다시 설치 가능
