function getDivisors(num) {
    let divisors = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            divisors.push (i);
        }
        
    }
    return divisors;
  }
  
  // Примеры использования
  console.log(getDivisors(4)) // => [1, 2, 4]
  console.log(getDivisors(9)) // => [1, 3, 9]
  console.log(getDivisors(11)) // => [1, 11]