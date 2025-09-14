"use strict";
//================================================================
// --- ДЗ ---
//================================================================
//Задача 1. 
// Генерація всіх підмножин: Реалізуйте рекурсивну функцію, яка генерує всі можливі підмножини заданого масиву. 
// Наприклад, для масиву [1, 2, 3] можливі підмножини:
//[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3].
console.log(`================ Задача 1 ================`);
/**
 * Генерує всі можливі підмножини заданого масиву чисел.
 *
 * @param {number[]} arr Масив чисел, для якого потрібно знайти всі підмножини
 * @returns {number[][]} Масив усіх можливих підмножин (кожна підмножина — це масив чисел)
 */
function getAllSubsets(arr) {
    const result = [];
    /**
     * Рекурсивно створює підмножини з елементів масиву.
     *
     * @param {number} index Поточний індекс елемента в масиві
     * @param {number[]} currentSubset Поточна підмножина, що формується
     */
    function makeSubset(index, currentSubset) {
        if (index === arr.length) {
            result.push([...currentSubset]);
            return;
        }
        makeSubset(index + 1, currentSubset); // не беремо елемент
        currentSubset.push(arr[index]); // беремо елемент
        makeSubset(index + 1, currentSubset);
        currentSubset.pop();
    }
    makeSubset(0, []);
    return result;
}
// ----- Приклад використання -----
const currentNumbers = [1, 2, 3];
const subsets = getAllSubsets(currentNumbers);
console.log('Можливі підмножини:', subsets);
console.log(``);
//=====================================================
//Задача 5. 
//З використанням замикань розробити ітератор, тобто функцію, що буде поступово за окремими викликами видавати по одне значення від заданого мінімального до заданого максимального. 
// Якщо значення досягне максимального, то наступним буде мінімальне значення. З використанням цієї функції реалізувати перебір номерів місяців. 
console.log(`================ Задача 5 ================`);
const min = 1;
const max = 12;
/**
 * Створює ітератор для номерів місяців.
 * Повертає функцію, яка при кожному виклику дає наступний номер місяця.
 *
 * @param {number} monthCounter - Початковий номер місяця
 * @param {number} min - Мінімальний номер місяця
 * @param {number} max - Максимальний номер місяця
 * @returns - Функція, яка повертає наступний номер місяця
 */
function getIteratorMonthNumbers(monthCounter, min, max) {
    return function getNextMonth() {
        if (monthCounter === max) {
            monthCounter = min;
        }
        else {
            monthCounter++;
        }
        return monthCounter;
    };
}
// Створюємо ітератор, починаючи з 1
const startIteratorMonth = getIteratorMonthNumbers(0, min, max);
/**
 * Виводить наступні номери місяців задану кількість разів.
 *
 * @param {number} numberRepeat - Кількість повторів (виводів)
 */
function showMonthsRepeat(numberRepeat) {
    for (let i = 0; i < numberRepeat; i++) {
        console.log(startIteratorMonth());
    }
}
showMonthsRepeat(24);
console.log(``);
//=====================================================
//Задача 7. 
// Тренажер додавання. 
// Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
console.log(`================ Задача 7 ================`);
/**
 * Генерує випадкове число від 0 до 10
 * @returns {number} випадкове число
 */
function getRandomNamber() {
    return Math.floor(Math.random() * 11);
}
/**
 * Тренажер додавання:
 * кожні 5 секунд користувачу задається приклад на додавання двох чисел.
 * Після 10 прикладів тренування зупиняється.
 * @param {number} counter - лічильник прикладів (всередині функції)
 * @returns {void}
 */
function additionSum() {
    let counter = 0;
    let timer = setInterval(() => {
        if (counter >= 10) {
            clearInterval(timer);
            console.log(`Тренування завершено!`);
            return;
        }
        const number_1 = getRandomNamber();
        const number_2 = getRandomNamber();
        const correctSum = number_1 + number_2;
        const userInputSum = prompt(`Введи суму двох чисел ${number_1} і ${number_2}`);
        const userSum = userInputSum !== null ? parseFloat(userInputSum) : NaN;
        if (correctSum === userSum)
            console.log(`Вітаю! Ви дали вірну відповідь — сума чисел ${number_1} та ${number_2} складає ${correctSum}`);
        else
            console.log(`Ви помилились, сума чисел ${number_1} та ${number_2} складає ${correctSum}`);
        counter++;
    }, 5000);
}
additionSum();
//=====================================================
