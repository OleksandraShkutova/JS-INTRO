
function Phone (brand, model, color, prise){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.prise = prise;
};

Phone.prototype.getFullName = function() {
    return `${this.brand} ${this.model}`;
};

const myPhone = new Phone ('nokia', 1100, 'blue', 100);
console.log('My phone:', myPhone);

//перебор перелічувальних властивостей myPhone в т.ч і успадковані
for (const key in myPhone) {
    console.log(key);
};

// Лише власні
// 1 метод
for (const key in myPhone) {
    if (myPhone.hasOwnProperty(key)) {
       console.log(key); 
    }  
};

// 2 метод, виведе не просто властивості, а масив властивостей
console.log('My phone', Object.keys(myPhone));
//або
Object.keys(myPhone).forEach(phkay =>
    console.log(`myPhone[${phkay}] = ${myPhone[phkay]}`)
);
 
//масив властивостей myPhone
console.log('Властивості:', Object.keys(myPhone));

//масив знвчень myPhone
console.log('Значення:', Object.values(myPhone));

//масив з масивами властивість + значення myPhone
console.log('', Object.entries(myPhone));

