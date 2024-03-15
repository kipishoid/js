"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function calculateSalaryAfterTax(salary) {
    const taxRate = 0.13;
    const salaryAfterTax = salary * (1 - taxRate);
    console.log(`Размер заработной платы за вычетом налогов равен ${salaryAfterTax}.`);
}

const userInput = prompt("Введите вашу заработную плату:");
const salary = parseFloat(userInput);

if (isNaN(salary)) {
    console.log("Значение задано неверно");
} else {
    calculateSalaryAfterTax(salary);
}
