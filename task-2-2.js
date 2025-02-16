const sums = [
    [1, 5, 6],
    [7, 2, 4, 6],
    [7, 10, 1],
    [1, 3]
    ];
    let max = null;
    let min = null;
    let average = null;
    let sum = 0;
for (let i = 0; i < sums.length; i++) {
   const innerArray = sums[i];
   let matrixSum = 0;
    for (let j = 0; j < innerArray.length; j++) {
        matrixSum += innerArray[j];
        }
    if (matrixSum > max) {
        max = matrixSum;
    }
    if (min === null) {
       min = matrixSum; 
    }
    if (matrixSum < min) {
        min = matrixSum;
    }
    sum += matrixSum;

}   
average = sum / sums.length;
console.log(max);
console.log(min);
console.log(average);
