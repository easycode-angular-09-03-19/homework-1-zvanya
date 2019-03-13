// 1. Создайте абстрактный класс Car с двумя методами drive (ехать) и refuel (заправка) а также с
//    двумя свойствами mileage (общий пробег машины) и fuel (количество бензина в машине).

// Почему свойства объявлены в аргументах конструктора
// https://youtu.be/_3n4JdZdXWo?t=1184
abstract class Car {
    constructor(protected _mileage: number, protected _fuel: number) {
    }
    
    public abstract drive(distance: number): void;
    public abstract refuel(quantity: number): void;
    
    public abstract get fuel(): number;
    public abstract get mileage(): number;
}

// 2. Наследоваться от абстрактного класса Car и реализовать методы абстрактного класса drive
//    (ехать) и refuel (заправка). Метод drive должен принимать количество километров и обновлять
//    свойство mileage и уменьшать значение свойства fuel. Если бензин закончился, то нужно вернуть
//    сообщение о том что нужно заправиться. Метод refuel должен увеличивать свойство fuel.
//    Обязательно делать проверку переданных данных. Свойства fuel и mileage должны быть
//    protected.



// 3. Создать публичный get для получения свойств fuel и mileage.

class Jeep extends Car {
    constructor(_mileage: number = 0, _fuel: number = 0) {
        super(_mileage, _fuel);
    }
    
    public drive(distance: number): void {
        if (!isNumberCorrect(distance))
            throw new Error("Введите корректное количество километров, которые хотите проехать.");
        
        if (this._fuel < 1)
            throw new Error("Вам необходимо заправить машину.");

        this._fuel -= 1;
        this._mileage += distance;
    }
    
    public refuel(fuel: number): void {
        if (!isNumberCorrect(fuel))
            throw new Error("Количество заправляемого топлива должно быть > 0");
        
        this._fuel += fuel;
    }
    
    public get fuel(): number {
        return this._fuel;
    }
    
    public get mileage(): number {
        return this._mileage;
    }
}

let jeep: Jeep = new Jeep();


// Helper
function isNumberCorrect(n: number): boolean {
    return (!(!isFinite(n) || n <= 0));
}