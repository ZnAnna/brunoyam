function devideRandomNumber() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.floor(Math.random() * 6);
    
        if (randomNumber === 0) {
            reject(new Error("Ошибка: деление на ноль"));
        } else {
            const result = 1 / randomNumber;
            resolve(result);
        }
    });
}

devideRandomNumber()
    .then(result => {
        console.log(`Результат деления: ${result}`);
    })
    .catch(error => {
        console.error(error.message);
    });