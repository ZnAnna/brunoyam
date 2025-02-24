function delElem(value, arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (value !== arr[i]) {
           newArr.push(arr[i]); 
        }
        
    }
    return newArr;
  }
  
  // Примеры использования
  console.log (delElem("да", ["да", "нет", "да", "нет"])) // => ["нет", "нет"]
  console.log (delElem(0, [1, 3, 0, 1, 0, 5])) // => [1, 3, 1, 5]