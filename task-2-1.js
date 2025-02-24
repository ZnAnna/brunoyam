function compareArrays(arr1, arr2) {
    if (arr1.lenght !== arr2.lenght) {
        return false;
    } 

    for (let i = 0; i < arr1.length; i++) {
         
        if (arr1[i].lenght !== arr2[i].lenght) {
            return false;
        } 
            for (let j = 0; j < arr1[i].length; j++) {
                if (arr1[i][j] !== arr2[i][j]) {
                    return false;
                }
                
            }
    }
    return true;
  }
  
  // Примеры использования
  console.log (compareArrays([[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]])) // => true
  console.log (compareArrays([[1, 2], [4]], [[1], [4, 5]])) // => false