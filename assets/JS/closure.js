
/*//Лексичне середовище. для f2 а = 'local' не видима, так як f2 визначає своє положення за місцем оголошення.

const a = 'global';
function f1(){
    const a = 'local'
    f2();
}
function f2(){
    console.log(a)
}
f1()

const a = 'global';
function f1(){
    const a = 'local'
    function f2(){
    console.log(a)
    }
    f2()
}
f1()


//замикання

const a = 'global';
function f1(){
    const a = 'local'
    const f2 = function(){
    console.log(a)
    }
    return f2
}
const f2FronF1 = f1();
f2FronF1();

function counter () {
    let i = 0
    return function () {
        return ++i
    }
}
 const counter1 = counter();
 console.log(counter1);

console.log('counter1', counter1());
console.log(counter1());
console.log(counter1());

const counter2 = counter();
console.log('counter2', counter2());
console.log(counter2());
console.log(counter2());

console.log('counter1', counter1());
*/







