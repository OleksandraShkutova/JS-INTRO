
/*let user = {
    firstName: 'Vika',
    lastName: 'Lyn',
    age: 7,
}
console.log('Object', user);

let userName = user.firstName;
console.log(userName);


let car = {
    brend: 'Mercedes-Benz',
    model: 'SLS AMG',
    made: 2023,
    number: 'BK1313ZE',
    color: 'grafit',
    //вкладені обєкти
    param: {
        height: 1.2,
        weight: 2.0,
    } 
    ,
    //функція
    changeColor(newColor){
        this.color = newColor;
    },
}

car.changeColor('red');
console.log('User car:', car);



/*
//змінюємо
car.color = 'blue';
console.log('User car:', car);

//видаляємо
delete car.model;
console.log('User car:', car);

//додаємо
car.user = 'Sasha Sonce';
console.log('User car:', car);

//переглядаємо зі змінами
console.log('User car:', car);


//копіювання
let car2 = Object.assign({}, car);
car2.color = 'white',
console.log('car2', car2);

let car3 = {...car};
car3.color = 'black',
console.log('car3', car3);

console.log(car === car2);
console.log(car === car3);


for(let key in car){
    console.log(`car: ${key} = ${car[key]}`);
}

//перегляд обєкта
console.dir(car);

//перегляд функції як обєкта
console.dir(function a(b,c){});



const car1 = {
	brand: 'Volkswagen',
};

const car2 = {
	brand: 'Volkswagen',
};

console.log(car1 === car2);
*/

function UserCar(brend, model, made, number,color){
    this.brend = brend;
    this.model = model;
    this.made = made;
    this.number = number;
    this.color = color;
}

//задаємо обєкт    
let carProto = {};

//прописуємо метод в створений обєкт
carProto.changeNumber = function(newNumber){
    this.number = newNumber;
}

//призначаємо створений обєкт в властивість prototype функції-конструктора
UserCar.prototype = carProto;


let userCar1 = new UserCar('Mercedes-Benz', 'SLS AMG', 2023, 'BK1313ZE', 'grafit');
console.log(userCar1);

let userCar2 = new UserCar('Audi', 'Q6', 2014, 'BK0101ZE', 'red');
console.log(userCar2);

UserCar.prototype.changeNumber = prompt('введіть номер авто');







