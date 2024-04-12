# Section 11. Context

## chapter 01. Context 란?

- 컴포넌트간의 데이터를 전달하는 또 다른 방법
- 기존의 Props가 가지고 있던 단점을 해결할 수 있음

### 1. Props의 단점: Props Drilling

- Props는 부모 -> 자식으로만 데이터를 전달할 수 있었다.
- 부모와 Props를 받는 자식 사이의 계층이 많아진다면(부모 -> 자식 1 -> 자식 2 ... -> 최종 자식) 모든 자식을 거쳐서 Props를 내려줘야 한다. 만약 중간에 Props의 이름이 바뀌기라도 하면 모든 자식 컴포넌트에서 바꿔줘야한다.
- 이러한 모습이 마치 Props가 땅을 파고 내려가는 것 같다고 해서 프롭스 드릴링(Props Drilling)이라고 한다.
- Context는 Props Drilling을 해결해주는 기능이다.

### 2. Context 란?

- Context는 데이터들을 보관하는 일종의 데이터 보관소 역할을 하는 객체이다.
- 컨텍스트를 새롭게 생성한 후에 전달하고자 하는 Props를 생성한 Context에 보관해 놓으면, 이제는 Props를 이용하지 않고 다이렉트로 필요한 자식 컴포넌트에 Props를 전달해 줄 수 있다.
  <img src="./public/Context_00.jpeg" />
- 컨텍스트는 여러개 만들 수 있어서 자식에 따라 다르게 공급할수도 있다.
  <img src="./public/Context_01.jpeg" />

<br>

## chpter 02. Context 사용하기

<br>

## chapter 03. Context 분리하기
