let positioncart = document.querySelector("#cart__items");
let productLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.table(productLocalStorage);

function displayCart() {

    if(productLocalStorage===null || productLocalStorage==0) {
        const titleCart = document.querySelector("h1");
        const sectionCart = document.querySelector(".cart");

        titleCart.innerHTML = "Votre panier est vide";
        sectionCart.getElementsByClassName.display ="none";

    } else {

        for (let i=0; i<productLocalStorage.length; i++) {


            // création balise "article"
            let productArticle = document.createElement("article");
            document.querySelector("#cart__items").appendChild(productArticle);
            productArticle.className = "cart__item";
        
            // div image 
            let productDivImg = document.createElement("div");
            productArticle.appendChild(productDivImg);
            productDivImg.className = "cart__item__img";

            let productImg = document.createElement("img");
            productDivImg.appendChild(productImg);

            let productItemContent = document.createElement("div");
            productArticle.appendChild(productItemContent);

            let productItemPrice = document.createElement("div");
            productItemContent.appendChild(productItemPrice);

            // let productColor = document.createElement("p");
            // nameProduct.appendChild(productColor);
            // productColor.innerHTML = productLocalStorage[i].productColor;

            let productPrice = document.createElement("p");
            productPrice.innerHTML = productLocalStorage[i].prixProduit + " €";
            productItemPrice.appendChild(productPrice);
            
        }
    }
}

displayCart();