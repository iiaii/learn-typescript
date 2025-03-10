function logText<T>(text: T): T {
    console.log(text);
    return text;
}

logText(10);
logText('하이');
logText(true);

const hi = logText('하이');

hi.split('')


// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj: Dropdown<number> = { value: 123, selected: false };

// 제네릭의 타입 제한 (배열로 추론)
function logTextLength<T>(text: T[]): T[] {
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}

logTextLength<string>(['hi']);


// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

logTextLength2('a');
// logTextLength2(10);

// 제네릭 타입 제한 3 - key of
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");

// ShoppingItem 의 값만 가능