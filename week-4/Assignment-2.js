const products = document.getElementById('products')

function ajax(src, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', src);
    xhr.onload = () => {
        if(xhr.status === 200) {
            let data = JSON.parse(xhr.responseText);
            callback(data);
        }
    };
    xhr.send();
}

function render(data) {
    data.forEach(context => {
        products.insertAdjacentHTML('afterbegin', `
        <h3 style="margin:30px 0 10px 0;color:#7899a9;">name: ${context.name}</h3>
        <h3 style="margin:10px 0;color:#7899a9;">price: ${context.price}</h3>
        <h3 style="margin:10px 0;color:#7899a9;">description: ${context.description}</h3>
        `)
    });
    console.log(data);
} 

ajax(
    "https://appworks-school.github.io/Remote-Assignment-Data/products", 
    function(response) {
        render(response); 
    }
); // you should get product information in JSON format and render data in the page