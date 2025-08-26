//================================================================
// Задачі роз"язані на УРОЦІ
//================================================================


//=============================
//========== for Of ===========
//=============================
// Приклад.
// Дано масив показників температур. Вивести від"ємні значення

// const typicalTemperatures = [
//   -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
// ]

// for (const element of typicalTemperatures) {
//   if (element < 0) {
//     document.write(` ${element} <br>`)
//   }
// }
// typicalTemperatures.forEach((el) => document.write(` ${el} <br>`))


//============================
//Дано послідовність років працівників. Вивести список додавши "пенесіонер/не пенсіонер"

// const ages = [21, 34, 58, 88, 71, 41]

// for (const age of ages) {
//   const msg = `${age} - ${age > 65 ? 'пенесіонер' : 'не пенсіонер'}`
//   document.write(`${msg}<br>`)
// }
//============================


//============================
// Створити функцію, яка для довільної кількості чисел знаходить одночасно декілька результатів:
// - кількість парних,
// - кількість додатних,
// - кількість більших за 100.

//----- повертаємо декілька значень з використанням масиву
// (ВАЖЛИВИЙ ПОРЯДОК ЗМІННИХ) -----

// function getResults(...numbers) {
//   let evenNumbers = 0,
//     positiveNumbers = 0,
//     greater100 = 0

//   for (const num of numbers) {
//     if (num % 2 === 0) evenNumbers++
//     if (num > 0) positiveNumbers++
//     if (num > 100) greater100++
//   }
//   return [evenNumbers, positiveNumbers, greater100]
// }

// const [resEven, resPos, res100] = getResults(231, 45, 23, -23, 54, -122)
// document.write(
//   `resEven = ${resEven}, resPos = ${resPos}, res100 = ${res100}`
// )


// ----- повертаємо декілька значень за допомогою об"єкта (важливі назви змінних)
// function getResults(...numbers) {
//   let evenNumbers = 0,
//     positiveNumbers = 0,
//     greater100 = 0
//   for (const num of numbers) {
//     if (num % 2 === 0) evenNumbers++
//     if (num > 0) positiveNumbers++
//     if (num > 100) greater100++
//   }
//   return {
//     resEven: evenNumbers,
//     resPos: positiveNumbers,
//     res100: greater100,
//   }
// }

// console.log(getResults(231, 45, 23, -23, 54, -122))

// const { resEven, res100, resPos } = getResults(231, 45, 23, -23, 54, -122)

// document.write(
//   `resEven = ${resEven}, resPos = ${resPos}, res100 = ${res100}`
// )

// ----------------------------------------------------------------------







//==============================
//========== forEach ===========
//==============================
// Приклад.
// Дано масив показників температур. Від"ємні замінити на 0

// const typicalTemperatures = [
//   -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
// ]
//---1---
// // for (let i = 0; i < typicalTemperatures.length; i++) {
// //   if (typicalTemperatures[i] < 0) typicalTemperatures[i] = 0
// // }
// // document.write(typicalTemperatures)

//---2---
// typicalTemperatures.forEach((copyEl, ind, baseArr) => {
//   if (copyEl < 0) baseArr[ind] = 0
// })


//============================
// Приклад. Масив цін товарів. Знайти суму цін, які більші за 100.

// let prices = [12, 344, 67, 888, 3, 456]

// let sum = 0
// prices.forEach((price) => {
//   if (price > 100) sum += 100
// })

// document.write(`sum : ${sum}`)


//============================
// // Дано масив оцінок. Вивести хороші оцінки (більші за 3)

// let scores = [4, 5, 5, 4, 3, 4, 3, 3, 5]

// scores.forEach((score) => {
//   if (score > 3) document.write(`${score} <br>`)
// })

//============================
// Дано масив оцінок. Погані оцінки (менші за 4) замінити на 10

// let scores = [4, 5, 5, 4, 3, 4, 3, 3, 5]

// scores.forEach((score, index, baseArr) => {
//   if (score < 4) baseArr[index] = 10
// })
// document.write(scores)


//==========================================
// Переведення елементів масиву в верхній регістр:
// const fruits = ['apple', 'banana', 'cherry']
// fruits.forEach((el, ind, arr) => (arr[ind] = el.toUpperCase()))
// document.write(fruits)


//==========================================
// Перетворення масиву рядків в масив значень:
// const prices = ['12', '21', '679', '90']
// prices.forEach((el, ind, arr) => (arr[ind] = parseInt(el)))
// console.log(prices)


//==========================================
// Дано масив елементів.
// Усі елементи, які більші за перший елемент помножити на 2

// let userArr = [100, 90, 500, 13, 17, 16, 18]
// userArr.forEach((el, ind, arr) => {
//   if (el > arr[0]) arr[ind] *= 2
// })
// document.write(userArr)


//==========================================
// Дано масив цін.
// Змінити цей масив так, що на ціни товарів, які більші за 1000 грн.
// дати 30% знижки

// let prices = [100, 90, 5000, 13000, 17, 16, 18]

// prices.forEach((el, ind, arr) => {
//   if (el > 1000) arr[ind] *= 0.7
// })
// document.write(prices)


//==========================================
// Додати до кожного елементу масиву суфікс "грн.".

// const arr = ['12', '21', '679', '90']

// arr.forEach((el, ind, baseArr) => (baseArr[ind] += 'грн.'))
// document.write(arr)



//===============================================
//----------------forEach & parseInt -----------
//===============================================
// Перетворити заданий масив значень ціни (вказано валюту) в масив числових значень:
// const arr = ['12грн', '21грн', '679грн', '90грн']
// arr.forEach((el, ind, baseArr) => (baseArr[ind] = parseInt(el)))
// document.write(arr)



//===============================================
//----------------forEach & length -----------
//===============================================
// Вивести довжину кожного рядка масиву.
// const fruits = ['apple', 'banana', 'cherry']
// fruits.forEach((el) => document.write(`${el} - ${el.length}<br>`))



//===============================================
//----------------forEach & trim ----------------
//===============================================
// trim - Видаляє пробіли

// Видалити кінцеві пробіли пробіли з кожного рядка масиву.

// const fruits = ['   apple ', 'banana  ', ' cherry']

// fruits.forEach((el, ind, arr) => (arr[ind] = el.trim()))
// document.write(fruits)




//=================================================
//---------------- forOf & forEach ----------------
//=================================================

// Дано масив цін. Вивести їх з індексами окремими div
// let prices = [100, 90, 5, 13, 17, 16, 18]
//------ з використанням звичайного циклу (це найбільш оптимальний, але довгий шлях)
// for (let i = 0; i < prices.length; i++) {
//   document.write(`<div>${i} - ${prices[i]}</div>`)
// }

//------ без використання forEach ----
// function printEl(el, index, arr) {
//   document.write(`<div>${index} - ${el}</div>`)
// }

// for (let i = 0; i < prices.length; i++) {
//   printEl(prices[i], i, prices)
// }

//---- з використанням forEach --------------
// prices.forEach((el, index) =>
//   document.write(`<div>${index} - ${el}</div>`)
// )

// ---------------
//Збільшення кожного елементу масиву на 1:
// for (let i = 0; i < prices.length; i++) {
//   prices[i] += 1
// }
//---------
// prices.forEach((el, ind, arr) => (arr[ind] += 1))
// document.write(prices)
//=================================================









//==============================
//============= map ============
//==============================
// Дано масив цін. Створити новий масив додавши 20% (*1.2).

// let prices = [100, 344, 67, 888, 3, 456]

// const newPrice = prices.map((price) => price * 1.2)
// document.write(newPrice)


//============================
// Дано масив років народження працівників (усі народились 1 січня). Створити масив з кількістю років

// let yearsOfBirth = [2000, 2021, 2004, 2007]

// const agesList = yearsOfBirth.map((year) => 2025 - year)
// document.write(agesList)

// document.write(ages)


//============================
// Дано масив вартості товару у доларах. Створити масив цін у гривнях

// let pricesDol = [100, 344, 67, 888, 3, 456]

// const DOLLAR_RATE = 40
// const grnPricesList = pricesDol.map((priceDol) => priceDol * DOLLAR_RATE)
// document.write(grnPricesList)


//============================
// Дано масив оцінок. Створити новий масив, у якому погані оцінки (менші за 4) замінити на 10

// let scores = [4, 5, 5, 4, 3, 4, 3, 3, 5]

// let newScores = scores.map((score) => (score < 4 ? 10 : score))
// document.write(newScores)


//============================
// Дано масив імен учнів, треба сформувати масив з перших літер

// let names = ['Ivan', 'Petro', 'Olga']
// const firstLettersList = names.map((name) => name[0])
// document.write(firstLettersList)


//============================
// Дано масив цін. Створити новий масив додавши 20%.

// let prices = [100, 90, 5000, 13000, 17, 16, 18]

//----- без map ---
//--- функція для знаходження нового значення -----
// function getNewPriceValue(el, ind, baseArr) {
//   return el * 1.2
// }

// const newPrices = []
// for (let i = 0; i < prices.length; i++) {
//   const newPrice = getNewPriceValue(prices[i], i, prices)
//   newPrices.push(newPrice)
// }

//----- з map ---
// const newPrices = prices.map((el) => el * 1.2)

// document.write(newPrices)


//============================
// //Задача. Масив номерів днів. Сформувати масив з відповідними назвами днів

// //                0         1      2        3       4      5       6
// let daysNames = ['Пон.', 'Вівт.', 'Сер.', 'Четв.', 'Пн.', 'Суб.', 'Нед']

// let daysNumbersList = [3, 2, 1, 5, 4, 7]

// const daysTitles = daysNumbersList.map((dayNum) => daysNames[dayNum - 1])
// document.write(daysTitles)


//============================
//Задача. Масив номерів днів. Сформувати масив з відповідними назвами днів (якщо номер некоректний, то буде "помилка")

// //                0         1      2        3       4      5       6
// let daysNames = ['Пон.', 'Вівт.', 'Сер.', 'Четв.', 'Пн.', 'Суб.', 'Нед']

// let daysNumbersList = [3, 2, 10, 5, 4, 7]

//--- з використаням if
// const daysTitles = daysNumbersList.map((dayNum) => {
//   let res
//   if (dayNum >= 1 && dayNum <= 7) res = daysNames[dayNum - 1]
//   else res = 'помилка'
//   return res
// })
// document.write(daysTitles)

// //--- з використаням тернарного оператора
// const daysTitles = daysNumbersList.map((dayNum) =>
//   dayNum >= 1 && dayNum <= 7 ? daysNames[dayNum - 1] : 'помилка'
// )
// document.write(daysTitles)
//============================




//=======================================
//============= push &  shift ===========
//=======================================
// 1) Реєструвати імена працівників (вводити і зберігати у масиві). Виводити та видаляти їх у порядку надходження.

// const names = []
// const workersNumber = 4

// for (let i = 0; i < workersNumber; i++) {
//   const workerName = prompt('Worker name')
//   names.push(workerName)
// }

// document.write(names)
// document.write('<hr>')

// while (names.length > 0) {
//   const name = names.shift()
//   document.write(`${name}<br>`)
// }


//=======================================
// Реєструвати імена працівників (вводити і зберігати у масиві).
// Виводити та видаляти їх у порядку надходження.

// let users = []
// //--- реєстрація
// const usersNamesNumber = parseInt(
//   prompt('Введіть кількість користувачів')
// )
// for (let i = 0; i < usersNamesNumber; i++) {
//   const userName = prompt('Введіть ім"я користувача')
//   users.push(userName)
// }

//--- видалення
// document.write('<hr>')
// while (users.length > 0) {
//   const name = users.shift()
//   document.write(`${name} <br>`)
// }




//=====================================
//============= push &  pop ===========
//=====================================
// 2) Реєструвати імена працівників (вводити і зберігати у масиві). Виводити та видаляти їх у порядку зворотному до порядку надходження.

// const names = []
// const workersNumber = 4
// for (let i = 0; i < workersNumber; i++) {
//   const workerName = prompt('Worker name')
//   names.push(workerName)
// }
// document.write(names)
// document.write('<hr>')

// while (names.length > 0) {
//   const name = names.pop()
//   document.write(`${name}<br>`)
// }


//=======================================
// Реєструвати імена працівників (вводити і зберігати у масиві).
// Виводити та видаляти їх у порядку зворотному до порядку надходження.

// let users = []
// //--- реєстрація
// const usersNamesNumber = parseInt(
//   prompt('Введіть кількість користувачів')
// )
// for (let i = 0; i < usersNamesNumber; i++) {
//   const userName = prompt('Введіть ім"я користувача')
//   users.push(userName)
// }
// //--- видалення
// document.write('<hr>')
// while (users.length > 0) {
//   const name = users.pop()
//   document.write(`${name} <br>`)
// }




//=======================================
//============= push &  splice ==========
//=======================================
// Задача 1. Дамно масив років. Після кожного значення 2010 додати 2015.

// let yearsList = [2001, 1999, 2010, 2010, 2000, 2010, 1998]

// // const newList = []

//--- 1 ---
// // for (const year of yearsList) {
// //   newList.push(year)

// //   if (year === 2010) newList.push(2015)
// // }
// // document.write(newList)


//--- 2 ---
// for (let i = 0; i < yearsList.length; i++) {
//   if (yearsList[i] === 2010) {
//     yearsList.splice(i + 1, 0, 2015)
//     i++
//   }
// }
// document.write(yearsList)



//================================
//=============  splice ==========
//================================
// Задача 2. Дано масив показів темератур за рік (12 місяців).
// Видалити значення, що відповідають літнім місяцям.

// const typicalTemperatures = [
//   // 0     1    2     3     4     5    6     7     8     9    10    11
//   -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
// ]

// typicalTemperatures.splice(5, 3)
// document.write(typicalTemperatures)


//============================
// Задача 1. Дано масив показів темератур за рік (12 місяців).
// Замінити значення літніх місяців нулями.

// const typicalTemperatures = [
//   // 0     1    2     3     4     5    6     7     8     9    10    11
//   -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
// ]

// typicalTemperatures.splice(5, 3, 0, 0, 0)
// document.write(typicalTemperatures)

//============================
// Задача 4. Дано масив показів темератур за рік (12 місяців).
// Замінити  значення літніх місяців двома значеннями ‘Ok’, та ‘Free’.

// let tempList = [12, 23, 12, 455, 123, 12, 34, 56, 76, 34, 56, 67]

// tempList.splice(5, 3, 'ok', 'free')
// document.write(tempList)

//============================
// Задача 1. Дано масив  показів темератур за рік (12 місяців).
// Створити окремі масиви, що скдаюаться зі з начень, які
// відповідають елементам першого і другого півріччя

// const typicalTemperatures = [
//   // 0     1    2     3     4     5    6     7     8     9    10    11
//   -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
// ]

// const fistQuarter = typicalTemperatures.slice(0, 6)
// const secondQuarter = typicalTemperatures.slice(6)

// document.write(fistQuarter)
// document.write('<hr>')
// document.write(secondQuarter)


//============================
//Задача 1. Дано масив  показів темератур за рік (12 місяців). Створити окремі масиви, що складаються зі значень, які  відповідають елементам першого і другого півріччя

// let tempList = [12, 23, 12, 455, 123, 12, 34, 56, 76, 34, 56, 67]

// const halfYear = Math.floor(tempList.length / 2)

// const firstHalf = tempList.slice(0, halfYear)
// const secondHalf = tempList.slice(halfYear)

// document.write(firstHalf)
// document.write('<hr>')
// document.write(secondHalf)





//================================
//==========  . . . (...) ========
//================================
//  Задача 1. Дано масив  показів темератур за рік (12 місяців). Елементи першого і другого півріччя поміняти місцями

// let typicalTemperatures = [
//   // 0     1    2     3     4     5    6     7     8     9    10    11
//   -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
// ]

// const firstQuarter = typicalTemperatures.slice(0, 6)
// const secondQuarter = typicalTemperatures.slice(6)

// typicalTemperatures = [...secondQuarter, ...firstQuarter]
// document.write(typicalTemperatures)

//=====================================
// Задача 4. Знайти максимальний елемент

// const arr = [34, -28, 45, 7, -2, 39, 66, 25, 7, 53]

// // const max = Math.max(...arr)
// document.write(max)


//================================
// //----- створити новий масив, у якому поміняня місцями перша і друга половина масиву
// let tempList = [12, 23, 12, 455, 123, 12, 34, 56, 76, 34, 56, 67]

// const halfYear = Math.floor(tempList.length / 2)

// const firstHalf = tempList.slice(0, halfYear)
// const secondHalf = tempList.slice(halfYear)

// tempList = [...tempList.slice(halfYear), ...tempList.slice(0, halfYear)]
// //tempList = [...secondHalf, ...firstHalf]
// document.write(tempList)




//============================
//==========  indexOf ========
//============================
// // 3) Дано упорядкований за зростанням масив цін.
// Сформувати новий масив, який складається тільки з різних значень

// let prices = [67, 67, 89, 89, 89, 89, 90, 90, 122, 122, 122, 900]

// let uniquePrices = []
// for (const el of prices) {
//   if (uniquePrices.indexOf(el) === -1) uniquePrices.push(el)
// }
// document.write(uniquePrices)



//====================================
//==========  indexOf & slice ========
//====================================
//Задача 1. Дано масив чисел, що містить нулі.
// Створити масив, що складається з елементів після першого нуля

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//--- 1 ---
// const firstZeroPosition = arr.indexOf(0)
// if (firstZeroPosition === -1) document.write('Немає нулів')
// else {
//   const res = arr.slice(firstZeroPosition + 1)
//   document.write(res)
// }

//--- 2 ---
// function indexOf(arr, serachEl) {
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i]===serachEl)
//     return i
//   }
//   return -1
// }


//============================
// Задача 1.
// Дано масив чисел, що містить нулі (більше 4-х).
// Створити масив, що складається з елементів між першим і другим нулем

// const arr = [1, 2, 0, 3, 4, 5, 0, 6, 7, 0, 8, 0, 9]

// const firstZeroPosition = arr.indexOf(0)
// const secondZeroPodition = arr.indexOf(0, firstZeroPosition + 1)

// const resArr = arr.slice(firstZeroPosition + 1, secondZeroPodition)
// document.write(resArr)




//=========================================
//==========  lastIndexOf & slice =========
//=========================================
// Задача 1. Дано масив чисел, що містить нулі.
// Створити масив, що складається з елементів між першим і останнім нулем

// const arr = [1, 2, 0, 3, 4, 5, 0, 6, 7, 0, 8, 0, 9]

// const firstZeroPosition = arr.indexOf(0)
// const lastZeroPosition = arr.lastIndexOf(0)

// const resArr = arr.slice(firstZeroPosition + 1, lastZeroPosition)
// document.write(resArr)

//==================================
// Знайти суму цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7 (у числі є всього дві цифри 7, наприклад: 2679328712)

// const arr = [2, 6, 7, 9, 3, 2, 8, 7, 1, 2]

// const first7index = arr.indexOf(7)
// const last7index = arr.lastIndexOf(7)

// let s = 0
// for (let i = first7index + 1; i < last7index; i++) {
//   s += arr[i]
// }
// document.write(s)




//===============================
//==========  findIndex =========
//===============================
// Задача 4. Дано масив з віком відвідувачів.
// Визначити індекс першого пенсіонера

// const ages = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]

// const firstPensionerAge = ages.findIndex((age) => age > 65)
// document.write(firstPensionerAge)



//===================================
//==========  findLastIndex =========
//===================================
// Задача 5.
// Дано масив з віком відвідувачів. Визначити індекс останнього пенсіонера

// const ages = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]

// const firstPensionerAge = ages.findLastIndex((age) => age > 65)
// document.write(firstPensionerAge)




//===================================
//==============  find ==============
//===================================
//Задача 1. Дано масив оцінок двійочника. Визначити першу погану оцінку.

// let badStudentScores = [5, 4, 2, 4, 2, 5, 3, 2, 4, 3]

// const fistBadScore = badStudentScores.find((score) => score < 4)
// document.write(fistBadScore)



//=======================================
//==============  findLast ==============
//=======================================
// Задача 2. Дано масив років відвідувачів басейну. Визначити вік останнього пенсіонера (вік більше або рівне за 65)

// const ages = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]
//============================
// const lastPensionerAge = ages.findLast((age) => age > 65)
// document.write(lastPensionerAge)





//=====================================
//==============  reduce ==============
//=====================================
// Задача 0. Знайти суму/добуток елементів масиву

// const arr = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]

// const sum = arr.reduce((prevSum, num) => prevSum + num)
// const product = arr.reduce((prevProd, num) => prevProd * num)


//=====================================
//  Задача 1. Знайти добуток/суму від’ємних елементів масиву.

// const arr = [34, -28, 45, 67, -2, 39, 66, 25, 70, 53]

// const product = arr.reduce(
//   (prevProd, num) => (num < 0 ? prevProd * num : prevProd),
//   1
// )

// const sum = arr.reduce(
//   (prevSum, num) => (num < 0 ? prevSum + num : prevSum),
//   0
// )
// document.write(product)
// document.write(sum)


//=====================================
//  Задача 2. Знайти суму парних елементів

// const arr = [34, -28, 45, 67, -2, 39, 66, 25, 70, 53]

// const sum = arr.reduce(
//   (prevSum, num) => (num %2 === 0 ? prevSum + num : prevSum),
//   0
// )
// document.write(sum)


//=====================================
// Задача 3. Дано масив. Підрахувати кількість 7

// const arr = [34, -28, 45, 7, -2, 39, 66, 25, 7, 53]

// const count7 = arr.reduce(
//   (prevCount7, num) => (num === 7 ? prevCount7 + 1 : prevCount7),
//   0
// )
// document.write(count7)


//=====================================
// Задача 4. Знайти максимальний елемент

// const arr = [34, -28, 45, 7, -2, 39, 66, 25, 7, 53]

// --- 1 ---
// // const max = arr.reduce((prevMax, num) => (num > prevMax ? num : prevMax))
// --- 2 ---
// // const max = Math.max(...arr)
// document.write(max)


//=====================================
// Задача 5. Знайти максимальний серед від"ємних елемент

// const arr = [34, -28, 45, 7, -2, 39, 66, 25, 7, 53]
// const max = arr.reduce(
//   (prevMax, num) => (num < 0 && num > prevMax ? num : prevMax),
//   -Infinity
// )
// document.write(max)


//=====================================
// Задача 6. Дано масив  показів темератур за рік (12 місяців).
// Підрахувати кількість додатних значень.

// const arr = [34, -28, 45, 7, -2, 39, 66, 25, 7, 53]

// const positiveCount = arr.reduce(
//   (prevCount, num) => (num > 0 ? prevCount + 1 : prevCount),
//   0
// )
// document.write(positiveCount)


//=====================================
// Задача 7. Дано масив оцінок двійочника. Підрахувати кількість поганих оцінок.
// let scores = [8, 9, 2, 4, 7, 1, 10, 8, 9, 2]

// let badScoresNumber = 0
// for (const score of scores) {
//   badScoresNumber = score<4 ? badScoresNumber+1 : badScoresNumber
// }
//--------------------
// function checkScore(prevBadNum, score) {
//   if(score<4) return prevBadNum+1
//   else return prevBadNum
// }

// let prevBadNum = 0
// for (let i = 0; i <scores.length; i++) {
//   prevBadNum = checkScore(prevBadNum, scores[i])
// }
//--------------
// const badScoresNumber = scores.reduce(
//   (prevBadNum, score) => (score < 4 ? prevBadNum + 1 : prevBadNum),
//   0
// )

//=====================================
// Задача 7. Дано масив чисел. Підрахувати кількість чисел, які менші за свій індекс
// let scores = [8, 9, 2, 4, 7, 1, 10, 8, 9, 2]
// const num = scores.reduce(
//   (prevNum, el, ind)=> el<ind? prevNum+1 :prevNum,
//   0
// )






//=====================================
//==============  filter ==============
//=====================================
//  Дано покази термометра за місяць.
// Сформувати покази тільки доданих значень

// const arr = [34, -28, 45, 7, -2, 39, 66, 25, 7, 53]

// const positiveNumbers = arr.filter((num) => num > 0)
// document.write(positiveNumbers)


//=====================================
// Дано покази термометра за місяць.
// Сформувати покази тільки значень, які знаходяться між 10 і 15 градусами цельсія

// const arr = [34, -28, 45, 7, -2, 39, 13, 25, 7, 12]

// const res = arr.filter((num) => num >= 10 && num <= 15)
// document.write(res)


//=====================================
// Дано масив цін.
// Сформувати новий масив, який складається з цін більших за 100 грн.

// const prices = [134, 28, 45, 7, 10002, 390, 66, 25, 7, 53]

// const pricesGreater100 = prices.filter((price) => price > 100)
// document.write(pricesGreater100)





//===============================================
//===  filter 7 indexOf / filter && includes ====
//===============================================
// Дано масив імен учнів.
// Сформувати масив, які починаються на букви: 'A', 'B', 'J', 'S'

// let studentNames = [
//   'Anna',
//   'Boris',
//   'John',
//   'Sofia',
//   'Ivan',
//   'Petro',
//   'Alex',
//   'Serhii',
//   'Julia',
//   'Oleh',
// ]
// const lettersList = ['A', 'B', 'J', 'S']
//--- 1 ---
// // const newNamesList = studentNames.filter(
// //   (name) => lettersList.indexOf(name[0]) !== -1
// // )
//--- 2 ---
// const newNamesList = studentNames.filter((name) =>
//   lettersList.includes(name[0])
// )
// document.write(newNamesList)


//===============================================
// Задача 3. Дано масив з номерами кімнат, які звернулись на рецепцію. Визначити, чи зверталися з кімнати номер 5.
// let rooms = [12, 15, 7, 23, 5, 21, 35, 8, 19]
// //-- 1
// // if (rooms.indexOf(5) === -1) alert('No')
// // else alert('yes')
// //--- 2
// // if (!rooms.find((el) => el === 5)) alert('No')
// // else alert('yes')
// //--- 3
// if (rooms.includes(5)) alert('yes')
// else alert('No')



//===================================
//==============  some ==============
//===================================
// Задача 1. Дано масив показників термометра протягом місяця.
// З’ясувати, чи є серед них дні, коли температура була меншою за 5 градусів.

// const temperatures = [13, 28, 45, -7, 10, 390, 66, 25, 7, -5]

// if (temperatures.some((temp) => temp < 5)) document.write('Yes')
// else document.write('No')


//===================================
// Задача 2.
// Визначити, чи є серед вказаних цін товарів ті, які дорожчі за 1000 грн.

// const prices = [134, 28, 45, 7, 10002, 390, 66, 25, 7, 53]

// if (prices.some((price) => price > 1000)) document.write('Yes')
// else document.write('No')


//===================================
// Задача 3. Дано масив оцінок двійочника.
// Визначити чи є він двійочником ( є хоча б одна погана оцінка 2)

// let studentScores = [2, 3, 2, 4, 2, 5, 3, 2, 4, 3]

// if (studentScores.some((score) => score === 2)) document.write('Yes')
// else document.write('No')


//===================================
// Задача 4.
// Дано масив років відвідувачів басейну. Визначити чи були пенсіонери.

// const ages = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]

// if (ages.some((age) => age > 65)) document.write('Yes')
// else document.write('No')





//===================================
//==============  every =============
//===================================
// Задача 3. Дано масив оцінок двійочника.
// Визначити чи є він хорошистом (усі оцінки більші або рівні 4)

// let studentScores = [2, 3, 2, 4, 2, 5, 3, 2, 4, 3]

// if (studentScores.every((score) => score >= 4)) document.write('Yes')
// else document.write('No')





//===================================
//==============  sort ==============
//===================================
// const arr = [34, -28, 45, 7, -2, 39, 13, 25, 7, 12]
//Приклад. Упорядквати масив чисел за зростанням
//-- 1 ---
// arr.sort((a, b) => a - b)
//--- 2 ---
// arr.sort((num1, num2) => {
//   if (num1 > num2) return 1
//   else if (num1 < num2) return -1
//   else return 0
// })

//============================
// const arr = [34, -28, 45, 7, -2, 39, 13, 25, 7, 12]
//Приклад. Упорядквати масив чисел за спаданням
//-- 1 ---
// arr.sort((a, b) => b - a)
//-- 2 ---
// // arr.sort((num1, num2) => {
// //   if (num1 > num2) return -1
// //   else if (num1 < num2) return 1
// //   else return 0
// // })


//============= charCodeAt() ========

//===================================
// Приклад. Упорядкувати масив імен за зростанням
// let names = ['Nona', 'John', 'Sara', 'Peter', 'Monica', 'Andrew', 'Niko']
// names.sort()
// document.write(names)


//===================================
// Приклад. Упорядкувати масив імен за спаданням
// let names = ['Nona', 'John', 'Sara', 'Peter', 'Monica', 'Andrew', 'Niko']
//--- спочатку соруємо за зростанням, потім розвертаємо масив
// names.sort() //сортуємо за зростанянм
// names.reverse() //розвертаємо масив

//===================================
//Приклад. Упорядкувати масив імен за зростанням за другою буквою

// let studentNames = [
//   'Anna',
//   'Boris',
//   'John',
//   'Sofia',
//   'Ivan',
//   'Petro',
//   'Alex',
//   'Serhii',
//   'Julia',
//   'Oleh',
// ]
//--- 1 ---
// studentNames.sort((name1, name2) => {
//   if (name1[1] > name2[1]) return 1
//   else if (name1[1] < name2[1]) return -1
//   return 0
// })

//--- 2 ---
// charCodeAt(0) - дає нам номер символа в системі Н.: "А"=№66

// studentNames.sort(
//   (name1, name2) => name1[1].charCodeAt(0) - name2[1].charCodeAt(0)
// )
// document.write(studentNames)


//===================================
// Приклад.
// Упорядувати числа так, щоб спочатку йшли парні, потім непарні.

// const arr = [34, 28, 45, 7, 2, 39, 13, 25, 7, 12]

// arr.sort((num1, num2) => {
//   if (num1 % 2 !== 0 && num2 % 2 === 0) return 1
//   else if (num1 % 2 === 0 && num2 % 2 !== 0) return -1
//   return 0
// })


//===================================
// Приклад. Упорядувати числа так, щоб спочатку йшли парні, потім непарні (парні і непарні за зростанянм).
// let arr = [10, 9, 5, 13, 17, 16, 18, 19, 21, 11, 7, 4]
// arr.sort((n1, n2) => {
//   let compareResult
//   if (n1 % 2 !== 0 && n2 % 2 === 0) compareResult = 1
//   if (n1 % 2 === 0 && n2 % 2 !== 0) compareResult = -1
//   else compareResult = n1 - n2
//   return compareResult
// })
// document.write(arr)


//===================================
//Приклад. Упорядкувати за спаданням довжини імен
// let studentNames = [
//   'Anna',
//   'Boris',
//   'John',
//   'Sofia',
//   'Ivan',
//   'Petro',
//   'Alex',
//   'Serhii',
//   'Julia',
//   'Oleh',
// ]
// studentNames.sort((name1, name2) => name1.length - name2.length)
// document.write(studentNames)


//===================================
//Приклад. Дано вік відпвідувачів.
// Упорядкувати відвідувачів так, щоб спочатку йшли пенсіонери, потім всі інші.

// const ages = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]

// ages.sort((age1, age2) => {
//   if (age1 < 65 && age2 >= 65) return 1
//   else if (age1 >= 65 && age2 < 65) return -1
//   else return 0
// })
// document.write(ages)



























//============================
//Задача. За номером дня вивести назву дня
// //                  0         1      2        3       4      5       6
// let daysNames = ['Пон.', 'Вівт.', 'Сер.', 'Четв.', 'Пн.', 'Суб.', 'Нед']

// const dayNum = parseInt(prompt('Введіть номер дня (1-7)'))

// const dayTitle = daysNames[dayNum - 1]
// document.write(dayTitle)


//============================
//Задача. Масив номерів днів.
// Вивести для кожного номера дня  відповідну назву дня

// //                0         1      2        3       4      5       6
// let daysNames = ['Пон.', 'Вівт.', 'Сер.', 'Четв.', 'Пн.', 'Суб.', 'Нед']

// let daysNumbersList = [3, 2, 1, 5, 4, 7]

// daysNumbersList.forEach((dayNum) =>
//   document.write(`${daysNames[dayNum - 1]}<br>`)
// )

//===================================
//===================================
//===================================