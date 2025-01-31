let trueAnswer = 0;
let answer1 = prompt("Какое сейчас время года?");

if (answer1 == "Зима" || answer1 == "зима" && trueAnswer == 0) {
    trueAnswer++;
    alert("Правильный ответ");
} else {
    alert("Неправильный ответ");
}

let answer2 = prompt("Сколько углов у круга?");
if (answer2 == 0) {
    trueAnswer++;
    alert("Правильный ответ");
} else {
    alert("Неправильный ответ");
}

let answer3 = prompt("Угадай число от 3 до 8");
if (answer3 == 8) {
    trueAnswer++;
    alert("Правильный ответ. Вы ответили на все вопросы");
} else {
    alert("Неправильный ответ. Количество верных ответов: " + trueAnswer);
}