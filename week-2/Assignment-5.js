function calculate(data) {
    if (data.discount != 0) {
        for(let i = 0; i < data.products.length; i++) {
            console.log (`name: ${data.products[i].name},
            price: ${data.products[i].price * data.discount}`
            )
        }
    } else {
        for(let i = 0; i < data.products.length; i++) {
            console.log (`name: ${data.products[i].name},
            price: ${data.products[i].price * data.discount}`
            )
        }
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