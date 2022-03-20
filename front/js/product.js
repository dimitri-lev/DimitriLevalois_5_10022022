const urlParams = new URLSearchParams(window.location.search)
const urlId = urlParams.get("id");

let nameProduct = document.getElementById("title");
let priceProduct = document.getElementById("price");
let colorProduct = document.getElementById("colors");
let descriptionProduct = document.getElementById("description");
let productQuantity = document.getElementById("quantity");
let imgProduct = document.querySelector(".item__img img");

getProduit();

function getProduit() {
    fetch("http://localhost:3000/api/products/" + urlId)
    .then((response) => response.json())
    .then (product => {
        imgProduct.setAttribute("src", product.imageUrl);
        imgProduct.setAttribute("alt", product.altTxt);
        nameProduct.innerHTML = product.name;
        priceProduct.innerHTML = product.price;
        descriptionProduct.innerHTML = product.description;

        product.colors.forEach(color => { 
            let optionColor = document.createElement("option");
            optionColor.innerHTML = color
            optionColor.value = color
            colorProduct.appendChild(optionColor);
        });

        
        addToCart(product);
    });
}

function addToCart(product) {
    const addToCartBtn = document.querySelector("#addToCart");
    
    addToCartBtn.addEventListener("click", () => {
      if (productQuantity.value > 0 && productQuantity.value < 100) {

        let choixCouleur = colorProduct.value;

        let choixQuantite = productQuantity.value;

        let optionProduit = {
            idProduit: urlId,
            couleurProduit: colorProduct,
            quantiteProduit: Number(choixQuantite),
            nomProduit: product.name,
            prixProduit: product.price,
            descriptionProduit: product.description,
            imgProduit: product.imageUrl,
            altImgProduit: product.altTxt
        };

        let productLocalStorage = JSON.parse(localStorage.getItem("produit"));

        if (productLocalStorage) {
            const resultFind = productLocalStorage.find((el) => el.idProduit === urlId && el.couleurProduit === colorProduct);

            if(resultFind) {
                let newQuantite = parseInt(optionProduit.quantiteProduit) + parseInt(resultFind.quantiteProduit);
                resultFind.quantiteProduit = newQuantite;
                localStorage.setItem("produit", JSON.stringify(productLocalStorage));
                console.table(productLocalStorage)
            } else {
                productLocalStorage.push(optionProduit);
                localStorage.setItem("produit", JSON.stringify(productLocalStorage));
                console.table(productLocalStorage);
            }
        } else {
            productLocalStorage = [];
            productLocalStorage.push(optionProduit);
            localStorage.setItem("produit", JSON.stringify(productLocalStorage));
            console.table(productLocalStorage);
        }}
    });
}