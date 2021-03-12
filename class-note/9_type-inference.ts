function getA(b = 10) {
    const c = 'hi';
    return b + c;
}


// 타입 추론
interface Dropdown<T> {
    value: T;
    title: string;
}

const shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hi'
}

interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

const detailedItem: DetailedDropdown<string> = {
    title:'abc',
    description: 'ab',
    value: 'value',
    tag: 'tag'
}

// Best Common Type

const arr = [1,2, null];