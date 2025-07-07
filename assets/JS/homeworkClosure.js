/*
// 1
function counter () {
    let i = 0
    return function () {
        return i = i + customCounter()
    }
}

function customCounter () {
    return +prompt('введіть число')
}
const myCounter = counter();
console.log('result1:', myCounter());
console.log('result2:', myCounter());
console.log('result3:', myCounter());
*/

// 2
function counter () {
    let i = +prompt('введіть початкове знвчення')
    return function () {
        return i = i + customCounter()
    }
}

function customCounter () {
    return +prompt('введіть число')
}
const myCounter2 = counter();
console.log('result1:', myCounter2());
console.log('result2:', myCounter2());
console.log('result3:', myCounter2());