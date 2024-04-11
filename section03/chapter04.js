// Node.js 모듈 시스템 이해하기

// 모듈 시스템(Module System)이란?
// -> 모듈을 다루는 시스템
// -> 모듈이란? 기능별로 나뉘어진 각각의 자바스크립트 파일들(User.js -> user 모듈, Cart.js -> cart 모듈 ...)
// -> 모듈을 생성하고, 불러오, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템

// JavaScript의 모듈 시스템
// -> Common JS(CJS), ES Modules(ESM), AMD, UMD, ...

// [실습 1]
// -> CJS를 이용
// -> math 모듈(math.js)의 함수를 index.js에 불러와서 사용하기
// -> module.exports, requrie() 사용

// [실습 2]
// CJS 보다 최신식으로 동작하는 ES 모듈 시스템 사용
// -> package.json에 "type": "module" 을 작성 -> 현재 패키지에서 ES 모듈 시스템을 사용하겠다고 알려줘야함
// -> CJS와 ESM은 함께 사용할 수 없기 때문에 위 단계 설정 후 CJS를 사용하려 하면 오류가 남
// -> exprot, import 사용
// -> export defalut 로 기본값 내보내기 -> import 할 때 이름 마음대로 지정 가능
