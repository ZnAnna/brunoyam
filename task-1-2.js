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