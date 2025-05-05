const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Выполнение промиса спустя 5 секунд");
    }, 5000);
  });
   myPromise
    .then((message) => {
      document.body.textContent = message;
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });