function fillArray(num) {
    let newArr = [];
    for (let i = 1; i <= num; i++) {
        newArr.push (i);   
    }
    return newArr;
  }
  
  // Примеры использования
  console.log (fillArray(4)); // => [1, 2, 3, 4]
  console.log (fillArray(2)); // => [1, 2]
  console.log (fillArray(7)); // => [1, 2, 3, 4, 5, 6, 7]