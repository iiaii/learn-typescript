// class Person과 완전 동일함
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 위 Person 함수와 완전 동일함
class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log("생성 되었습니다");
        this.name = name;
        this.age = age;
    }
}

const seho = new Person('seho', 30);

console.log(seho);
console.log(seho.age);


console.log('-------------');


function user() {}
user.prototype = { name: 'captin', age: 100 };

const admin = new user();

console.log(admin.name);

