// // 1-1
// class Worker {
//     constructor(name, surname, rate, workingDays) {
//        this.name = name;
//        this.surname = surname;
//        this.rate = rate;
//        this.workingDays = workingDays; 
//     }

// getSalary() {
//     const salary = this.rate * this.workingDays;
//     return salary;
//   }
// }
// const worker = new Worker("Иван", "Иванов", 10, 28)

// console.log(worker.name)
// console.log(worker.surname)
// console.log(worker.rate)
// console.log(worker.workingDays)
// console.log(worker.getSalary())


// // 1-2
// class MyString {
//     reverse(str){
//         let splitString = str.split("");
//         let reverseString = splitString.reverse();
//         let joinString = reverseString.join("");
//         return joinString;
//     }

//     ucFirst(str){
//         return str[0].toUpperCase() + str.slice(1);
//     }

//     ucWords(str){
//         let splitWords = str.split(" ");
//         let newString = splitWords.map(splitWord => splitWord.charAt(0).toUpperCase() + splitWord.slice(1));
//         let joinWords = newString.join(" ");
//         return joinWords;
//     }
// }

// const str = new MyString()
// console.log(str.reverse("foo"));
// console.log(str.ucFirst("dima"));
// console.log(str.ucWords("hello world"));
// console.log(str.ucWords("abc aBc"));
