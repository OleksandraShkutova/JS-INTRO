
//об'єкт customer
let customer = {
    firstName: 'Lie',
    lastName: 'Kim',
    email: 'lieKim@gmail.com',
    password: 12345678,
    tell: '80123456789',
    //метод 2
    getChangeTell: function(newTell){
        this.tell = newTell;
    },
    adress: {
        city: 'Funchal',
        street: 'Casa Branca',
        nb: 98,
    },
    //мутод 1
    getFullAdress: function(){
        return `Adress: ${this.adress.city}, ${this.adress.street}, ${this.adress.nb}`;
    }
}

console.log('customer', customer);

//метод 1
let fullAdress = customer.getFullAdress();
console.log(fullAdress);

//метод 2
customer.getChangeTell = prompt('введіть новий номер телефона');
console.log('obg customer, change tell:', customer);

/*
//додати властивість
customer.isMale = true;

//видалити властивість
delete customer.adress;

//копіювання
let customer2 = Object.assign({}, customer);
console.log('customer2:',customer2);

let customer3 = {...customer};
console.log('customer3:', customer3);

//Перебрати і вивести властивості обєкта
let user = {
    name: 'Murka',
    color: 'black',
    isMale: false,
    isFurnitureDemage: true,
};

 for (kay in user){
    console.log(kay, '-', user[kay]);
 };


 //Функція-конструктор
function Book(autor, bookTitle, publication, publishHouse, prise, ageOfBook){
    this.autor = autor;
    this.bookTitle = bookTitle;
    this.publication = publication;
    this.publishHouse = publishHouse;
    this.prise = prise;
    //ввела зміннe, щоб побачити як працює метод
    this.ageOfBook = ageOfBook;
}

/*let bookProto = {};
bookProto.changePrise = function (newPrise) {
    this.prise = newPrise;
};
Book.prototype = bookProto;

Book.prototype.changePrise = function (newPrise) {
    this.prise = newPrise;
};

Book.prototype.oldBook = function(yearNow){
    this.ageOfBook = yearNow - this.publication;
}

let book1 = new Book('Дженіфер Л. Арментраут', 'Війна двох королев', 2023, 'КСД', 370, 1); 
console.log('book1:', book1);

let book2 = new Book('Дженіфер Л. Арментраут', 'Із крові і попелу', 2023, 'КСД', 330, 1);
console.log('book2',book2);

book1.changePrise(400);
book1.oldBook(2025);
*/


















