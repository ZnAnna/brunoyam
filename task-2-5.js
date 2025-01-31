const number = prompt('Введите число между 1 и 4', '');

switch (number) {
    case "1":
        alert ('Вы ввели число 1');    
    break;
    case "2":
        alert ('Вы ввели число 2');    
    break;
    case "3":
        alert ('Вы ввели число 3, а может и 4');    
    break;
    case "4":
        alert ('Вы ввели число 3, а может и 4');    
    break;
    default:
        alert ('Неверное значение');
}
