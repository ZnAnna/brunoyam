// 1-1
console.log ("Рецепт салата змейка: майонез, перец горошком");

// 1-2
const message = "Привет, Мир";
alert(message);

// 1-3
let num1 = 10;
alert(num1);
num1 = 20;
alert(num1);

// 1-4
let sum = (1+2+3);
alert(sum);

// 1-5
let test = 0;
if (test > 10) {
    console.log ("Верно");
} else {
    console.log ("Неверно");
}

// 1-6
let a = +prompt("Введите а:");
let b = +prompt("Введите b:");
let c = +prompt("Введите c:");
let d = b**2-4*a*c;
if (d < 0) {
    console.log("Корней нет");
} else if (d === 0) {
   let d = -b/(2*a);
   console.log(d);
} else if (d > 0) {
    let d1 = (-b + Math.sqrt(d))/(2*a);
    let d2 = (-b - Math.sqrt(d))/(2*a);
    console.log(d1);
    console.log(d2);
}

// 2-1
let trueAnswer = 0;
let answer1 = prompt("Какое сейчас время года?");

if (answer1.toLowerCase() === "зима" && trueAnswer == 0) {
    trueAnswer++;
    alert("Правильный ответ");
} else {
    alert("Неправильный ответ");
}

let answer2 = +prompt("Сколько углов у круга?");
if (answer2 === 0) {
    trueAnswer++;
    alert("Правильный ответ");
} else {
    alert("Неправильный ответ");
}

let answer3 = +prompt("Угадай число от 3 до 8");
if (answer3 === 8) {
    trueAnswer++;
    alert("Правильный ответ. Вы ответили на все вопросы");
} else {
    alert("Неправильный ответ. Количество верных ответов: " + trueAnswer);
}


// 2-2
const randomNumber = Math.floor(Math.random() * 10) + 1;
let tries = 0;
let userAnswer = Number(prompt("Введите загаданное от 1 до 10 число:"));


if (randomNumber === userAnswer && tries === 0) {
    alert("Вы угадали");
} else {
    userAnswer = Number(prompt("Неправильный ответ. Введите загаданное от 1 до 10 число:"));
    tries++;

    if (randomNumber === userAnswer && tries === 1) {
    alert("Вы угадали");
    } else {
    userAnswer = Number(prompt("Неправильный ответ. Осталась 1 попытка"));
    tries++;
    
        if (randomNumber === userAnswer && tries === 2) {
        alert("Вы угадали");
        } else {
        alert("Вы проиграли. Загаданное число: " + randomNumber);
        }
    }    
}


// 2-3
let answer = Number(prompt("Введите угол наклона от 0 до 5"));
let angle = 2;
let tries = 0;

if (answer === angle) {
    alert("Вы попали в птицу");
} else if ( answer > angle) {
    answer = Number(prompt("Промах, возьмите чутка ниже."));
    tries++;
} else if (answer < angle) {
    answer = Number(prompt("Промах, возьмите чутка выше."));
    tries++;    
} 

if (answer === angle && tries === 1) {
    alert("Вы попали в птицу"); 
} else if ( answer > angle) {
    alert("Промах, угол был ниже: " + angle);
} else if (answer < angle) {
    alert("Промах, угол был выше: " + angle);    
} 


// 2-4
let num = 4; // от 0 до 9

switch (num) {
    case 0:
        alert("Ноль");
    break;
    case 1:
        alert("Один");
    break;
    case 2:
        alert("Два");
    break;
    case 3:
        alert("Три");
    break;
    case 4:
        alert("Четыре");
    break;
    case 5:
        alert("Пять");
    break;
    case 6:
        alert("Шесть");
    break;
    case 7:
        alert("Семь");
    break;
    case 8:
        alert("Восемь");
    break;
    case 9:
        alert("Девять");
    break;
    default:
        alert("Некорректное значение");
}


// 2-5
const number = prompt('Введите число между 1 и 4', '');

switch (number) {
    case "1":
        alert ('Вы ввели число 1');    
    break;
    case "2":
        alert ('Вы ввели число 2');    
    break;
    case "3":
    case "4":
        alert ('Вы ввели число 3, а может и 4');    
    break;
    default:
        alert ('Неверное значение');
}


// 2-6
let num = Number(prompt("Введите целое число"));
let result = undefined;

if (num % 2 === 0) {
    alert(result = "odd");
} else {
    alert(result = "even");
}


// 3-1
let interestRate = +prompt("Процентная ставка: ");
let firstSum = +prompt("Сумма первоначального взноса");
let creditSum = +prompt("Сумма кредита");
let dateFinishCredit = new Date(prompt("Дата окончания кредита в формате ГГГГ.ММ.ДД"));
let today = new Date();
let bodyCredit = creditSum - firstSum; // тело кредита
let loanCredit = Math.ceil((dateFinishCredit - today)/(24*60*60*1000*30.44)); // срок кредита
let monthInterestRate = interestRate/100/12;
let monthPay = bodyCredit * (monthInterestRate + (monthInterestRate / (Math.pow(1 + monthInterestRate, loanCredit) - 1)));
let finishSum = monthPay * loanCredit;
alert (finishSum.toFixed(2));