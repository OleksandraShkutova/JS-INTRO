/*
function User (name, surname, age, email) {
    this.firstName = name;
    this.secondName = surname;
    this.age = age;
    this.email = email;
}

User.prototype.getFullName = function () {
    return this.firstName + ' ' + this.secondName;
};

// instanceof перевіряє чи є така функція-конструктор 
// в лонцюжку прототипів гobj (user1, user 2 ...)
//статичний метод для функції-конструктор
User.isUser = function (obj) {
    return obj instanceof User;
};


const user1 = new User (
    'Vika',
    'Lyn',
    21,
    'Vika@gmail.com'
);

console.log('user1', user1);
console.log(user1.getFullName());

//instanceof перевірка
console.log(User.isUser(user1));


//класи
class Userr {
    constructor (name, surname, age, email) {
        this._firstName = name;
        this._secondName = surname;
        this.age = age;
        this._email = email;
    }
    set age(value) {
        if (typeof value !== 'number') {
            throw new TypeError('age must be number'); 
        }
        if (value < 0 || value > 150) {
            throw new RangeError('age must be between 0 and 150');
        }
        this._age = value;
    }
    get age() {
        return this._age;
    }
    //метод
    getFullName () {
        return this._firstName + ' ' + this._secondName;
    }
    //статичний метод
    static isUserr (obj) {
        return obj instanceof Userr;
    }
}

//проходить через перевірку set і змінює дані 21 на 28 (якщо перевірку пройдено)
try {
    const user2 = new Userr (
    'Vika',
    'Lyn',
    21,
    'Vika@gmail.com'
    );
    console.log('user2', user2);
    console.log(user2.getFullName());
    console.log(Userr.isUserr(user2));
// через get 21 замінюжмо на 28
    user2.age = 28; 
    console.log('user2.age:', user2.age); 
} catch (err) {
    console.log('err', err);
}
*

class Phone{
    constructor (brand, model, color, prise, made){
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.prise = prise;
        this.made = made;
    }
    calcOldPhone (made) {
        //обєкт new Date() - поточна дата getFullYear -рік з поточної дати
        return new Date().getFullYear() - this.made;
    }
}

const myPhone = new Phone ('Redmi', 'Note 12', 'black', 6000, 2022);
console.log('My phone:', myPhone);
console.log('Old my phone:', myPhone.calcOldPhone());
*/

//Деструктуроване присвоєння змінна = влстивість обєкта чи пасиву

//function f(user) {
//    const {firstName, lastName, age} = user;
//    console.log(firstName);
//    console.log(lastName);
//    console.log(age);
//};

//АБО
function f({firstName, lastName, age}) {
    console.log(firstName);
    console.log(lastName);
    console.log(age);
}
const user = {
    firstName: 'Vika',
    lastName: 'Lyn',
    age: 21,
}
f(user);

const book = {author:'S.Maas', title: 'A Court of Thorns and Roses'};
function bookInfo ({author, title}){
    console.log(author);
    console.log(title);
}
bookInfo(book);
//або
const {author, title} = book;
console.log(author);
console.log(title);

// з вкладеними обєктами
const book2 = {
    author: {
        firstName: 'Sarah.J.', 
        lastName:'Maas',
    }, 
    titleBook: 'A Court of Thorns and Roses'
};

const {
    author: {
        firstName, 
        lastName,
    }, 
    titleBook: bookName,
} = book2;
console.log(firstName + ' ' + lastName + ' ' + '"' + bookName + '"');

//для масивів
const arr = [1, 2, 3, 4, 5];
const [arr0, arr1,  ,  , arr4] = arr;
console.log(arr0, arr1, arr4);

const user3 = {
    name: 'Vika',
    age: 21,
    emails: ['vika@gmail.com', 'lyn@ukr.net'],
    isMale: true,
};

const {
    //перейменували
    name: userName,
    //перейменували 
    age: userAge, 
    //зробили деструктуризацію масиву
    emails: [email1, email2], 
    isMale} = user3;
console.log(userName);
console.log(userAge);
console.log(email1);
console.log(email2);
console.log(isMale);

//рестпараметри
const attr = {id: 'btn', style: 'color: blue', title: 'click me'};
const { style , ... restAttr } = attr;
console.log('style: ', style);
console.log('restparameters:', restAttr);

const {name, ... restUser3} = user3;
console.log(name);
console.log(restUser3);
