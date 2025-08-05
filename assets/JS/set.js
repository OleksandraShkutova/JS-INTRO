
const set1 = new Set([1, 2, 5, 8, 1, 1, 3, 8, 5, 6, 6]);
console.log('set: ', set1);

//довжина set
console.log('size:', set1.size);

//додавання елементів
set1.add(1).add(11).add(13);
console.log('sedAdd:', set1);

//чи є певний елемент в set
console.log(set1.has(11));

//видалення елемента
set1.delete(11);
console.log('setDelete11', set1);

//очищення множини
//set1.clear();
//console.log('setClear', set1);

//forEach
set1.forEach((n) => console.log('n: ', n));

//for ... of
for (const item of set1) {
    console.log('item: ', item);

};

// array в Set, Set в aaray
const arr = [1, 2, 5, 5, 11, 22, 2, 3];
//const set2 = new Set(arr);
//const arr2 = [... set2];

//Або
const arr3 = [... new Set(arr)];
console.log(arr3);

//злиття і перетворення в масив
const user1 = [
    'Vika',
    'Mark',
    'Mark',
    'Maks',
    'Sasha',
];

const user2 = [
    'Vika',
    'Eddi',
    'Mark',
    'Maks',
    'Vika',
];

 const set5 = [...new Set([...user1, ...user2])];
 console.log('Set5:', set5);

//
const users = [
    {name: 'Vika', phone: 'iPhone'},
    {name: 'Maks', phone: 'Samsung'},
    {name: 'Eddi', phone: 'iPhone'},
    {name: 'Sasha', phone: 'Samsung'},
];

//колекція брендів
const brands = [... new Set(users.map(users => users.phone))];
console.log('brands:', brands);
//створюємо масив, що потрібний
const bPhoneWithUsers = {};
//перебираємо бренди телефонів і  за допомогою фільтра і мапа створюємо масив кооистувачів, які користуються певним брендом
brands.forEach(
    b => bPhoneWithUsers[b] = users.filter(u => u.phone === b).map(u => u.name)
);
console.log('Phones brand with users:', bPhoneWithUsers);
