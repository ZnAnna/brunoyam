//1-1
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


//1-2
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


//1-3
function getDivisors(num) {
    let divisors = [];
    for (let i = 0; i <= num; i++) {
        if (num % i === 1) {
            divisors.push (i);
        }
        
    }
    return divisors;
  }
  
  // Примеры использования
console.log(getDivisors(4)) // => [1, 2, 4]
console.log(getDivisors(9)) // => [1, 3, 9]
console.log(getDivisors(11)) // => [1, 11]


//1-4
function reverseStr(str) {
    let newString = str.split('').reverse().join('');
    return newString;
  }
  
  // Примеры использования
console.log (reverseStr("привет")) // => "тевирп"
console.log (reverseStr("мир")) // => "рим"
console.log (reverseStr("моё имя ваня")) // => "янав ями ёом"


//1-5
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


//1-6
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


//2-1
function compareArrays(arr1, arr2) {
    if (arr1.lenght !== arr2.length) {
        return false;
    } 

    for (let i = 0; i < arr1.length; i++) {
         
        if (arr1[i].length !== arr2[i].length) {
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


//2-2
function startTimer() {
    const time = prompt("Введите таймер в формате ЧЧ:ММ:СС");
    const timeArray = time.split(":");
    const hoursInMs = timeArray[0]*60*60*1000;
    const minutesInMs = timeArray[1]*60*1000;
    const secInMs = timeArray[2]*1000;
    const ms = hoursInMs + minutesInMs + secInMs;

    setTimeout(function() {
        alert("Время вышло")
        startTimer()
    }, ms);
}

startTimer();