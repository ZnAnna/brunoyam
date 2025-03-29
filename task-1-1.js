const menuButton = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
  
menuButton.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    });