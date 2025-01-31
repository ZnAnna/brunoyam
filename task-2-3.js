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