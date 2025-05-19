
/*function sum(a, b) {
    return a + b;
}
let result = sum (7, 13);
console.log(result);



function c(a, b) {
    return a**b;
}
let result = c(2, 2);
console.log(result);

let result1 = c(3, 4);
console.log(result1);

function sumAll(a, b){
    let sum = 0;
    for(let i = a; i <= b; i++ ){
      sum += i;  
    }
    return sum;
}
console.log(sumAll(7,10));


function isAge(age){
    if(age >= 18) {
         return true;
    } else {
        return false;
    }
}

function isAge(age){
    return age >= 18 ? true: false;
}

console.log(isAge(16));
console.log(isAge(18));
console.log(isAge(25));


function isAge(age){
    return age >= 18;
}
console.log(isAge(20));

let c = function(a, b) {
    return a**b;
}
console.log(c(2, 2));
*/

/**
 * Calc sum of all given numbers
 * @param {number} d - first number
 * @param {number} [c = 1] - second number
 * @returns sum all number
 */

function sumAll(d, c = 1) {
    let sum = 0;
    for(let i = c; i <= d; i++ ){
      sum += i;  
    }
    return sum;
}
console.log(sumAll(5));
console.log(sumAll(5, 1));

/**
 * Calc sum of two numbers
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns sum two numbers
 */
function sum(a, b) {
    return a + b;
}
let result = sum (7, 13);
console.log(result);

