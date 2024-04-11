## chapter 01. 최적화란?

- 최적화(Optimization)

  - 웹 서비스의 성능을 개선하는 모든 행위를 일컫음
  - 아주 단순한 것부터 아주 어려운 방법까지 매우 다양함

- 일반적인 웹 서비스 최적화 방법

  - 서버의 응답속도 개선
  - 이미지, 폰트, 코드 파일 등의 정적 파일 로딩 개선
  - 불필요한 네트원크 요청 줄임 ..

- React App 내부의 최적화 방법
  - 컴포넌트 내부의 불필요한 연산 방지
  - 컴포넌트 내부의 불필요한 함수 재생성 방지
  - 컴포넌트의 불필요한 리렌더링 방지

## chpter 02. useMemo와 연산 최적화

- useMemo 란?
  - **메모이제이션** 기법을 기반으로 불필요한 연산을 최적화 하는 리액트 훅
    - 메모이제이션(Memoization) 이란? 기억해두기, 메모해두기 라는 뜻, 반복적으로 수행되는 동일한 연산을 최초로 실행했을 때 메모리에 결과값을 저장해두고 이 연산이 다시 필요해지면 다시 연산을 하지 않고 저장해둔 값으로 돌려주는 기법
  - useMemo 훅을 이용하면 메모이제이션 기법으로 특정 연산 값을 기억해 둘 수 있기 때문에 불필요한 연산을 방지하여 최적화 할 수 있다.
  - 자매품 : useCallback

```jsx
useMemo(() => {}, []);
```

- 인수 1. 콜백함수
  - 콜백함수가 반환하는 값을 useMemo가 그대로 다시 반환해준다.
- 인수 2. 의존성 배열 : deps
  - useEffect 처럼 deps에 포함된 값이 변경되었을 때에만 첫 번째 인수로 전달한 콜백함수를 다시 실행한다.

## chapter 03. React.memo와 컴포넌트 렌더링 최적화

React.memo로 불필요한 리렌더링 방지하기

### React.memo 란?

- 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환
  ```jsx
  const MemoizedComponent = memo(Component);
  ```
- 최적화 된 컴포넌트는 Props를 기준으로 메모이제이션 됨
- 따라서 MemoizedComponent 는 부모 컴포넌트가 리렌더링 되더라도 자신이 받는 Props가 바뀌지 않으면 리렌더링 되지 않는다.

=> 메모이즈드 된 컴포넌트는 부모 컴포넌트가 리렌더링 되더라도 자신이 받는 props가 바뀌지 않으면 다시는 리렌더링 되지 않도록 메모이제이션 되기 때문에 불필요한 리렌더링이 방지되어서 자동으로 최적화가 이루어진다.

- 설정 시 경고가 뜨는 eslint의 "react-refresh/only-export-components" 규칙은 꺼버려도 무방

### 객체 타입 Props를 받는 경우 React.memo 최적화 방법

- 객체 타입(함수, 객체, 배열..)을 props로 받는 경우 React.memo 메서드를 적용하기만 한다고 해서 최적화가 제대로 이루어지지 않는다. (예시 : TodoItem vs Header) 객체 타입이 선언된 부모 컴포넌트가 리렌더링이 되면 객체 타입은 다시 생성되기 때문에 주소값이 달라지게 되므로 props를 얕은 비교로 판단하는 React.memo는 다른 값으로 인식하기 때문이다.
- 해결 방법 1. Props로 받는 객체 타입들(함수, 배열, 객체..)을 useCallback 을 이용하여 메모이제이션 하기. -> chapter 03에서...
- 해결 방법 2. React.memo 의 두번째 인수에 콜백 함수를 전달하여 최적화 커스텀 하기✅

### 콜백 함수로 React.memo 최적화 커스텀 하기

- (보통 콜백 함수를 생략하지만) 콜백 함수를 전달하면 이제 memo 메서드는 부모 컴퍼넌트가 리렌더링 될 때마다 컴포넌트의 props가 바뀌었는지를 스스로 판단하지 않고 콜백함수의 반환값에 따라서 판단한다.
- true를 반환하면 props가 바뀌었다고 판단하여 리렌더링을 하지 않고, false를 반환하면 props가 바뀌었다고 판단하여 리렌더링 한다.

```jsx
memo(컴포넌트, (prevProps, nextProps) => {
  // 매개변수로 이전의 props와 새로운 props를 받는다. -> 이 둘을 이용한 조건식으로 렌더링 여부 커스텀이 가능하다.
  // 반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
  // True 반환 -> Props 바뀌지 않음 -> 리렌더링 X
  // False 반환 -> Props 바뀜 -> 리렌더링 O
});
```

### 고차 컴포넌트 (HOC; Higher Order Component)

- 컴포넌트를 인수로 받아서 해당 컴포넌트에 최적화나 메모이제이션 같은 추가적인 기능을 덧붙여서 기능이 추가된 새로운 컴포넌트를 반환해주는 React.memo 같은 메서드들을 리액트에서는 고차 컴포넌트라고 부른다.
- 고차 컴포넌트를 이용하면 컴포넌트에 새로운 기능을 부여할 수 있기 때문에 복잡한 리액트 앱을 구축할 때 자주 쓰이는 방식이다.
- 고차 컴포넌트는 우리가 직접 만들수도 있다. 🔗 [참고자료 링크](https://patterns-dev-kr.github.io/design-patterns/hoc-pattern/)