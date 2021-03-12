let a;

a = 20;
a = 'a'

const b = a as string;  // 타입 단언

// DOM API 조작
// <div id="app"></div>

const div = document.querySelector('div');
const div2 = document.querySelector('div') as HTMLDivElement;

if (div) {  // null 이 아님을 확인
    div.innerText
}


