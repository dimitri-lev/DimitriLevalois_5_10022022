/* let montest = document.getElementById("test")
console.log(montest)
montest.innerHTML="Hello world" */


let url = "http://localhost:3000/api/products/";
fetch( url , {method : 'GET'})
.then(data => {
    console.log(data)
    return data.json()
}).then(products => {
    console.log(products)

    let HTML = document.getElementById("items")

    let myHTML = ""
    products.forEach(product => {
        console.log(product.name)
        console.log(product.price)
        myHTML += `<a href="./product.html?id=${product._id}">
                        <article>
                            <img src="${product.imageUrl}" alt="${product.altTxt}">
                            <h3 class="productName">${product.name}</h3>
                            <p class="productPrice">${product.price}</p>
                            <p class="productColors">${product.colors}</p>
                            <p class="productDescription">${product.description}</p>
                        </article>
                    </a>`
    });

    console.log(myHTML)
    HTML.innerHTML = myHTML

})


// function numberformat