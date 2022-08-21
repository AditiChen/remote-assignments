function calculate(data) {
    let totalPrice = 0
    for (let i = 0; i < data.products.length; i++) {
        totalPrice += data.products[i].price
    }
    if (data.discount != 0) {
        console.log (`total price: ${totalPrice * data.discount}`);
    } else {
        console.log (`total price: ${totalPrice}`);
    }
}


calculate({
    discount: 0.1, 
    products: [
        {
            name: "Product 1",
            price: 100 
        },
        {
            name: "Product 2",
            price: 700 
        },
        {
            name: "Product 3",
            price: 250 
        }
    ]
}); // show the total price of all products after applying a discount