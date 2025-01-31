let interestRate = Number(prompt("Процентная ставка: "));
let firstSum = Number(prompt("Сумма первоначального взноса"));
let creditSum = Number(prompt("Сумма кредита"));
let dateFinishCredit = new Date(prompt("Дата окончания кредита в формате ГГГГ.ММ.ДД"));
let today = new Date();
let bodyCredit = creditSum - firstSum; // тело кредита
let loanCredit = Math.ceil((dateFinishCredit - today)/(24*60*60*1000*30.44)); // срок кредита
let monthInterestRate = interestRate/100/12;
let monthPay = bodyCredit * (monthInterestRate + (monthInterestRate / (Math.pow(1 + monthInterestRate, loanCredit) - 1)));
let finishSum = monthPay * loanCredit;
alert (finishSum.toFixed(2));