<p id="elem1">1</p>
<p id="elem2">2</p>
<p id="elem3">3</p>

<p class="www">text</p>
<p class="www">text2</p>

<button class="btn-1">Число 1</button>
<button class="btn-2">Число 2</button>
<button class="btn-3">Число 3</button>

<div id="root"></div>


// 1-1
const user = {
    name: "Петр",
    surname: "Кузин",
    patronymic: "Романович",
};
alert (`${user.name} ${user.surname} ${user.patronymic}`);


// 1-2
const elem1 = document.querySelector('#elem1');
const elem2 = document.querySelector('#elem2');
const elem3 = document.querySelector('#elem3');

console.log(elem1);
console.log(elem2);
console.log(elem3);


// 1-3
const text = document.querySelector('.www');
console.log(text);


// 1-4
const button1 = document.querySelector('.btn-1');
const button2 = document.querySelector('.btn-2');
const button3 = document.querySelector('.btn-3');

button1.addEventListener("click", () => {console.log(1)});
button2.addEventListener("click", () => {console.log(2)});
button3.addEventListener("click", () => {console.log(3)});


// 1-5
const root = document.getElementById("root");

const h1 = document.createElement("h1");
h1.textContent = "Заголовок";
root.prepend(h1);
h1.style.border = "1px solid";

const p = document.createElement('p');
p.textContent = "Это мой текст";
root.append(p);

const a = document.createElement("a");
a.textContent = "Ссылка на Яндекс";
a.target = "_blank";
a.href = "https://yandex.ru";
root.append(a);



// 2-1
// const newStyle = document.querySelector('.www');
document.body.addEventListener("mouseover", function () {
    document.body.style.background = "red";
    document.body.style.color = "black";
  });
  document.body.addEventListener("mouseout", function () {
    document.body.style.background = "";
    document.body.style.color = "orange";  
  })