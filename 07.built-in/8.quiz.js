// QUIZ

// 1. 문자열의 모든 캐릭터를 하나씩 출력하라!
const text = 'Hello World!';

// Answer
const printByLetter = (string) => {
    let array = string.split();
    for (let i; i <= string.length; i++) {
        console.log(array[i]);
    }
};
printByLetter(text);

// 2. 사용자들의 id를 잘라내어 각각의 id를 배열로 보관
const ids = `user1, user2, user3, user4`;

// 3. 1초에 한번씩 시계를 (날짜 포함) 출력해보자
