"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

function cube(number) {
    return number ** 3;
}

const inputNumber = 5;
const result = cube(inputNumber);
console.log(`Куб числа ${inputNumber} равен ${result}`);