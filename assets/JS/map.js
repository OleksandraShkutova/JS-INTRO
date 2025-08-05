
let map1 = new Map();
map1.set ('Mark', '+380507765094');
map1.set ('Maks', '+380667765094');
map1.set ('Vika', '+380977765094');
console.log('Users:', map1);

console.log(map1.get('Maks'));
console.log(map1.get('2'));

console.log(map1.has('Vika'));
console.log(map1.has('Mika'));

map1.delete('Mark');
console.log('Map1:', map1);

map1.forEach((item, key) => console.log( key, ':', item));

const map1Keys = [...map1.keys()];
console.log('Array keys map1:', map1Keys);

console.log('Array values map1:', [...map1.values()]);

let obj = {
    'Vika': '+380507765094',
    'Maks': '+380666588945',
}
console.log('obg:', obj);

let map2 = new Map(Object.entries(obj));
console.log('map2:', map2);

console.log(map1.entries());

//Перекласти фразу 'dog run white cat'

//створюємо словничок у вигляді Map
const dictionary = new Map();
//додаємо слова з перкладом kay - value в словник 
dictionary.set('dog', 'собака').set('cat', 'кіт').set('run', 'бігати');
// прописуємо функцію, що буде здійснювати переклад
function tranclate(endVoice){
    return endVoice
        //перетворюємо фразу на масив з окремих слів ['dog', 'run', 'white', 'cat']
        .split(' ')
        //створюємо новий масив з перекладених слів. 
        //Якщо слово є в словники - дістаємо властивість
        //якщо немає - залишаємо як є
        .map(word => (dictionary.has(word) ? dictionary.get(word) : word))
        //з новоствореного масиву значень слів складаємо фразу, розділяючи слова пробілом
        .join(' ');
}
const engVoice = 'dog run white cat';
const uaVoice = tranclate(engVoice);
console.log('Переклад:', uaVoice);



