/*let isDay = true;
if (isDay) {
    console.log('Світла тема');
} else {
    console.log('Темна тема');
}

let isOnline = false;
if (!isOnline) {
    console.log('Ваше повідомлення буде відправлено, коли буде інтернет');
}

let summ = Number(prompt('Введіть суму покупки  '));
if (summ < 500) {
    console.log('Сума покупки = ', summ);
} if (summ >= 800) {
    console.log('Сума покупки = ', summ * 0.95);
} else {
    console.log('Сума покупки = ', summ * 0.97 );
}

let day = +prompt('Введіть день тижня');
switch (day) {
    case 1:
        console.log('Понеділок');
        break;
    case 2:
        console.log('Вівторок');
        break;
    case 3:
        console.log('Середа');
        break;
    case 4:
        console.log('Четвер');
        break;
    case 5:
        console.log('П"ятниця');
        break;
    case 6:
        console.log('Субота');
        break;
    case 7:
        console.log('Неділя');
        break;       
    default:
        console.log('Такого дня не існує!');
} */


let day = +prompt('Введіть день місяця');
switch (day) {
    case 1: 
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('Перша декада');
        break;
    case 11: 
    case 12:
    case 13:        
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        console.log('Друга декада');
        break;
    case 21: 
    case 22:
    case 23:        
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
        console.log('Третя декада');
        break;       
    default:
        console.log('Не може бути!');
} 















