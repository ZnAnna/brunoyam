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



