
// 0
let arr = [Math.trunc(Math.random() * 10), 8, 10, 4, Math.trunc(Math.random() * 20)];
console.log('Array:', arr);

// 1
arr.pop();
console.log('Delete last namber:', arr);

arr.shift();
console.log('Delete first namber:', arr);

arr.unshift(13);
console.log('Add namber for start:', arr);

arr.push(15);
console.log('Add namber for end:', arr);

// 2
console.log('length array:', arr.length);

//3
let arrayCopy1 = Array.from(arr);
console.log('copy1', arrayCopy1);

let arrayCopy2 = [... arr];
console.log('copy2', arrayCopy2);

let arrayCopy3 = arr.slice();
console.log('copy3', arrayCopy3);

// 4
for ( let i = 0; i < arrayCopy1.length; i++) {
    if (i % 2 === 0) {
    console.log(`id ${i}: ${arr[i]}`);    
    };   
};

// 5 
let multOfarr = calsMult(arrayCopy1);
function calsMult (numbs){
    let mult = 1;
    for ( let i = 0; i < arrayCopy1.length; i++) {
        mult *= arrayCopy1[i];
    };
    return mult;
};
console.log('Multiplication of arrayCopy1 numbers:', multOfarr);

// 6
function Phone (id, brand, model, color, price, RAM){
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.price = price;
    this.RAM = RAM;
}

let phones = [];
let phonePoint = 5;
for(let i = 0; i < phonePoint; i++){
    let phone = new Phone (
        i,
        Math.random() > 0.5? 'Xiaomi': 'Huawei',
        `model: ${Math.trunc(Math.random() * 21)}S`,
        Math.random() > 0.5? 'blue': 'grey',
        4000 + Math.trunc(Math.random() * 5000),
        `${Math.trunc(Math.random() * 12 + 3)} ГБ`,
    );
    phones.push(phone);
}
console.table(phones);

//* хочу обговорити на консультації


// 8 
let arr3 = [4, 9, -7, 3, 5, 0, -2];
let filterArray = arr3.filter(numb => numb > 0);
console.log(filterArray);

// 9
let arr4 = [10, 20, 30, 40, 50];
let mapArray = arr4.map(numb => numb / 100);
console.log(mapArray);

// 10
let arr5 = [1, 2, 3, 4, 5];
let forEachArray5 = arr5.forEach(numb => console.log(numb**3));

//11
let arr6 = [30, 20, 10, 40, 50];
let findIndexArray6 = arr6.findIndex(numb => numb**2 === 100);
console.log(findIndexArray6);

if (findIndexArray6 !== -1) {
    arr6.splice(findIndexArray6, 1);
} else {
    console.log('Sorry, number is undefined')
};
console.log(arr6);

// 12
let arr7 = [14, 8, -2, 4, 10, 12];
let everyArr7 = arr7.every(item => item % 2 === 0);
console.log(everyArr7);

// 13
let someArr7 = arr7.some(item => item < 0);
console.log(someArr7);









