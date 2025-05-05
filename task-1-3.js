function createRandomPromise() {
    const delay = Math.floor(Math.random() * 10 + 1) * 1000;
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(delay / 1000);
      }, delay);
    });
  }
  
  const promises = [];
  for (let i = 0; i < 10; i++) {
    promises.push(createRandomPromise());
  }
  console.log("Массив промисов:", promises);