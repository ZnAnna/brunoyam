const newStyle = document.querySelector('.www');
newStyle.addEventListener("mouseover", function () {
    newStyle.style.background = "red";
    newStyle.style.color = "black";
});
newStyle.addEventListener("mouseout", function () {
  newStyle.style.background = "";
  newStyle.style.color = "orange";  
})