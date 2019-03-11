// 1. Создать функцию которая принимает число и считает факториал этого числа.
function factorial(n: number): number {
    if (!Number.isInteger(n)) throw new Error("Число n должно быть целым.");
    
    let res: number = 1;
    while (n) {
        res *= n--;
    }
    
    return res;
}

let n: number = 7;
console.log(`factorial(${n}) = ${factorial(n)}`);

// 2. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать
//    их произведение: multiply(1,2,3) = 6 (1*2*3)
//    Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply(...rest: number[]): number {
    if (!rest.length) return 0;
    
    return rest.reduce((r, currValue) => r * currValue);
}

console.log(`multiply(1,2,3) = ${multiply(1,2,3)}`);
console.log(`multiply(-1,2,3) = ${multiply(-1,2,3)}`);
console.log(`multiply(0,3) = ${multiply(0,3)}`);
console.log(`multiply() = ${multiply()}`);

// 3. Создать функцию, которая принимает строку и возвращает строку-перевертыш:
//    reverseString(‘test’) // “tset”.

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

console.log(`reverseString("tset"): ${reverseString("tset")}`);

// 4. Создать интерфейс Админа.

interface IUser {
    name: string;
    email: string;
    password: string;
    type?: string;
}
