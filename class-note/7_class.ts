class Person {

    private name: string;
    public age: number;
    protected height: number;
    readonly log: string;


    constructor(name: string, age: number, height: number) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends ReadableStreamDefaultController.Component {

}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
function App() {
    return <div>Hello World</div>
}

new Vue({
    el: '',
    setup() {
        
    }
})