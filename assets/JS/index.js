
// 1
function isWorkingAgePerson(age){
    return age >= 20 && age < 88;
}
console.log(isWorkingAgePerson(20));
console.log(isWorkingAgePerson(4));
console.log(isWorkingAgePerson(88));
console.log(isWorkingAgePerson(66));

// 2
function checkMultiplicity(a, b){
    return a % b === 0;
}
console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));

//3
function isTriangle(a, b, c) {
    return a + b > c || a + c > b || b + c > a && (a > 0, b > 0, c > 0);
}
console.log(isTriangle(2, 2, 3)); 

//повинна виконуватись ще умова більшої сторони, але я незнаю як її прописати.
//Багото і або

// 4
function s(a, b = a){
    return a * b;
} 
console.log(s(2,3));
console.log(s(4));

// 5
function lightNumber(a){
    return (a % a === 0 && a % 2 === 1);
}
console.log(lightNumber(+prompt('введіть число')));
