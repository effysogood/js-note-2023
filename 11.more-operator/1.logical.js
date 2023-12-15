// 논리 연산자 Logical Operator
// && AND
// || OR
// 단축 평가 : short-circuit evaluation

const obj1 = { name: '🐶' };
const obj2 = { name: '🐱', owner: 'effy' };

// 조건문 내부 평가 (boolean)
if (obj1 || obj2) {
    console.log('Both are true!');
}

// 조건문 밖, 단축 평가
let result = obj1 && obj2; // 마지막 조건(true)이 할당
console.log(result);

result = obj1 || obj2;
console.log(result); // 처음 조건(true)이 먼저 할당

// 활용 예제
// 조건이 truthy 일때 && 무언가를 해야 할 경우
// 조건이 falshy 일때 || 무언가를 해야할 경우
function changeOwner(animal) {
    if (!animal.owner) {
        throw new Error('주인이 없습니다');
    }
    animal.owner = '바뀐 주인!';
}
function makeNewOwner(animal) {
    if (animal.owner) {
        throw new Error('주인이 이미 있습니다');
    }
    animal.owner = '새로운 주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할 때
let item; // = { price: 1 };
const price = item && item.price;
console.log(price);

// 기본 값을 설정
// default parameter는 값을 전달하지 않거나, undefined 설정
// || 값이 falshy한 경우 모두 설정 (할당) : 0, -0, null, undefined, ''
function print(message) {
    const text = message || 'Hello';
    console.log(text);
}
print();
print(undefined);
print(null);
print(0);
