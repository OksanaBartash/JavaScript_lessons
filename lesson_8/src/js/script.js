//================================================================
// Задачі роз"язані на УРОЦІ
//================================================================
   

//=================== ФУНКЦІЇ ===========================
      
      //==============================================
      //Задача. Створити функцію, яка дозволяє визначити за числовим значення значення оцінки (1-12) прописом
      // function getScoreTitle(score) {
      //   let scoreTitle
      //   switch (score) {
      //     case 12:
      //     case 11:
      //     case 10:
      //       scoreTitle = 'Відмінно'
      //       break
      //     case 9:
      //     case 8:
      //     case 7:
      //       scoreTitle = 'Добре'
      //       break
      //     case 6:
      //     case 5:
      //     case 4:
      //       scoreTitle = 'Задовільно'
      //       break
      //     default:
      //       scoreTitle = 'Незадовільно'
      //       break
      //   }
      //   return scoreTitle
      // }
      // //---
      // document.write(getScoreTitle(7))


      //==============================================
      //Задача. Поступово генеруються R номерів робочих днів (1-5) коли буде перевірка. Іван працює тільки по парних днях.  Підрахувати скільки разів під час перевірки буде присутнім Іван.

      // function getRandomDay(minWDayNum = 1, maxWDayNumber = 5) {
      //   return (
      //     minWDayNum +
      //     Math.floor(Math.random() * (maxWDayNumber - minWDayNum + 1))
      //   )
      // }

      // function getCheckDaysWithIvan(checkingNumber) {
      //   let count = 0
      //   for (let i = 0; i < checkingNumber; i++) {
      //     const dayNum = getRandomDay()
      //     if (dayNum % 2 === 0) count++
      //   }
      //   return count
      // }
      // //--
      // const res = getCheckDaysWithIvan(9)
      // document.write(`res : ${res}`)

     

      //==============================================
      //Задача. Створити функцію, яка виводить на екран можливі значення секунд на годиннику
      // function displaySeconds() {
      //   for (let sec = 0; sec < 60; sec++) {
      //     if (sec > 9) document.write(`${sec}<br>`)
      //     else document.write(`0${sec}<br>`)
      //   }
      // }
      // displaySeconds()

      //==============================================
      // З клавіатури вводяться числа до тих пір, поки послідовність є зростаючою або спадною.
      // function printSeq() {
      //   let num1 = parseInt(prompt(`num`, ''))
      //   let num2 = parseInt(prompt(`num`, ''))
      //   const diff = num2 - num1
      //   do {
      //     num1 = num2
      //     num2 = parseInt(prompt(`num`, ''))
      //     document.write(`${num2}, `)
      //   } while ((num2 - num1) * diff > 0)
      // }

      // printSeq()

      //==============================================
      // Знайти суму цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7 (у числі є всього дві цифри 7,  наприклад: 2679328712)
      //остання цифра числа num=327      num%10  =7
      //позбутися останньої цифри - націло поділити на 10 - num = Math.floor(num/10)
      // let num = 2679328712
      // //1)Знаходимо першу 7

      

      //==============================================
      //Задача. Задано деякий діапазон років. Вивести на екран не більше ніх К років починаючи з першого високосного року.

      //==Чи високосний
      // function isLeepYear(year) {
      //   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      // }

      // //-- Знаходимо перший високосний у діапазоні
      // function getFirstLeepYear(minYear, maxYear) {
      //   for (let year = minYear; year <= maxYear; year++) {
      //     if (isLeepYear(year)) return year
      //   }
      //   return -1
      // }
      // //---
      // function printLeepYears(leepYearNumber, startLeeepYear, maxYear) {
      //   let count = 0
      //   for (
      //     let year = startLeeepYear;
      //     year < maxYear && count < leepYearNumber;
      //     year += 4
      //   ) {
      //     if (isLeepYear(year)) {
      //       document.write(`${year}<br>`)
      //       count++
      //     }
      //   }
      // }
      // //--------
      // function taskSolver(minYear, maxYear, leepYearNumber) {
      //   const firstLeepYear = getFirstLeepYear(minYear, maxYear)
      //   if (firstLeepYear === -1) document.write(`Немає високосних`)
      //   else printLeepYears(leepYearNumber, firstLeepYear, maxYear)
      // }
      // //---
      // taskSolver(1500, 1700, 4)







      //======================================================================
      //==============================================
      //==============================================
      //==============================================
      //==============================================
      //==============================================
      //================== МАСИВИ ====================
      //==============================================
      //==============================================
      //==============================================
      //==============================================
      //==============================================

      //Дано вартості товарів (12,45,67,1212). Знайти суму
      //              0   1    2    3
      // const prices = [12, 45, 67, 1212]

      // let sum = 0
      // for (let i = 0; i < prices.length; i++) {
      //   sum += prices[i]
      // }
      // document.write(`sum : ${sum}`)

      //==============================================
      //Вартості товарів вводяться. Знайти суму

      // //--- спитались скільки буде елементів масиву (скільки цін)
      // const productsNumber = parseInt(prompt(`Кілкьість продуктів`, ''))
      
      // //--- введення масиву
      // let productsPrices = []
      // for (
      //   let productIndex = 0;
      //   productIndex < productsNumber;
      //   productIndex++
      // ) {
      //   const prodPrice = parseFloat(
      //     prompt(`Ціна товару № ${productIndex}`, '')
      //   )
      //   productsPrices.push(prodPrice)
      // }

      // document.write(productsPrices)
      // console.log(productsPrices)
      // //--- знаходимо суму
      // let sum = 0
      // for (let i = 0; i < productsPrices.length; i++) {
      //   sum += productsPrices[i]
      // }

      // document.write(`sum : ${sum}`)

      //==============================================
      //         0  1  2  3  4   5  6  7  8   9 /// length =10
      // let arr = [2, 1, 4, 2, 4, 6, 2, 6, 7, 78]
      // //Cума першої половини
      // let sum = 0
      // const arrHalf = arr.length/2
      // for (let i = 0; i <= arrHalf; i++) {
      //   sum += arr[i]
      // }
      //Cума другої половини
      // let sum = 0
      // const arrHalf = Math.floor(arr.length / 2)
      // for (let i = arrHalf; i <= arr.length; i++) {
      //   sum += arr[i]
      // }

      // document.write(`sum : ${sum}`)
      //==============================================

      // //         0  1  2  3  4   5   6   7    8
      // let prices = [2, 1, 4, 5, 12, 23, 45, 213, 12] // prices.length = 9
      //==============================================
      // // Універсалаьна функція для знаходження суми довільно переданої кількості елементів
      // function sum() {
      //   let s = 0
      //   for (let i = 0; i < arguments.length; i++) {
      //     s += arguments[i]
      //   }
      //   return s
      // }
      // let s = sum(2, 3, 7, 23, 2, 2222, 1)
      // document.write(`s : ${s}`)
      // Універсалаьна функція 2 для знаходження суми довільно переданої кількості елементів
      // function sum(...numbersList) {
      //   let s = 0
      //   for (let i = 0; i < numbersList.length; i++) {
      //     s += numbersList[i]
      //   }
      //   return s
      // }
      // let s = sum(2, 3, 7, 23, 2, 2222, 1)
      // document.write(`s : ${s}`)

      //----------------------
      //Підкрахувати кількість елементів які більші за перший (кількість елементів може бути довільною)
      // function getCount(first, ...numbersList) {
      //   let count = 0
      //   for (let i = 0; i < numbersList.length; i++) {
      //     if (first < numbersList[i]) count++
      //   }
      //   return count
      // }
      // let c = getCount(2, 3, 7, 23, 2, 2222, 1)
      // document.write(`c : ${c}`)
      //==============================================
      // Задача. Створити функцію, яка приймає рік виходу на пенсію, та довільну
      // кількість значень років працівників. Визначити кількість пенсіонерів.
      // function getPensionersNumber(pensionerAge, ...workersAgesList) {
      //   let pensionersNumber = 0
      //   for (let i = 0; i < workersAgesList.length; i++) {
      //     if (workersAgesList[i] >= pensionerAge) pensionersNumber++
      //   }
      //   return pensionersNumber
      // }
      // let p = getPensionersNumber(65, 21, 45, 23, 65, 78, 88, 81)
      // document.write(` Кількість пенсіонерів : ${p}`)

      //==============================================
      // Задача. Дано розміри доходу магазину за кожен місяць протягом року. Знайти:
      //             0  1  2  3  4   5   6   7    8   9   10  11
      // let profits = [2, 1, 4, 5, 12, 23, 45, 213, 12, 23, 45, 213]
      // // 1) загальний дохід за рік (1-12)
      // 2) загальний дохід за 1-ше півріччя (1-6)
      // 1) загальний дохід за рік (0-5)

      // 3) загальний дохід за 2-ге півріччя (7-12)

      // 4) загальний дохід за 2-гий квартал (4-6)
      // 5) загальний дохід за 2-гий і 3-тій квартал (4-9)
      // //---- функція для генерування чисел у вказаному діапазоні ----
      // function generateNumbers(usersNumbersLength, minNumber, maxNumber) {
      //   let arr = []
      //   for (let i = 0; i < usersNumbersLength; i++) {
      //     let num =
      //       minNumber + Math.floor(Math.random() * (maxNumber - minNumber + 1))
      //     arr.push(num)
      //   }
      //   return arr
      // }

      //========================================================

      //--- ФУНКЦІЯ ДЛЯ ВВЕДЕННЯ МАСИВУ (ВКАЗУЄМО КІЛЬКІСТЬ ПОТІРБНИХ ЕЛЕМЕНТІВ)
      // function inputArray(elementsNumber, arrName) {
      //   let arr = []
      //   for (let i = 0; i < elementsNumber; i++) {
      //     const element = parseInt(prompt(`${arrName} [${i}]`, ''))
      //     arr.push(element)
      //   }
      //   return arr
      // }
      // let a = inputArray(3, 'a')
      // let b = inputArray(5, 'b')

      // let income = inputArray(12, 'Введіть прибуток за місяць з номером')
      // document.write(income)

      // =====================
      // function inputArray(elementsNumber, arrName) {
      //   let arr = []
      //   for (let i = 0; i < elementsNumber; i++) {
      //     const element = parseInt(prompt(`${arrName} [${i}]`, ''))
      //     arr.push(element)
      //   }
      //   return arr
      // }
      // // //--- Функція для знаходження суми елементів де номери змінюються від startMonthNumber  до endMonthNumber
      // function getIncomeSum(incomesList, startMonthNumber, endMonthNumber) {
      //   let sum = 0
      //   for (let i = startMonthNumber - 1; i < endMonthNumber; i++) {
      //     sum += incomesList[i]
      //   }
      // }
      // // //---------------------------
      // // //Вводимо елементи масиву
      // const incomesList = inputArray(12)
      // // //Знаходимо результат
      // // // 1) загальний дохід за рік (1-12)
      // const sumYear = getIncomeSum(incomesList, 1, 12)
      // // document.write(sumYear)
      // // // 2) загальний дохід за 1-ше півріччя (1-6)
      // const sum_1_6 = getIncomeSum(incomesList, 1, 6)
      // // document.write(sum_1_6)
      // // // 3) загальний дохід за 2-ге півріччя (7-12)
      // const sum_7_12 = getIncomeSum(incomesList, 7, 12)
      // document.write(sum_7_12)
      // // 4) загальний дохід за 2-гий квартал (4-6)
      // // 5) загальний дохід за 2-гий і 3-тій квартал (4-9)

      //==============================================

      //==============================================
      //Знайти суму цін товарів, які більші за 100. Кількість та ціни вводяться з клавіатури
      // Функція генерування масиву випадковим чином
      // function getRandomArry(minValue, maxValue, elementsNumber) {
      //   const arr = []
      //   for (let i = 0; i < elementsNumber; i++) {
      //     const randNum =
      //       minValue + Math.floor(Math.random() * (maxValue - minValue + 1))
      //     arr.push(randNum)
      //   }
      //   return arr
      // }
      // //Функція для знаходження суми елементів, які більші за задане значення
      // function getSumOfLimitedNumber(minValue, arr) {
      //   let sum = 0
      //   for (let i = 0; i < arr.length; i++) {
      //     if (arr[i] > minValue) sum += arr[i]
      //   }
      //   return sum
      // }

      // //Спитаємось скільки цін
      // const pricesNumber = parseInt(prompt(`Кількість цін`, ''))
      // //згенеруємо масив цін
      // const pricesList = getRandomArry(1, 10000, pricesNumber)
      // //знайдемо суму тих, які більші за 100
      // const resSum = getSumOfLimitedNumber(100, pricesList)
      // document.write(`  суму тих, які більші за 100: ${resSum}`)
      //==============================================
      // function test(arr) {
      //   arr[0] = 0
      // }
      // const a = [11, 22, 33]
      // a.push(77)

      // test(a)

      // document.write(a)
      //==============================================
      //Дано вартості товарів. Для тих, які більші за 1000 від ціни відняти 200.
      // function changeArr(arr) {
      //   for (let i = 0; i < arr.length; i++) {
      //     if (arr[i] > 1000) arr[i] -= 200
      //   }
      // }
      // //----
      // const prices = [2000, 800, 5000, 78]
      // changeArr(prices)
      // document.write(prices)

      //==============================================
      //========================================================

      //========================================================
      //Дано покази температур. Підрахувати кількість показників у заданому діапазоні
      // //Знайдемо кількість показів між 10 і 15 градусів
      // function getTemperaturesNumberInRange(minTemp, maxTemp, ...tempList) {
      // }

      // let tempCount = getTemperaturesNumberInRange(
      //   10,
      //   15,
      //   5,
      //   21,
      //   11,
      //   12,
      //   14,
      //   16,
      //   21,
      //   23,
      //   32
      // )
      // document.write(`Count = ${tempCount}`)
      //==============================================================
      // Дано покази температур (довільна кількість). Розробити функцію, яка дозволить знайти середнє значення для додатних показів температури.
      // function getPositiveAverage(temperaturesList) {
      //   let sum = 0
      //   let positiveTempNumber = 0
      //   for (let i = 0; i < temperaturesList.length; i++) {
      //     if (temperaturesList[i] > 0) {
      //       sum += temperaturesList[i]
      //       positiveTempNumber++
      //     }
      //   }
      //   return sum / positiveTempNumber
      // }
      // let tempList = [21, -9, 20, 0, -4]
      // const posAverage = getPositiveAverage(tempList)
      // document.write(`Avera : ${posAverage}`)
      //=================================================
      //Вводимо вагу вказаної кількості сумок на митниці. Знайти загальну вагу сумок, які важчі за 100
      // function getTotalWeighGr100(begsWeighList) {
      //   let sum = 0
      //   for (let i = 0; i < begsWeighList.length; i++) {
      //     if (begsWeighList[i] > 100) sum += begsWeighList[i]
      //   }
      //   return sum
      // }
      // const begsWeighList = [210, 500, 32]
      // let res = getTotalWeighGr100(begsWeighList)
      // document.write(res)

      //==============================================
      //---- Дано випадковим чином (-100 - +100) згенерований масив. Від"ємні елементи замінити на 0

      //---------------
      // //Створити функцію, яка б дозволила знаходити суму довільної кількості чисел крім перших двох

      //Створити функцію, яка б дозволила знаходити суму довільної кількості чисел, які більші за останнє число
      // function getSumGrLast(arr) {
      //   const last = arr[arr.length - 1] //останній елемент
      //   const lastIndex = arr.length - 1
      //   let sum = 0
      //   for (let i = 0; i < lastIndex; i++) {
      //     if (arr[i] > last) sum += arr[i]
      //   }
      //   return sum
      // }
      // let arr = [23, 1, 45, 2, 66, 41]
      // const res = getSumGrLast(arr)
      // document.write(`res : ${res}`)

      //==================================
      //Задача. Створити функцію, яка приймає рік виходу на пенсію, та довільну
      // кількість значень років працівників. Визначити кількість пенсіонерів.

      //===================================================
      //Згенерувати випадковим чином числа (0-100). Знайти суму парних





//============================================================
      