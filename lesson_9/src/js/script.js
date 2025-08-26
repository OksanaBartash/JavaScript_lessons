//================================================================
// Задачі роз"язані на УРОЦІ
//================================================================
//============================
//============================
//============================
//============================

// Приклад. Описати порожній масив products
// const products = []

// Приклад. Описати масив, що містить перелік посад, що є у компанії
// const positions = ['director', 'manager', 'programmer']



//===============================
// =========== for Of ===========
//===============================
//Дано послідовність років працівників. Вивести список додавши "пенесіонер/не пенсіонер"

// const ages = [21, 34, 58, 88, 71, 41]

// for (const age of ages) {
//   const msg = `${age} - ${age > 65 ? 'пенесіонер' : 'не пенсіонер'}`
//   document.write(`${msg}<br>`)
// }


//============================
// Приклад. Масив цін товарів. Знайти суму цін, які більші за 100.

// let prices = [12, 344, 67, 888, 3, 456]
// let sum = 0
// prices.forEach((price) => {
//   if (price > 100) sum += 100
// })

// document.write(`sum : ${sum}`)




//================================
// =========== forEach ===========
//================================
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


//============================
// Приклад. Дано масив показників температур. Від"ємні замінити на 0

// const typicalTemperatures = [
//   -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
// ]

// --- 1 ---
// // for (let i = 0; i < typicalTemperatures.length; i++) {
// //   if (typicalTemperatures[i] < 0) typicalTemperatures[i] = 0
// // }
// // document.write(typicalTemperatures)

// --- 2 ---
// typicalTemperatures.forEach((copyEl, ind, baseArr) => {
//   if (copyEl < 0) baseArr[ind] = 0
// })


//============================
// Приклад. Дано масив показників температур. Вивести від"ємні значення


// const typicalTemperatures = [
//   -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
// ]
// for (const element of typicalTemperatures) {
//   if (element < 0) {
//     document.write(` ${element} <br>`)
//   }
// }
// typicalTemperatures.forEach((el) => document.write(` ${el} <br>`))

//===============================





//============================
// =========== map ===========
//============================
// Створити новий масив, у якому погані оцінки (менші за 4) замінити на 10

// let scores = [4, 5, 5, 4, 3, 4, 3, 3, 5]
// let newScores = scores.map((score) => (score < 4 ? 10 : score))
// document.write(newScores)


//============================
// Дано масив імен учнів, треба сформувати масив з перших літер
// let names = ['Ivan', 'Petro', 'Olga']
// const firstLettersList = names.map((name) => name[0])
// document.write(firstLettersList)


//============================
// Дано масив вартості товару у доларах. Створити масив цін у гривнях

// let pricesDol = [100, 344, 67, 888, 3, 456]
// const DOLLAR_RATE = 40
// const grnPricesList = pricesDol.map((priceDol) => priceDol * DOLLAR_RATE)
// document.write(grnPricesList)

//============================
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





//================================
// ======= shift & pop ===========
//================================
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


//================================
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




//============================
// ======= splice ===========
//============================
// Задача 1. Дано масив років. Після кожного значення 2010 додати 2015.

// let yearsList = [2001, 1999, 2010, 2010, 2000, 2010, 1998]

// --- 1 ---
// // const newList = []
// // for (const year of yearsList) {
// //   newList.push(year)

// //   if (year === 2010) newList.push(2015)
// // }
// // document.write(newList)

// --- 2 ---
// for (let i = 0; i < yearsList.length; i++) {
//   if (yearsList[i] === 2010) {
//     yearsList.splice(i + 1, 0, 2015)
//     i++
//   }
// }
// document.write(yearsList)



//============================
// Задача 2. Дано масив показів темератур за рік (12 місяців). Видалити значення, що відповідають літнім місяцям.
// const typicalTemperatures = [
//   // 0     1    2     3     4     5    6     7     8     9    10    11
//   -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
// ]
// typicalTemperatures.splice(5, 3)
// document.write(typicalTemperatures)



//============================
// Задача 1. Дано масив показів темератур за рік (12 місяців). Замінити значення літніх місяців нулями.
// const typicalTemperatures = [
//   // 0     1    2     3     4     5    6     7     8     9    10    11
//   -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
// ]

// typicalTemperatures.splice(5, 3, 0, 0, 0)
// document.write(typicalTemperatures)


//============================
//  Задача 1. Дано масив  показів темератур за рік (12 місяців). 
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
// Задача 1. Дано масив  показів темератур за рік (12 місяців). 
// Елементи першого і другого півріччя поміняти місцями

// let typicalTemperatures = [
//   // 0     1    2     3     4     5    6     7     8     9    10    11
//   -8.5, -9.2, 10.1, 11.3, 15.0, 18.6, 20.7, 20.2, 16.5, 11.9, -6.9, -3.9,
// ]

// const firstQuarter = typicalTemperatures.slice(0, 6)
// const secondQuarter = typicalTemperatures.slice(6)

// typicalTemperatures = [...secondQuarter, ...firstQuarter]

// document.write(typicalTemperatures)





//============================
// ======= indexOf ===========
//============================
//Задача 1. Дано масив чисел, що містить нулі. 
// Створити масив, що складається з елементів після першого нуля

// const arr = [1, 2, 3, 4, 5, 0, 6, 7, 8, 0, 9]  

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
// Задача 1. Дано масив чисел, що містить нулі (більше 4-х). 
// Створити масив, що складається з елементів між першим і другим нулем

// const arr = [1, 2, 0, 3, 4, 5, 0, 6, 7, 0, 8, 0, 9]

// const firstZeroPosition = arr.indexOf(0)
// const secondZeroPodition = arr.indexOf(0, firstZeroPosition + 1)

// const resArr = arr.slice(firstZeroPosition + 1, secondZeroPodition)
// document.write(resArr)


//============================
// Задача 1. Дано масив чисел, що містить нулі. 
// Створити масив, що складається з елементів між першим і останнім нулем

// const arr = [1, 2, 0, 3, 4, 5, 0, 6, 7, 0, 8, 0, 9]

// const firstZeroPosition = arr.indexOf(0)
// const lastZeroPosition = arr.lastIndexOf(0)

// const resArr = arr.slice(firstZeroPosition + 1, lastZeroPosition)
// document.write(resArr)






//==============================
// ======= findIndex ===========
//==============================
// Задача 4. Дано масив з віком відвідувачів. 
// Визначити індекс першого пенсіонера

// const ages = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]

// const firstPensionerAge = ages.findIndex((age) => age > 65)

// document.write(firstPensionerAge)



//==================================
// ======= findLastIndex ===========
//==================================
// Задача 5. Дано масив з віком відвідувачів.
// Визначити індекс останнього пенсіонера

// const ages = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]

// const lastPensionerAge = ages.findLastIndex((age) => age > 65)

// document.write(lastPensionerAge)





//============================
// =========== find ==========
//============================
//Задача 1. Дано масив оцінок двійочника. 
// Визначити першу погану оцінку.

// let badStudentScores = [5, 4, 2, 4, 2, 5, 3, 2, 4, 3]

// const fistBadScore = badStudentScores.find((score) => score < 4)
// document.write(fistBadScore)


//===============================
// =========== findLast =========
//===============================
// Задача 2. Дано масив років відвідувачів басейну. 
// Визначити вік останнього пенсіонера (вік більше або рівне за 65)

// const ages = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]

// const lastPensionerAge = ages.findLast((age) => age > 65)

// document.write(lastPensionerAge)






//============================
// =========== reduce ========
//============================
// Задача 0. Знайти суму/добуток елементів масиву

// const arr = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]

// const sum = arr.reduce((prevSum, num) => prevSum + num)
// const product = arr.reduce((prevProd, num) => prevProd * num)



//============================
// Задача 1. Знайти добуток/суму від’ємних елементів масиву.

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


//============================
// Задача 2. Знайти суму парних елементів

// const arr = [34, -28, 45, 67, -2, 39, 66, 25, 70, 53]

// const sum = arr.reduce(
//   (prevSum, num) => (num %2 === 0 ? prevSum + num : prevSum),
//   0
// )
// document.write(sum)


//============================
// Задача 3. Дано масив. Підрахувати кількість 7

// const arr = [34, -28, 45, 7, -2, 39, 66, 25, 7, 53]

// const count7 = arr.reduce(
//   (prevCount7, num) => (num === 7 ? prevCount7 + 1 : prevCount7),
//   0
// )
// document.write(count7)


//============================
// Задача 4. Знайти максимальний елемент

// const arr = [34, -28, 45, 7, -2, 39, 66, 25, 7, 53]

// ---1---
// // const max = arr.reduce((prevMax, num) => (num > prevMax ? num : prevMax))

// ---2---
// // const max = Math.max(...arr)
// document.write(max)


//============================
// Задача 5. Знайти максимальний серед від"ємних елемент

// const arr = [34, -28, 45, 7, -2, 39, 66, 25, 7, 53]

// const max = arr.reduce(

//   (prevMax, num) => (num < 0 && num > prevMax ? num : prevMax),
//   -Infinity
// )
// // const max = Math.max(...arr)
// document.write(max)


//============================
// Задача 6. Дано масив  показів темератур за рік (12 місяців). 
// Підрахувати кількість додатних значень.

// const arr = [34, -28, 45, 7, -2, 39, 66, 25, 7, 53]

// const positiveCount = arr.reduce(
//   (prevCount, num) => (num > 0 ? prevCount + 1 : prevCount),
//   0
// )
// document.write(positiveCount)








//============================
// =========== filter ========
//============================
//   Дано покази термометра за місяць. 
// Сформувати покази тільки доданих значень

// const arr = [34, -28, 45, 7, -2, 39, 66, 25, 7, 53]

// const positiveNumbers = arr.filter((num) => num > 0)
// document.write(positiveNumbers)




//============================
// Дано покази термометра за місяць. 
// Сформувати покази тільки значень, які знаходяться між 10 і 15 градусами цельсія

// const arr = [34, -28, 45, 7, -2, 39, 13, 25, 7, 12]

// const res = arr.filter((num) => num >= 10 && num <= 15)
// document.write(res)


//============================
// Дано масив цін. 
// Сформувати новий масив, який складається з цін більших за 100 грн.

// const prices = [134, 28, 45, 7, 10002, 390, 66, 25, 7, 53]

// const pricesGreater100 = prices.filter((price) => price > 100)
// document.write(pricesGreater100)






//==============================
// =========== includes ========
//==============================
// Дано масив імен учнів. 
// Сформувати масив, які починаються на букви : 'A', 'B', 'J', 'S'

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

//---1---
// // const newNamesList = studentNames.filter(
// //   (name) => lettersList.indexOf(name[0]) !== -1
// // )

//---2---
// const newNamesList = studentNames.filter((name) =>
//   lettersList.includes(name[0])
// )
// document.write(newNamesList)






//==============================
// ============ some ===========
//==============================
// Задача 1. 
// Дано масив показників термометра протягом місяця. 
// З’ясувати, чи є серед них дні, коли температура була меншою за 5 градусів.

// const temperatures = [13, 28, 45, -7, 10, 390, 66, 25, 7, -5]

// if (temperatures.some((temp) => temp < 5)) document.write('Yes')
// else document.write('No')


//==============================
// Задача 2. 
// Визначити, чи є серед вказаних цін товарів ті, які дорожчі за 1000 грн.

// const prices = [134, 28, 45, 7, 10002, 390, 66, 25, 7, 53]

// if (prices.some((price) => price > 1000)) document.write('Yes')
// else document.write('No')



//==============================
// Задача 3. 
// Дано масив оцінок двійочника
// let studentScores = [2, 3, 2, 4, 2, 5, 3, 2, 4, 3]

//Визначити чи є він двійочником ( є хоча б одна погана оцінка 2)

// if (studentScores.some((score) => score === 2)) document.write('Yes')
// else document.write('No')


//==============================
// Задача 4. Дано масив років відвідувачів басейну. Визначити чи були пенсіонери.
// const ages = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]

// if (ages.some((age) => age > 65)) document.write('Yes')
// else document.write('No')




//==============================
// ============ every ==========
//==============================
// Задача 3. 
// Дано масив оцінок двійочника
// let studentScores = [2, 3, 2, 4, 2, 5, 3, 2, 4, 3]

// 1)Визначити чи є він хорошистом (усі оцінки більші або рівні 4)
// if (studentScores.every((score) => score >= 4)) document.write('Yes')
// else document.write('No')






//==============================
// ============ sort ===========
//==============================
// Приклад. Упорядквати масив чисел за зростанням
// const arr = [34, -28, 45, 7, -2, 39, 13, 25, 7, 12]

// arr.sort((a, b) => a - b)


//==============================
// Приклад. Упорядквати масив чисел за спаданням
// const arr = [34, -28, 45, 7, -2, 39, 13, 25, 7, 12]

// arr.sort((a, b) => b - a)


//==============================
//  Приклад. Упорядкувати масив імен за зростанням за другою буквою
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
//---1---
// studentNames.sort((name1, name2) => {
//   if (name1[1] > name2[1]) return 1
//   else if (name1[1] < name2[1]) return -1
//   return 0
// })

//---2---
// studentNames.sort(
//   (name1, name2) => name1[1].charCodeAt(0) - name2[1].charCodeAt(0)
// )
// document.write(studentNames)


//==============================
//  Приклад. 
// Упорядувати числа так, щоб спочатку йшли парні, потім непарні.

// const arr = [34, 28, 45, 7, 2, 39, 13, 25, 7, 12]

// arr.sort((num1, num2) => {
//   if (num1 % 2 !== 0 && num2 % 2 === 0) return 1
//   else if (num1 % 2 === 0 && num2 % 2 !== 0) return -1
//   return 0
// })


//==============================
// Приклад. Упорядкувати за спаданням довжини імен
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


//==============================
// Приклад. Дано вік відвідувачів. 
// Упорядкувати відвідувачів так, щоб спочатку йшли пенсіонери, потім всі інші.

// const ages = [34, 28, 45, 67, 72, 39, 66, 25, 70, 53]

// ages.sort((age1, age2) => {
//   if (age1 < 65 && age2 >= 65) return 1
//   else if (age1 >= 65 && age2 < 65) return -1
//   else return 0
// })
// document.write(ages)

// document.write(arr)
//============================
//============================
//============================







//============================================
// Задача 7. Створити функцію, яка випадковим чином виводить на екран одне із 4 зображень (шляхи до зображень передаються у функцію)

// //---------------- 1) РОЗВ"ЯЗОК БЕЗ МАСИІВ ---------------
// function getRandomImagePath(imgPath1, imgPath2, imgPath3, imgPath4) {

// }

// let imgPath = getRandomImagePath(
//   'https://media.istockphoto.com/id/1124532572/vector/big-smile-emoticon-with-thumbs-up.jpg?s=612x612&w=0&k=20&c=9DJwHpzMgBAkAYFAPVIvkjNKNN8tHZPlVFy5-d1uLjc=',
//   'https://st2.depositphotos.com/1001911/7684/v/600/depositphotos_76840867-stock-illustration-pointing-at-himself-emoticon.jpg',
//   'https://www.creativefabrica.com/wp-content/uploads/2021/07/30/Emoticon-Smile-Emoji-Icon-14-Graphics-15275601-1.jpeg',
//   'https://www.creativefabrica.com/wp-content/uploads/2021/07/30/Emoticon-Smile-Emoji-Icon-14-Graphics-15275601-1.jpeg'
// )

// document.write(`<img src="${imgPath}" width="100"/>`)


//---------------- 2) РОЗВ"ЯЗОК З МАСИВАМИ ---------------
// function getRandomImagePath(imgPathList) {
// }

// let imgList = [
//   'https://media.istockphoto.com/id/1124532572/vector/big-smile-emoticon-with-thumbs-up.jpg?s=612x612&w=0&k=20&c=9DJwHpzMgBAkAYFAPVIvkjNKNN8tHZPlVFy5-d1uLjc=',
//   'https://st2.depositphotos.com/1001911/7684/v/600/depositphotos_76840867-stock-illustration-pointing-at-himself-emoticon.jpg',
//   'https://www.creativefabrica.com/wp-content/uploads/2021/07/30/Emoticon-Smile-Emoji-Icon-14-Graphics-15275601-1.jpeg',
//   'https://www.creativefabrica.com/wp-content/uploads/2021/07/30/Emoticon-Smile-Emoji-Icon-14-Graphics-15275601-1.jpeg',
// ]
// let imgPath = getRandomImagePath(imgList)

// document.write(`<img src="${imgPath}" width="100"/>`)

// -----------------------
