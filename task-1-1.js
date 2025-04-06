class Worker {
    constructor(name, surname, rate, workingDays) {
       this.name = name;
       this.surname = surname;
       this.rate = rate;
       this.workingDays = workingDays; 
    }

getSalary() {
    const salary = this.rate * this.workingDays;
    return salary;
  }
}
const worker = new Worker("Иван", "Иванов", 10, 28)

console.log(worker.name)
console.log(worker.surname)
console.log(worker.rate)
console.log(worker.workingDays)
console.log(worker.getSalary())