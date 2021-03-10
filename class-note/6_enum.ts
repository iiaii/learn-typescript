enum Shoes1 {
    Nike,
    Adidas
}

const myShoes = Shoes1.Nike;

console.log(myShoes);   // 0


enum Shoes2 { 
    Nike = '나이키',
    Adidas = '아디다스',
}

console.log(Shoes2.Adidas);


// 예제

enum Answer {
    YES = 'y',
    NO = 'n'
}

function validation(result: Answer) {
    if(result === Answer.YES) {
        console.log("YES")
    } else {
        console.log("NO")
    }
}

validation(Answer.NO);