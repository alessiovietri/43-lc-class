const remoteController = {
    color: 'black',
    buttons: ['1', '2', '3', '...', 'Volume Su', 'Canale +', 'Canale -'],
    bulb: true,
    sendImpulse() {
        console.log('Spara');
    }
};

console.log(remoteController.color);
remoteController.sendImpulse();

// ----------------------------------------------------------

function createPerson(firstName, lastName, age) {

    // const newPerson = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     age: age,
    //     fullName() {
    //         return this.firstName + ' ' + this.lastName;
    //     }
    // };

    const newPerson = {
        firstName: null,
        lastName: null,
        age: null,
        fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    };

    newPerson.firstName = firstName;
    newPerson.lastName = lastName;
    newPerson.age = age;

    return newPerson;

}

const personOne = createPerson('Alessio', 'Vietri', 31);

console.log(personOne);
console.log(personOne.fullName());

const personTwo = createPerson('Salvatore', 'Capano', 21);

console.log(personTwo);
console.log(personTwo.fullName());

// ----------------------------------------------------------

class Car {                         // Creo un nuovo template per la tipologia di oggetto "Car". Questo template mi servirà per creare tutti i miei oggetti di tipo "Car"

    constructor(name, year) {       // Mi definisco la funzione costruttore che mi servirà a creare ed inizializzare tutte le mie istanze di tipo "Car"
        this.name = name;           // Nello specifico, ogni oggetto di tipo "Car" avrà una proprietà con chiave "name"...
        this.year = year;           // ...ed una proprietà con chiave "year"
    }

    getFullName() {
        return 'La mia macchina è una ' + this.name;
    }

    getFullYear() {
        return 'La mia macchina è del ' + this.year;
    }

}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

console.log(myCar1);
console.log(myCar1.getFullName());
console.log(myCar1.getFullYear());

console.log(myCar2);
console.log(myCar2.getFullName());
console.log(myCar2.getFullYear());

// ----------------------------------------------------------

class Product {

    constructor(price, name, mainPhoto, description, quantity, type, colors, photos) {

        this.price = price;
        this.name = name;
        this.mainPhoto = mainPhoto;
        this.description = description;
        this.quantity = quantity;
        this.type = type;
        this.colors = colors;
        this.photos = photos;

    }

    isAvailable() {
        if (this.quantity > 0) {
            return true;
        }
        else{
            return false;
        }
    }

    getDiscountedPrice(year) {

        if (year % 2 == 0) {
            return this.price * 0.8;
        }

        return this.price;

    }

    sold() {
        // this.quantity = this.quantity - 1;
        this.quantity--;
    }

    getHtml() {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
        
            <h1>
                ${this.name}
            </h1>
            <p>
                ${this.description}
            </p>
            <img src="${this.mainPhoto}">
        
        `;

        return productCard;
    }

}

const main = document.querySelector('main');

const laptop = new Product(
    999,
    'Super Laptop 2024',
    'https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'Ma quanto è bello sto laptop 2024, altro che Apple',
    2,
    'Informatica & Elettronica',
    ['black', 'gray', 'white'],
    [
        'https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        'https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
);

console.log(laptop);
const laptopHtml = laptop.getHtml();
main.append(laptopHtml);

const redDress = new Product(99.99, 'Abito rosso', null, 'Un bellissimo abito rosso', 2000, 'Abiti', ['red'], []);
console.log(redDress);

main.append(redDress.getHtml());