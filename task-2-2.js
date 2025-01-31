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