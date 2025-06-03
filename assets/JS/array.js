/*
let months = ['jenuary', 'february', 'march'];
console.log('Array:', months);

for( let i = 0; i < months.length; i++){
    console.log(months[i]);
}

document.writeln('<h1>month list</h1>');
document.writeln('<ul>');
    for( let i = 0; i < months.length; i++){
    document.writeln(`<li>${months[i]}</li>`)
}
document.writeln('</ul>');


document.writeln('<h1>user list</h1>');
let user = [
    {id: 1, name: 'Murka'},
    {id: 2, name: 'Black'},
]
console.log('Array2:', user);
document.writeln('<ul>');
    for( let i = 0; i < user.length; i++){
    document.writeln(`<li> ${user[i].name} </li>`)
}
document.writeln('</ul>');


let anyNumbers = [1, -2, 3, -4, 0];
console.log('Array anyNumb:', anyNumbers);

for ( let i = 0; i < anyNumbers.length; i++) {
    if (anyNumbers[i] > 0){
        console.log(anyNumbers[i]);
    };
}

// метод for ... of для масиву. Перебираємо елементи і виводимо їх
let users = ['Masha', 'Dasha', 'Natasha'];
for (item of users) {
    console.log(item);

}
//додавання елементів в кінець списку
users.push('Ira');
console.log('array users ++end:', users);

//віднімання елемента з кінця
users.pop();
console.log('array users --end:', users);

//додавання на початок
users.unshift('Sasha');
console.log('array users ++start:', users);

//віднімання з початку
users.shift();
console.log('array users --start:', users);

let numbers1 = [100, 200, 300, 400];
//копіювання
numbers1Copy1 = Array.from(numbers1);
console.log('copy1', numbers1Copy1);

numbers1Copy2 = [...numbers1];
console.log('copy2', numbers1Copy2);

numbers1Copy3 = numbers1.slice();
console.log('copy3', numbers1Copy3);

//копіювання з певного елементу, з ... до
numbers1Copy4 = numbers1.slice(2);
console.log('copy4', numbers1Copy4);

numbers1Copy5 = numbers1.slice(1, 3);
console.log('copy5', numbers1Copy5);

//видалення в середині масиву
numbers1.splice(2, 1);
console.log(numbers1);

numbers1.splice(0, 1);
console.log('numbers1 -1 start', numbers1);

let copy = numbers1Copy3.slice(2);
console.log('copy:', copy);

let copy2 = numbers1Copy2.slice(numbers1Copy2.length - 2);
console.log('copy2', copy2);

//методи перебору масивів
function fncWithCallback (cb, volum) {
    cb(volum);
}
fncWithCallback(alert, 'hi');
fncWithCallback(console.log, 'hi');
*/

// forEach()
let arr11 = [1, 2, 3];
function printItems (item, index, array){
    console.log(`item[${index}] = ${item}`);
    console.log(array);
}
arr11.forEach(printItems);

// map()
function changeToNegativ (item) {
    return item * -1;
}
let arr11New = arr11.map(changeToNegativ);
console.log(arr11New);

let users = [
    {id: 1, name: 'Murka', age: 23},
    {id: 2, name: 'Black', age: 7},
]
function getName(user) {
    return user.name;
}
let usersArray = users.map(getName);
console.log(usersArray);

//filter()
let arr300 = [1, 4, 3, 9, 0];
function isOdd(item) {
    return item % 2 === 1;
} 
let   arr300New = arr300.filter(isOdd);
console.log(arr300New);

function isAdult(user) {
    return user.age >= 18;
}
let userAdult = users.filter(isAdult);
console.log(userAdult);

//findIndex покаже індекс елемента, що шукаємо
function isNine (item) {
    return item === 9;
}
let foundIndex = arr300.findIndex(isNine);
console.log(foundIndex);

