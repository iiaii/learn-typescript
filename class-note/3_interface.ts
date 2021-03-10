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


// 인덱싱
interface StringArray {
    [index: number]: string;
}

const arr: StringArray = ['a', 'b', 'c'];

console.log(arr[0])
// 에러
// arr[0] = 123;


// Dictionary 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

// 에러
// obj['cssFile'] = 'a';
obj['cssFile'] = /\.txt$/;

Object.keys(obj).forEach(function(value) {

});


// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

const josh: Developer = {
    name: 'josh',
    age: 23,
    language: 'ts',
}

