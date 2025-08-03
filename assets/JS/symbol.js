

let id = Symbol('kye');
const myPhone = {
    brand: 'nokia',
    model: 1100,
    color: 'blue',
    prise: 100,
    [id]: "наш id",
}

console.log(myPhone[id]);
console.log('My phone:', myPhone);

//цикл не бачить символи при переборі властивостей обєкту
for (const key in myPhone) {
    console.log(key);
}

// symbol.iteratot
//spread operator
//для псевдомасивів
function sum() {
    const arrFromArguments = [... arguments];
    return arrFromArguments.reduce((accum, item) => accum + item);
}
 console.log(sum(1, 2, 3));
// коли передажться масив
const arr2 = [1, 2, 3, 4, 5];
console.log (sum(... arr2));

//злиття обєктів
const user1 = {
    firstName: 'Vika',
    secondName: 'Lyn',
};

const user2 = {
    age: 21,
    tel: '+380507765094',
};

let user3 = {...user1, ...user2};
console.log('User3:', user3);

//копіювання + заміна
const newName = 'Maks';
user3 = {...user3, firstName: newName};
console.log('User3Maks:', user3);

const users = [
    {id: 1, name: 'Vika', age: 21, tel: +380507765094,},
    {id: 2, name: 'Maks', age: 19, tel: +380938865094,},
];

//1 спосіб, повна зміна даних
let user = {id: 2, name: 'Maks', age: 19, tel: +380978822094,};

const foundIndex = users.findIndex(u => u.id === user.id);
console.log('foundIndex: ', foundIndex);
users[foundIndex] = user;
console.log('Змінений масив Users:', users);

//2 спосіб, часткова зміна зміна
let user5 = {id: 1, tel: +380667765094};

const foundIndex2 = users.findIndex(u => u.id === user5.id);
console.log('foundIndex2: ', foundIndex2);
users[foundIndex2] = {...users[foundIndex2], ...user5};
console.log('Часткова зміна масива Users:', users);



