//================================================================
// Задачі роз"язані Самостійно
//================================================================

////Задача 1. Дано масив 30 випадкових цілих чисел. 
//// Підрахувати скільки було обмінів під час сортування бульбашкою
console.log(`================ Задача 1 ================`)


const arrNumbers: number[] = [2, 11, 45, 2, 67, 3, 23, 90]
console.log(arrNumbers)
/**
 * @param {number} arrNumbers - масив чисел для сортування
 * @param {number} countChange - кількість обмінів
 * @param {boolean} changeArray - прапорець для перевірки чи відсортований масив
 * @param {number} n -  після кожного проходу найбільший елемент "зсувається" в кінець
 * @returns - відсортований масив і кількістю обмінів
 */

let countChange: number = 0
let changeArray: boolean
let n = arrNumbers.length

do {
	changeArray = false
	for (let i: number = 1; i < arrNumbers.length; i++) {
		if (arrNumbers[i - 1] > arrNumbers[i]) {
			let a: number
			a = arrNumbers[i - 1]
			arrNumbers[i - 1] = arrNumbers[i]
			arrNumbers[i] = a
			changeArray = true
			countChange++
		}
	}
	n--
} while (changeArray)
console.log("Кількість обмінів:", countChange)
console.log("Відсортований масив:", arrNumbers)




//================================================================
//================================================================
//Задача 2. Дано масив 30 випадкових цілих чисел. 
//Підрахувати скільки було обмінів під час сортування змішуванням.
console.log(`================ Задача 2 ================`)

// --- Створюємо масив ---
/**
 * 
 * @param {number} elemNumber - кількість елементів в масиві;
 * @param {number} countNumber - кількість обмінів під час сортування;
 * @param {boolean} change - прапорець для перевірки чи відсортований масив;
 * @param {number} leftIndex -  ліва межа масиву;
 * @param {number} rightIndex - права межа масиву;
 * @returns array30elements - масив з наповненими рандомно елементами в діапазоні 0 - 100
 */
function createRundomArray(elemNumber: number): number[] {
	return Array.from({ length: elemNumber }, () => Math.floor(Math.random() * 100))
}
const array30elements = createRundomArray(30)
console.log(array30elements)
//------

let countNumber: number = 0
let change: boolean
let leftIndex = 0
let rightIndex = array30elements.length - 1


while (leftIndex < rightIndex) {
	change = false
	//  --- Прохід зліва направо --- 
	for (let i: number = leftIndex + 1; i < rightIndex; i++) {
		if (array30elements[i - 1] > array30elements[i]) {

			let a: number = array30elements[i - 1]
			array30elements[i - 1] = array30elements[i]
			array30elements[i] = a
			change = true
			countNumber++
		}
	}
	rightIndex--  // зменшуємо праву межу, бо найбільший елемент вже на місці

	// --- Прохід справа наліво --- 
	for (let i: number = rightIndex + 1; i > leftIndex; i--) {
		if (array30elements[i - 1] > array30elements[i]) {

			let a: number = array30elements[i - 1]
			array30elements[i - 1] = array30elements[i]
			array30elements[i] = a
			change = true
			countNumber++
		}
	}
	leftIndex++ // зсуваємо ліву межу, бо найменший елемент уже на місці

	if (change === false) break
}
//------
console.log("Кількість обмінів:", countNumber)
console.log("Відсортований масив:", array30elements)




//================================================================
//================================================================
//Задача 3. Дано масив 30 випадкових цілих чисел. 
// Підрахувати скільки було обмінів під час сортування включеннями.

console.log(`================ Задача 3 ================`)

// --- Створюємо масив ---
/**
 * @param {number} elemNumber - кількість елементів в масиві;
 * @returns createRundomArray3 - масив з наповненими рандомно елементами в діапазоні 0 - 100
 */

function createRundomArray3(elemNumber: number): number[] {
	return Array.from({ length: elemNumber }, () => Math.floor(Math.random() * 100))
}
const array30elements3 = createRundomArray3(30)
console.log("Початковий масив:", array30elements3)


// --- Сортування включенням з підрахунком обмінів ---
/**
 * 
 * @param {number} arr - масив з елементами які сортируются
 * @param {number} sorted - масив який підлягає сортуванню 
 * @param {number} swap - кількість обмінів під час сортування;
 * @returns sorted та  swap - відсортований масив та кількість обмінів під час сортування
 */
function sortArray(arr: number[]): { sorted: number[], swaps: number } {

	let countNumber3: number = 0

	for (let k = 1; k < arr.length; k++) {
		let currentElement: number = arr[k]
		let previousElement: number = k - 1

		while (previousElement >= 0 && arr[previousElement] > currentElement) {
			arr[previousElement + 1] = arr[previousElement]
			previousElement = previousElement - 1
			countNumber3++
		}
		arr[previousElement + 1] = currentElement
	}
	return { sorted: arr, swaps: countNumber3 }
}
const result = sortArray(array30elements3)
console.log("Відсортований масив:", result.sorted)
console.log("Кількість обмінів:", result.swaps)
console.log(` `)



//================================================================
//================================================================
//Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
//Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.



console.log(`================ Задача 4/1 'Eтапи сортування бульбашкою' ================`)

const arrNumbers4: number[] = [2, 11, 45, 2, 67, 3, 23, 90]
console.log("Початковий масив:", arrNumbers4)
/**
 * @param {number} arrNumbers - масив чисел для сортування
 * @param {number} countChange - кількість обмінів
 * @param {boolean} changeArray - прапорець для перевірки чи відсортований масив
 * @param {number} n -  після кожного проходу найбільший елемент "зсувається" в кінець
 * @returns - відсортований масив і кількістю обмінів
 */

let countChange4: number = 0
let changeArray4: boolean
let n4 = arrNumbers.length

do {
	changeArray4 = false
	for (let i: number = 1; i < arrNumbers4.length; i++) {
		if (arrNumbers4[i - 1] > arrNumbers4[i]) {
			let a: number
			a = arrNumbers4[i - 1]
			arrNumbers4[i - 1] = arrNumbers4[i]
			arrNumbers4[i] = a
			changeArray4 = true
			countChange4++
			console.log("-- Етап сортування масиву --", countChange4, arrNumbers4)
			//console.log(`Етап сортування масиву #${countChange4}: ${arrNumbers4}`)
		}
	}
	n4--
} while (changeArray4)
console.log("=== Кількість обмінів: ===", countChange4)
console.log("Відсортований масив:", arrNumbers4)
console.log(` `)



console.log(`================ Задача 4/2 'Eтапи сортування змішуванням' ================`)

// --- Створюємо масив ---
/**
 * 
 * @param {number} elemNumber - кількість елементів в масиві;
 * @param {number} countNumber4 - кількість обмінів під час сортування;
 * @param {boolean} change4 - прапорець для перевірки чи відсортований масив;
 * @param {number} leftIndex -  ліва межа масиву;
 * @param {number} rightIndex - права межа масиву;
 * @returns array30elements4 - масив з наповненими рандомно елементами в діапазоні 0 - 100
 */
function createRundomArray4(elemNumber: number): number[] {
	return Array.from({ length: elemNumber }, () => Math.floor(Math.random() * 100))
}
const array30elements4 = createRundomArray4(30)
console.log(array30elements4)
//------

let countNumber4: number = 0
let change4: boolean
let leftIndex4 = 0
let rightIndex4 = array30elements4.length - 1


while (leftIndex < rightIndex) {
	change4 = false
	//  --- Прохід зліва направо --- 
	for (let i: number = leftIndex + 1; i < rightIndex; i++) {
		if (array30elements4[i - 1] > array30elements4[i]) {

			let a: number = array30elements4[i - 1]
			array30elements4[i - 1] = array30elements4[i]
			array30elements4[i] = a
			change4 = true
			countNumber4++
			console.log("-- Етап сортування масиву -- ", countNumber4, array30elements4)
		}
	}
	rightIndex--  // зменшуємо праву межу, бо найбільший елемент вже на місці

	// --- Прохід справа наліво --- 
	for (let i: number = rightIndex + 1; i > leftIndex; i--) {
		if (array30elements4[i - 1] > array30elements4[i]) {

			let a: number = array30elements[i - 1]
			array30elements4[i - 1] = array30elements4[i]
			array30elements4[i] = a
			change4 = true
			countNumber4++
			console.log("-- Етап сортування масиву -- ", countNumber4, array30elements4)
		}
	}
	leftIndex++ // зсуваємо ліву межу, бо найменший елемент уже на місці

	if (change4 === false) break
}
//------
console.log("=== Кількість обмінів: === ", countNumber4)
console.log("Відсортований масив:", array30elements4)
console.log(` `)




console.log(`================ Задача 4/3 'Eтапи сортування включеннями' ================`)
// --- Створюємо масив ---
/**
 * @param {number} elemNumber - кількість елементів в масиві;
 * @returns createRundomArr4 - масив з наповненими рандомно елементами в діапазоні 0 - 100
 */

function createRundomArr4(elemNumber: number): number[] {
	return Array.from({ length: elemNumber }, () => Math.floor(Math.random() * 100))
}
const arr30elements4 = createRundomArr4(30)
console.log("Початковий масив:", arr30elements4)


// --- Сортування включенням з підрахунком обмінів ---
/**
 * 
 * @param {number} arr - масив з елементами які сортируются
 * @param {number} sorted - масив який підлягає сортуванню 
 * @param {number} swap - кількість обмінів під час сортування;
 * @returns sorted та  swap - відсортований масив та кількість обмінів під час сортування
 */
function sortArray4(arr: number[]): { sorted: number[], swaps: number } {

	let countNumber4: number = 0

	for (let k = 1; k < arr.length; k++) {
		let currentElement: number = arr[k]
		let previousElement: number = k - 1

		while (previousElement >= 0 && arr[previousElement] > currentElement) {
			arr[previousElement + 1] = arr[previousElement]
			previousElement = previousElement - 1
			countNumber4++
			console.log("-- Етап сортування масиву -- ", countNumber4, arr30elements4)
		}
		arr[previousElement + 1] = currentElement
	}
	return { sorted: arr, swaps: countNumber4 }
}
const result4 = sortArray4(arr30elements4)
console.log(" === Відсортований масив: === ", result4.sorted)
console.log(" === Кількість обмінів: ", result4.swaps, " === ")
console.log(` `)



//================================================================
//================================================================
//Задача 5. Дано масив імен.
// Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
console.log(`================ Задача 5 ================`)

const namesArray: string[] = ['Toly', 'Rita', 'Olga', 'Andriy', 'Roman', 'Stepan', 'Olena', 'Ivan']
console.log(namesArray)
/**
 * @param {string} namesArray - масив з елементами які сортируются
 * @param {number} endIndex - довжина масиву
 * @param {boolean} changeName - маркер який слідкує чи був проведений обмін під час сортування;
 * @returns namesArray - відсортований масив
 */
// --- 1. Сортування бульбашкою ---
let changeName: boolean
let endIndex = namesArray.length
do {
	changeName = false
	for (let i = 1; i < endIndex; i++) {
		if (namesArray[i - 1] > namesArray[i]) { // порівнюємо рядки напряму
			const tmp = namesArray[i - 1]
			namesArray[i - 1] = namesArray[i]
			namesArray[i] = tmp
			changeName = true
		}
	}
	endIndex--
} while (changeName)
console.log(namesArray)

// --- 2. Бінарний пошук ---
/**
 * @param {string} array  - масив з елементами в якому відбувається пошук
 * @param {string} name - елемент масиву який шукаємо
 * @param {string} left  - лівий елемент масиву
 * @param {string} right - правий елемент масиву
 * @param {string} nameOlga - ім"я яке шукаємо в масиві
 * @param {number} index - індекс елементу масиву
 * @returns - підтвердження чи є потрібний елемент в масиві чи ні
 */
function findName(array: string[], name: string) {
	let left = 0
	let right = array.length - 1

	while (left <= right) {
		const middle = Math.floor((left + right) / 2)
		if (array[middle] === name) return middle
		if (array[middle] < name) left = middle + 1
		else right = middle - 1
	}
	return -1
}

const nameOlga = 'Olga'
const index = findName(namesArray, nameOlga)

if (index !== - 1)
	console.log(`Yes, ${nameOlga} fond at index ${index} `)
else console.log(`No, ${nameOlga} no fond`)


//if(namesArray.some((name) => name === 'Olga'))  console.log('Yes')
//else console.log('No')
console.log(` `)






//================================================================
//================================================================
//Задача 6.  Дано масив імен. 
// Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.

console.log(`================ Задача 6 ================`)

const arrNames: string[] = ['Toly', 'Rita', 'Olga', 'Andriy', 'Roman', 'Stepan', 'Olena', 'Ivan']
console.log(namesArray)
/**
 * @param {string} arrNames  - масив з елементами в якому відбувається пошук
 * @param {boolean} changeLenghName - прапорець, чи були зміни в масиві
 * @param {string} endIndexLengh  - межа проходження циклу
 * @returns - відсортований масив імен за довжиною
 */
// --- 1. Сортування бульбашкою ---
let changeLenghName: boolean
let endIndexLengh = arrNames.length
do {
	changeLenghName = false
	for (let i = 1; i < endIndexLengh; i++) {
		if (arrNames[i - 1].length > arrNames[i].length) { // порівнюємо рядки напряму
			const tmp = arrNames[i - 1]
			arrNames[i - 1] = arrNames[i]
			arrNames[i] = tmp
			changeLenghName = true
		}
	}
	endIndexLengh--
} while (changeLenghName)
console.log("Відсортовано за довжиною:", arrNames)

// --- 2. Бінарний пошук ---
/**
 * 
 * @param {string}  array  - масив в якому буде пошук потрібних елементів
 * @param {number} nameLength  - довжина імені яку шукаємо
 * @param {string} left  - крайня ліва межа масиву (елемент)
 * @param {string} right - крайня права межа масиву (елемент)
 * @param {string} middle - елемент який порівнюємо з іншими в масиві
 * @param {string} name5simbol - збурігає результати пошуку в масиві
 * @returns 
 */
function findLenghName(array: string[], nameLength: number): number {
	let left = 0
	let right = array.length - 1

	while (left <= right) {
		const middle = Math.floor((left + right) / 2)
		if (array[middle].length === nameLength) return middle
		if (array[middle].length < nameLength) return left = middle + 1
		else right = middle - 1
	}
	return -1
}

const name5simbol = findLenghName(arrNames, 5)

if (name5simbol === -1)
	console.log(`Ім’я довжиною 5 символів не знайдено`)
else console.log(`Ім’я з 5-ти символів ${arrNames[name5simbol]} у масиві під індексом ${name5simbol}`)
console.log(` `)




//================================================================
//================================================================
//Задача 7.   Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів).
//  Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.

console.log(`================ Задача 7 ================`)


type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7
type MatrixFild = DayOfWeek[][]
/**
 * 
 * @param {number} row - кількість рядків в масиві
 * @param {number} col - кількість колонок в масиві
 * @returns createMatrix - масив з рандомно заповненими днями тижня
 */
function createMatrix(row: number, col: number): MatrixFild {
	return Array.from({ length: row }, () =>
		Array.from({ length: col }, () => (Math.floor(Math.random() * 7) + 1) as DayOfWeek)
	)
}
const weekMatrix = createMatrix(4, 8)
console.log(weekMatrix)

const numberSundayPerRow = weekMatrix.map(row =>
  row.reduce((count, day) => (day === 7 ? count + 1 : count), 0)
)

console.log("--- Кількість неділь у кожному рядку: ---", numberSundayPerRow)
//================================================================
//================================================================