// 래퍼 객체 (Wrapper Object)
// '원시값'을 필요에 따라서 관련된 빌트인 객체로 변환한다.
// Primitive Type <-> Object

const number = 123;
console.log(number.toString());
// // --> number 원시타입을 감싸고 있는 'Number 객체'로 감싸짐
console.log(number); // -> number : 원시 타입

const text = 'text'; // string 문자열 : 원시타입
console.log(text);
text.length; // 'String 객체'
text.trim();

// static은 'class 이름'만을 통해서 만들 수 있는것, instance methods는 객체를 생성해 접근 가능
