//================================================================
// Задачі роз"язані на УРОЦІ
//================================================================
   
      // 5. Задача. Вивести привітання декількома мовами (мова задається (ua,en,fr), а виводиться привітання на потрібній мові (‘привіт’, ‘hello’))
      // function sayHello(langId) {
      //   let res
      //   switch (langId) {
      //     case 'en':
      //       res = 'Hello!'
      //       break
      //     case 'ua':
      //       res = 'Привіт!'
      //       break
      //     case 'fr':
      //       res = 'Bonjour!'
      //     default:
      //       throw new Error('Невідома мова')
      //   }
      //   return res
      // }
      // //---
      // document.write(sayHello('aaasddd'))
      // document.write('11111')


      // 8. Задача. Знайти добуток  3-х чисел
      // function getProduct(num1, num2, num3) {
      //   return num1 * num2 * num3
      // }
      // //-------------
      // const number1 = parseInt(prompt(`num1 = `, ''))
      // const number2 = parseInt(prompt(`num2 = `, ''))
      // const number3 = parseInt(prompt(`num3 = `, ''))
      // //---
      // const prod1 = getProduct(number1, number2, number3)
      // document.write(`prod : ${prod1}`)


      // 2. Потрібно 3 рази крутити барабан з виграшами від -100 до 500. Потрібно знайти загальний виграш за 2 спроби

      // function getRandomScore(minScore, maxScore) {
      //   return minScore + Math.floor(Math.random() * (maxScore - minScore + 1))
      // }

      // // const totalScore = getRandomScore(-100, 500) + getRandomScore(-100, 500)
      // // document.write(`${totalScore}`)

      // document.write(`Res : ${getRandomScore(-100, 500)}`)

      

      // 12. Знайти максимальне серед 2-х чисел
      // function getMax(num1, num2) {
      //   if (num1 > num2) return num1
      //   return num2
      // }

      // const n1 = parseInt(prompt(`num1`, ''))
      // const n2 = parseInt(prompt(`num2`, ''))

      // document.write(`Max =  ${getMax(n1, n2)}`)



      // 13. Задача. Знайти вартість оренди авто за заданою вартістю на місяць і кількістю місяців
      // function getTotalRent(rentPerMonth, monthNumber) {
      //   return rentPerMonth * monthNumber
      // }
      // //-------
      // document.write(
      //   `total for 3 month and rent 5000 : ${getTotalRent(5000, 3)}`
      // )


      // 14. Задача. Знайти прибуток банку при купівлі та реалізації вказаної суми доларів.
      // function getBankProfit(amountDollars, rate) {
      //   return amountDollars*rate
      // }


      // 15. Задача. Знайти вартість путівки на вказану кількість днів (вказано вартість проживання, харчування, комплекса процедур)
      // function getTotalPrice(daysNumber, livingPrice, foodPrice, procPrice) {
      //   return daysNumber * (livingPrice + foodPrice + procPrice)
      // }

      // document.write(getTotalPrice(7, 5000, 2300, 4000))


      // 16. Задача. Задано ширину елемента у відсотках та ширину контейнера у пікселях. Визначити ширину елемента у пікселях.
      // function getWidthInPixels(containerWidth, elementWidthPercentage) {
      //   return Math.floor((containerWidth * elementWidthPercentage) / 100)
      // }

      // document.write(`Width : ${getWidthInPixels(500, 50)}`)



      // Розробити функцію, яка може виконувати якісь дії передані через параметри

      // function show1() {
      //   console.log(1111)
      // }

      // function show2() {
      //   console.log(2222)
      // }

      // //---
      // function mainShow(operationShow) {
      //   operationShow()
      // }

      // mainShow(show2)



      //-------------------------
      //Функція обчислює суму 2 чисесел. А куди виводити у консоль чи на сторінку визначає користувач

      // function doSumCalculation(num1, num2, displayResultFunction) {
      //   const sum = num1 + num2
      //   displayResultFunction(`Sum = ${sum}`)
      // }
      // //-----
      // const n1 = parseInt(prompt(`n1 = `, ''))
      // const n2 = parseInt(prompt(`n2 = `, ''))
      // const userAnswer = prompt('1)log;\n2)write\nYour choice:')

      // let userDispFunc
      // switch (userAnswer) {
      //   case '1':
      //     userDispFunc = console.log
      //     break
      //   case '2':
      //     userDispFunc = (res) => document.write(res)
      //     break
      // }

      // doSumCalculation(n1, n2, userDispFunc)
      // -----------------------
      // const sum = function (n1,n2) {
      //   return n1+n2
      // }

      // const sum = (n1,n2) => n1+n2

      // const average = (n1, n2) => {
      //   const s = n1 + n2
      //   console.log(s)
      //   return s / 2
      // }



      // 18. Задача. Задано покази таймера відліку. Знайти колір, який треба застосувати для його виведення (100-80 – зелений, 79-30 – жовтий, 29-0 – червоний).
      // function getColor(value) {
      //   let color
      //   if (value <= 29) color = 'red'
      //   else if (value <= 79) color = 'yellow'
      //   else color = 'green'
      //   return color
      // }

      // function displayTimerValue(value) {
      //   const color = getColor(value)

      //   document.write(`<div style = "color:${color};">${value}</div>`)
      // }
      // // ------
      // displayTimerValue(45)
      // displayTimerValue(15)
      // displayTimerValue(85)



      // 20. Знайти суму 3-ох чисел.
      // =================
      // function getRes(a, b = 9, c = 100) {
      //   return a + b + c
      // }

      // const sum = getRes(10, 2, 1)

      // document.write(`sum : ${sum}`)

//============================================================
      