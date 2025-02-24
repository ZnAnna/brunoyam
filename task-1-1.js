function getSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 2);
    }
    return sum;
  }
  
  // Примеры использования
  console.log (getSum([1, 3])) // => 10
  console.log (getSum([2, 5])) // => 29
  console.log (getSum([2, 3, 2])) // => 17