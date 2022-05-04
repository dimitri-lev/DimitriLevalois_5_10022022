// au changement de page on accede à la page du produit et on obtient les informations de ce produit

/* console.log(window.location);
console.log(window.location.search); */

const urlSearch = new URLSearchParams(window.location.search);
const urlParams = urlSearch.get('id');

console.log(urlSearch);
console.log(urlParams);


let url = `http://localhost:3000/api/products/${urlParams}`;

fetch(url)
    .then(response => response.json()
        .then(product => {
            console.log(product);

            let img = document.createElement('img');
            img.setAttribute('src', product.imageUrl);
            img.setAttribute('alt', product.name);
            
            let itemImg = document.querySelector('.item__img');
            itemImg.appendChild(img);

            let title = document.querySelector('#title');
            title.innerText = product.name;

            let price = document.querySelector('#price');
            price.innerText = product.price;

            let description = document.querySelector('#description');
            description.innerText = product.description;

            let colors = document.querySelector('#colors');
            for (let i = 0; i < product.colors.length; i++) {
                let color = document.createElement('option');
                color.setAttribute('value', product.colors[i]);
                color.innerText = product.colors[i];
                colors.appendChild(color);         
            };

            document.querySelector('#addToCart').addEventListener('click', function() {

                let productColor = document.querySelector('#colors').value
                let productQuantity = document.querySelector('#quantity').value

                let optionProduit = {
                    img : product.imageUrl,
                    name : product.name,
                    id : product._id,
                    color : productColor,
                    price : product.price,
                    quantity : Number(productQuantity),
                };

                let produitLocalStorage = JSON.parse(localStorage.getItem('produit'));
            
            if(optionProduit.quantity >= 0) {
                if (produitLocalStorage) {
                    let foundProduct = produitLocalStorage.find(p => p.id == optionProduit.id && p.color == optionProduit.color);
                    console.log(foundProduct)
                    if(foundProduct) {
                        parseInt(foundProduct.quantity += optionProduit.quantity);
                    } else {
                        produitLocalStorage.push(optionProduit);
                    }
                } else {
                    produitLocalStorage = [];
                    produitLocalStorage.push(optionProduit);
                } 

                localStorage.setItem('produit', JSON.stringify(produitLocalStorage));
            }
        });
    }));

        /* function saveBasket(basket){
            localStorage.setItem('product', JSON.stringify(basket));
        }

        function getBasket(){
            let basket = localStorage.getItem('product');
            if(basket == null){
                return [];
            } else {
                return JSON.parse(basket);
            }

        }

        function addBasket(product){
            let basket = getBasket();
            let foundProduct = basket.find(p => p.id == product.id);
            if (foundProduct != undefined){
                foundProduct.quantity++;
            } else {
                product.quantity = 1;
                basket.push(product); 
            }
            saveBasket(basket);
        }

        function removeFromBasket(product){
            let basket = getBasket();
            basket = basket.filter(p => p.id != product.id);
            saveBasket(basket);
        }

        function changeQuantity(product, quantity){
            let basket = basket();
            let foundProduct = basket.find(p => p.id == product.id);
            if (foundProduct != undefined){
                foundProduct.quantity += quantity;
                if(foundProduct.quantity <= 0){
                    removeFromBasket(foundProduct);
                } else {
                    saveBasket(basket);
                }
            } 
        }

        function getNumberProduct(){
            let basket = getBasket();
            let number = 0;
            for (let product of basket) {
                number += product.quantity;
            }
            return number;
        }

        function getTotalPrice() {
            let basket = getBasket();
            let total = 0;
            for(let product of basket){
                total += product.quantity * product.price;
            }
            return total;
        } */