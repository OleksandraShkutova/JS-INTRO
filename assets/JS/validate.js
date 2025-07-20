
function validateAge (age){
    if (typeof age !== 'number'){
        throw new TypeError('age must be number');
    }
    if (age < 18) {
        throw new RangeError('You so young')
    }
    return age;
}
try {
    console.log(validateAge(20));
} catch (err) {
    console.log(err);
}

// Homework 2-09
function validateEmail (email){
    if (email[0] === '@' || email.length - 1 === '@') {
        throw new SyntaxError('incorrect email')
    }
    return email;
}
try {
    console.log(validateEmail('sasha@ukr.net'));
} catch (err) {
    console.log(err);
}

let a = 5;
console.log(a);