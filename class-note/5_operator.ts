function logMsg(msg: string | number) {
    if(typeof msg === 'number') {
        msg.toLocaleString();
    }
    if(typeof msg === 'string') {
        msg.toString();
    }

    throw new TypeError('msg must be string | number');
}

logMsg('hello');
logMsg(123);


interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone1(someone: Developer | Person) {
    someone.name
    // someone.skill
    // someone.age
}

askSomeone1({ name: 'hoho', skill: 'web' })
askSomeone1({ name: 'hihi', age: 123 })

function askSomeone2(someone: Developer & Person) {
    someone.name
    someone.skill
    someone.age
}

askSomeone2({ name: 'kiki', age: 12, skill: 'front'})
