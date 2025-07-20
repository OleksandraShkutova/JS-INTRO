
//Рекурсія x ** n
/*
function pow (x , n) {
    return ( n === 1 ? x : (x * pow (x, n - 1)));
}

try {
    console.log( pow (8 , 3));
} catch (err) {
    console.log(err);
}
*/

// Homework
function row (base , exponent){
    if (typeof base !== 'number'|| typeof exponent !== 'number'){
        throw new TypeError('base and exponent must be number');
    }
    if (exponent < 0 || !Number.isSafeInteger(exponent)) {
        throw new RangeError('exponent must be positiv and integer')
    }
    return base ** exponent;
}
try {
    console.log(row(2, 3));
} catch (err) {
    console.log(err);
}

let a = 5;
console.log(a);


