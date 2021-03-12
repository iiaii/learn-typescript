// 인터페이스
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

class Developer2 {
    name: string;
    skill: string;
}

class Person2 {
    name: string;
}

let developer: Developer;
let person: Person;

person = new Developer2();
person = developer;
// developer = person;
// developer = new Person2();

// 함수
let add = function(a: number) {
    // ..,
}

let sum = function(a: number, b:number) {
    // ...
}

sum = add;
// add = sum;


// 제네릭
interface Empty<T> {
    // ...
}

let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;
