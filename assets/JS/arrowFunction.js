/*console.log(1, 2, 3, 4, 5);

function f () {
    console.log(arguments);
}
f(1,2);

function mult() {
    let mult = 1;
    for (i = 0; i < arguments.length; i++) {
        mult *= arguments[i];
    }
    return mult;
}
let multOfArgs = mult(1, 2, 3);
console.log('Множина елементів:', multOfArgs);


function calculate(operation) {
    let accum;
    if (operation === '+' ) {
        accum = 0;
        for (let i = 1; i < arguments.length; i++) {
            accum += arguments[i];
        }
    } else if (operation === '*' ) {
        accum = 1;
        for (let i = 1; i < arguments.length; i++) {
            accum *= arguments[i];
        }
    } else {
        return undefined;
    }
    return accum;
}
let resalt = calculate('+', 1, 2, 3, 4, 5);
console.log(resalt);

let calculateMult = calculate('*', 1, 2, 3, 4, 5);
console.log('calculateMult:', calculateMult);


//rest-параметри
function f(a, b, ...args) {
    console.log(args);
}
let res = f(1,2,3,4,5);

//reduse()
function sum(...summands) {
    function howToReduce(accum, item) {
        return accum + item;
    }
    let sum = summands.reduce(howToReduce);
    return sum
}

let res2 = sum(1, 2, 3, 4, 5);
console.log(res2);


function calculate(operation, ...operands) {
    let accum;
    if (operation === '+' ) {
        accum = 0;
        for (let i = 0; i < operands.length; i++) {
            accum += operands[i];
        }
    } else if (operation === '*' ) {
        accum = 1;
        for (let i = 0; i < operands.length; i++) {
            accum *= operands[i];
        }
    } else {
        return undefined;
    }
    return accum;
}
let resalt = calculate('+', 1, 2, 3, 4, 5);
console.log(resalt);

let resalt2 = calculate('*', 1, 2, 3, 4, 5);
console.log(resalt2);
*/

//стрілочні функції

let isAdult2 = age => {
    return age >= 18;
}
console.log(isAdult2(22));
//or
let isAdult = (age) => age >= 18? 'ok': 'not';
console.log(isAdult(16));

//для обєктів

let user = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName: lastName,
    };
};
console.log(user('Vika', 'Lyn'));
//or
let user2 = (firstName, lastName) => ({
    firstName: firstName,
    lastName: lastName,
});
console.log(user('Max', 'Lyn'));

let greeting = (lang, userName) => lang === 'ua'? 'Вітаю ' + userName: 'Hello '+ userName;
console.log(greeting('ua', 'Vika'));
console.log(greeting('en', 'Max'));
//or
let obg = {
    en: 'Hello',
    ua: 'Вітаю',
};
let greeting1 = (lang, userName) => `${obg[lang]} ${userName}`;
console.log(greeting1('ua', 'Sasha'));
console.log(greeting1('en', 'Edvard'));



