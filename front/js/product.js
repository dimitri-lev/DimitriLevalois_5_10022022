/* au changement de page on accede à la page du produit et on obtient les informations de ce produit
grâce à URLsearchParams on obtient l'id du produit, on fetch sur l'url du produit
on incorpore les données au html */

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
                    quantity : Number(productQuantity),
                };

                let produitLocalStorage = JSON.parse(localStorage.getItem('produit'));

                if(productQuantity > 0 && productColor != "") {

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
                    alert('Le produit a bien été ajouté au panier')

                } else {
                    alert('Veuillez choisir une couleur et une quantité supérieur à 0')
                }
        });
    }))
    .catch(error => console.log(error));

        