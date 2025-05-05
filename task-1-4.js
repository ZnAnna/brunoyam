fetch('https://fakestoreapi.com/products')
   .then(products => {
        const products = products.slice(0, 10);
        console.log(products);
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });