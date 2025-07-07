/*
Phone: brand, model, color, isNfc, price

function Phone (id, brand, model, madeYear, color, isNfc, price) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.madeYear = madeYear;
    this.color = color;
    this.isNfc = isNfc;
    this.price = price;
}
let phones = [];
let PHONE_COUNT = 10;
for (i = 0; i < PHONE_COUNT; i++) {
    let phone = new Phone (
        i,
        Math.random() > 0.5? 'Samsung' : 'Xiaomi',
        `model ${Math.trunc(Math.random() * 20)}`,
        2015 + Math.trunc(Math.random() * 10),
        Math.random() > 0.5? 'blue' : 'grey',
        Math.random() > 0.5,
        3000 + Math.trunc(Math.random() * 1500)
    );
    phones.push(phone);
}

console.table(phones);
 
// 1. Відібрати телефони prise >=  4000;

//function isGreater4000(item) {
//   return item.price >= 4000;
//}

//let isGreater4000 = item => item.price >= 4000;

//let priseFilter = phones.filter(isGreater4000);

let priseFilter = phones.filter(item => item.price >= 4000);
console.table(priseFilter);

// 2. Відібрати  телефони 2018 року (filter)

let madeYearFilter = phones.filter(item => item.madeYear > 2018);
console.table(madeYearFilter);

// 3. Вивести "Brand: model year" кожного тел. (forEach)

phones.forEach(p => console.log(`${p.brand}: ${p.model} ${p.madeYear}`));

// 4. Видалити телефон з id 7 (findIndex + splice)

let foundIndex = phones.findIndex(p => p.id === 7);
console.log('index id7', foundIndex);

if (foundIndex !== -1) {
    phones.splice(foundIndex, 1);
}

// 5. Отримати масив з телефонами, ціна яких нижча на 5% від вихідної

let discountPrise = phones.map(p => {
    let phoneCopy = {...p};
    phoneCopy.price = Math.round(phoneCopy.price * 0.95);
    return phoneCopy
});
console.table(discountPrise);


// 6. Вивести бренд+модель тел. із nfc

//let haveNfs = phones.filter(p => p.isNfc);
//haveNfs.forEach(item => console.log(`Brand: ${item.brand} model: ${item.model}`));
//console.table(haveNfs);

phones
    .filter(p => p.isNfc)
    .forEach(p => console.log(`Brand: ${p.brand} model: ${p.model}`))
*/

//Рядки як асевдомасиви

let str = 'qwerT'
console.log('str = qwerT:', str.length);
console.log(str[2]);

const str1 = str.slice(0, 5) + 'ww';
console.log('str1 = qwerTww:', str1);

console.log(str.startsWith('qw'));
console.log(str1.endsWith('t'));
console.log(str.includes('ww'));
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf('q'));

// Vika Lyn => VL

function getUserName (userName) {
    const spaceIndex = userName.indexOf(' ');
    return (userName[0] + userName.slice(spaceIndex + 1, spaceIndex + 2)).toUpperCase();
};

const initials = getUserName('vika lyn');
console.log(initials);

console.log(spaceIndex);
