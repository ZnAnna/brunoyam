//
{/* <button id="menu">Меню</button>
<div id="sidebar">
    <ul>
      <li>Вариант 1</li>
      <li>Вариант 2</li>
      <li>Вариант 3</li>
      <li>Вариант 4</li>
    </ul>
</div>
<div id="square"></div> */}


// #sidebar{
//     position: absolute; 
//     top: 20px;
//     left: -250px;
//     transition: left 0.3s;
// }
// #sidebar ul {
//     list-style: none;
//   }

// #sidebar.open {
//     top: 20px;
//     left: 0;
//   }  

// #square {
//   width: 120px;
//   height: 120px;
//   background-color: black;
//   position: relative;
//   left: 0;
//   top: 100px;
// }



// 1-1
const menuButton = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
  
menuButton.addEventListener('click', function () {
    sidebar.classList.toggle('open');
});


// 1-2
const square = document.getElementById('square');
const keyframes = [
    {transform: 'translateX(0)'},
    {transform: 'translateX(400px)'},
    {transform: 'translateX(400px)'},
  ];
  
  const timing = {
    duration: 3000,
    iterations: 1,
    direction: 'alternate',
  };
  
  const animation = document.getElementById('square').animate(keyframes, timing);