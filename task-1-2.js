function getDigitsSum(num) {
    let sum = 0;
    let arr = num.toString().split("").map(Number);
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    return sum;
        
}

// Примеры использования
console.log(getDigitsSum(251)) // => 8
console.log(getDigitsSum(100)) // => 1
console.log(getDigitsSum(16)) // => 7