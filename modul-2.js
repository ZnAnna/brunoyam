// 1-1
let currency = ["Доллар", "Евро", "Рубль"];

// 1-2
let persons = ["Иван", "Петя", "Олег"];
persons[0] += " Петров";
persons[1] += " Сидоров";
persons[2] += " Иванов";

// 1-3
persons.shift();
persons.push("Иван Петров", "Дима Тихонов");
persons.pop();
persons.unshift("Дима Тихонов");
// console.log(persons);

// 1-4
const numbers = [100, 200, 50, 20];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// 1-5
const numbers = [100, -5, 200, 0, 50, -150, 20];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        console.log(numbers[i]);
    } 
}


// 1-6
const numbers = [100, -5, 200, 0, 50, -150, 20];
for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 50;   
}
console.log(numbers);


// 2-1
let films = ["3 Билборда на границе Эббинга, Миссури", "Король говорит", "Гран Торино", "Город Проклятых", "Титаник", "Хатико"];
let userAnswer = [];
for (let i = 0; i < films.length; i++) {
     const question = confirm(`Смотрели ли вы "${films[i]}"?`);
        if (question == true) {
            userAnswer.push(`${i + 1}. ${films[i]}: Да\n`);                   
        } else {
            userAnswer.push(`${i + 1}. ${films[i]}: Нет\n`);  
        }
}
alert(userAnswer.join(''));

// 2-2
const sums = [
    [1, 5, 6],
    [7, 2, 4, 6],
    [7, 10, 1],
    [1, 3]
    ];
    let max = null;
    let min = null;
    let average = null;
    let sum = 0;
for (let i = 0; i < sums.length; i++) {
   const innerArray = sums[i];
   let matrixSum = 0;
    for (let j = 0; j < innerArray.length; j++) {
        matrixSum += innerArray[j];
        }
    if (matrixSum > max) {
        max = matrixSum;
    }
    if (min === null) {
       min = matrixSum; 
    }
    if (matrixSum < min) {
        min = matrixSum;
    }
    sum += matrixSum;

}   
average = sum / sums.length;
console.log(max);
console.log(min);
console.log(average);


// 2-3
const sums1 = [
    [1, 5, 6],
    [7, 2, 4, 6],
    [7, 10, 1],
    [1, 3]
    ]
const sums2 = [
    [2, 4, 11],
    [1, 2, 5, 6],
    [3, 10, 1],
    [1, 6, 1]
    ]
let arraySum1 = 0;  
let arraySum2 = 0;
for (let i = 0; i < sums1.length; i++) {
    
    for (let j = 0; j < sums1[i].length; j++) {
        if (sums1[i][j] % 2 === 0) {
            arraySum1 += sums1[i][j];           
        }
    }
}    

for (let i = 0; i < sums2.length; i++) {
    
    for (let j = 0; j < sums2[i].length; j++) {
        if (sums2[i][j] % 2 === 0) {
            arraySum2 += sums2[i][j];           
        }
    }
} 

if (arraySum1 > arraySum2) {
    console.log("Наибольшая сумма " + arraySum1 + " в массиве 1");
} else {
    console.log("Наибольшая сумма " + arraySum2 + " в массиве 2"); 
}