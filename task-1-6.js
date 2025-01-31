let a = prompt("Введите а:");
let b = prompt("Введите b:");
let c = prompt("Введите c:");
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