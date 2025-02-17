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