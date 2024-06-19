//Создайте класс Rectangle, который имеет свойства width и height,
//а также метод getArea(), который возвращает площадь прямоугольника.

// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
//     getArea() {
//         return this.width * this.height
//     }
// }

//-------------------------------------------------------------------------//
//Упражнение 2: Наследование
//Создайте класс Square, который наследует от класса Rectangle.
//Конструктор класса Square должен принимать только одну сторону
//квадрата (side) и устанавливать её как ширину и высоту прямоугольника.

// class Square extends Rectangle {
//     constructor(width, height, side) {
//         super(width, height);
//         this.side = side
//         this.width = this.side
//         this.height = this.side
//     }
// }

// или

//class Square extends Rectangle {
//     constructor(side) {
//         super(side, side); // Передаем side дважды для width и height в конструктор Rectangle
//     }
// }
//-------------------------------------------------------------------------//

//Упражнение 3: Инкапсуляция
//Создайте класс Person, который имеет приватные свойства firstName и lastName.
//Реализуйте методы для получения полного имени (getFullName()) и изменения
//имени (setFirstName() и setLastName()).


class Person {
    #firstname
    #lastname
    constructor(firstName, lastName) {
        this.#firstname = firstName
        this.#lastname = lastName
    }

    get fullName() {
        return `${this.#firstname} ${this.#lastname}`
    }
    set firstName(newName) {
        this.#firstname = newName
    }
    set lastName(newName) {
        this.#lastname = newName
    }
}

// Пример использования
const person = new Person("John", "Doe");
console.log(person.fullName); // John Doe
person.firstName = "Jane";
console.log(person.fullName); // Jane Doe
person.lastName = "Smith";
console.log(person.fullName); // Jane Smith

//-------------------------------------------------------------------------//

//Упражнение 4: Полиморфизм
//Создайте абстрактный класс Shape, который имеет метод getArea().
//Затем создайте классы Circle и Rectangle, которые наследуют от Shape
//и реализуют метод getArea().

class Shape {
    //полезно сделать метод getArea в классе Shape абстрактным,
    // чтобы он вызывал ошибку при попытке его вызова напрямую из Shape.

    getArea() {
        throw new Error("Метод 'getArea()' должен быть реализован.");
    }
}

class Circle extends Shape {
    getArea() {
        console.log('circle area')
    }
}

class Rectangle extends Shape {
    getArea() {
        console.log('rectangle area')
    }
}

//-------------------------------------------------------------------------//
//Упражнение 5: Композиция
// Создайте класс Car, который использует классы Engine и Wheels для описания
// автомобиля. Класс Car должен иметь метод start(), который запускает двигатель,
// и метод move(), который крутит колёса.

class Engine {
    startEngine() {
        console.log('двигатель запущен')
    }
}

class Wheels {
    startWheels() {
        console.log('колёса крутятся')
    }
}

class Car {
    constructor() {
        this.engine = new Engine();
        this.wheels = new Wheels();
    }

    start() {
        this.engine.startEngine();
    }

    move() {
        this.wheels.startWheels();
    }
}

// Пример использования
const car = new Car();
car.start(); // двигатель запущен
car.move();  // колёса крутятся

