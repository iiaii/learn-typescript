interface User {
    name: string;
    age: number;
}

// 변수에 활용한 인터페이스
const seho: User = {
    name: '세호',
    age: 33
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

getUser(seho);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

const sum: SumFunction = function(a: number, b: number) {
    return a + b;
}

console.log(sum(1, 2));