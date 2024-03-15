"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

function findMaxNumber(num1, num2, num3) {
    const maxNumber = Math.max(num1, num2, num3);
    console.log(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${maxNumber}.`);
}

const userInput1 = parseFloat(prompt("Введите первое число:"));
const userInput2 = parseFloat(prompt("Введите второе число:"));
const userInput3 = parseFloat(prompt("Введите третье число:"));

findMaxNumber(userInput1, userInput2, userInput3);

