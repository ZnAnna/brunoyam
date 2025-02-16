let films = ["3 Билборда на границе Эббинга, Миссури", "Король говорит", "Гран Торино", "Город Проклятых", "Титаник", "Хатико"];
let userAnswer = [];
for (let i = 0; i < films.length; i++) {
     question = confirm(`Смотрели ли вы "${films[i]}"?`);
        if (question == true) {
            userAnswer.push(`${films[i]}: Да\n`);                   
        } else {
            userAnswer.push(`${films[i]}: Нет\n`);  
        }
}
alert(userAnswer);
// не могу убрать запятую перед наименованием фильма и пронумеровать список