// 산술 연산자 (Arithmetic operators)
// + 더하기
// - 빼기
// * 곱하기
// / 나누기
// % 나머지값
// ** 지수(거듭제곲수) <= ES7

console.log(5 * 2);
console.log(5 % 2);
console.log(5 ** 2);
console.log(Math.pow(5, 2)); // 이전 버전

// '+' 연산자 주의점!
let text = '두개의' + '문자';
console.log(text); // 두개의 문자
text = '1' + 1; // 숫자와 문자열을 더하면 문자열로 변환됨
console.log(text); // 11 (string)
text = '1' + '1';
console.log(text); // 11 (string)

text = '1' - '1';
console.log(text); // 0
text = '1' * 11;
console.log(text); // 11
