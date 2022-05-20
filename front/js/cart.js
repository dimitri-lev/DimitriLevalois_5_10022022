let produitLocalStorage = JSON.parse(localStorage.getItem('produit'));
console.log(produitLocalStorage);
let total = 0;
let number = 0;

// pour tout les produits qui se trouvent dans le local storage je crée le html et j'ajoute les informations des produits

if (!produitLocalStorage) {
    let panierVide = document.querySelector('#cart__items');
    panierVide.innerText = 'Le panier est vide';
    panierVide.style.textAlign = "center";
    panierVide.style.fontSize = "22px";
    panierVide.style.paddingBottom = "20px"
}

let basket = () => {

    if (produitLocalStorage != null) {
        for (let product of produitLocalStorage) {
    
            let cartItem = document.querySelector('#cart__items')
        
            let article = document.createElement('article')
            article.className = 'cart__item'
            article.setAttribute('data-id', `${product.id}`)
            article.setAttribute('data-color', `${product.color}`)
            cartItem.appendChild(article)
        
            let cartItemImg = document.createElement('div')
            cartItemImg.className = 'cart__item__img'
            article.appendChild(cartItemImg)
        
            let image = document.createElement('img')
            image.setAttribute('src', product.img)
            image.setAttribute('alt', product.name)
            cartItemImg.appendChild(image)
        
            let cartItemContent = document.createElement('div')
            cartItemContent.className = 'cart__item__content'
            article.appendChild(cartItemContent)
        
            let cartItemContentDescription = document.createElement('div')
            cartItemContentDescription.className = 'cart__item__content__description'
            cartItemContent.appendChild(cartItemContentDescription)
        
            let h2 = document.createElement('h2')
            h2.innerText = product.name;
            cartItemContentDescription.appendChild(h2)
        
            let couleur = document.createElement('p')
            couleur.innerText = 'Couleur : ' + product.color;
            h2.innerText = product.name;
            cartItemContentDescription.appendChild(couleur)
        
            let prix = document.createElement('p')
            prix.innerText = 'Prix : ' + product.price + ' €'
            cartItemContentDescription.appendChild(prix)
        
            let cartItemContentSetting = document.createElement('div')
            cartItemContentSetting.className = 'cart__item__content__setting'
            cartItemContent.appendChild(cartItemContentSetting)
        
            let cartItemContentSettingQuantity = document.createElement('div')
            cartItemContentSettingQuantity.className = 'cart__item__content__setting__quantity'
            cartItemContentSetting.appendChild(cartItemContentSettingQuantity)
        
            let quantite =  document.createElement('p')
            quantite.innerText = 'Qté : ' + product.quantity
            cartItemContentSettingQuantity.appendChild(quantite)
        
            let input = document.createElement('input')
            input.className = 'itemQuantity'
            input.setAttribute('type', 'number')
            input.setAttribute('name', 'itemQuantity')
            input.setAttribute('min', 1)
            input.setAttribute('max', 100)
            input.setAttribute('value', product.quantity)
            cartItemContentSettingQuantity.appendChild(input)

            input.addEventListener('input', function() {
                quantite.innerText = 'Qté : ' + this.value;
                product.quantity = this.value;
                localStorage.setItem('produit', JSON.stringify(produitLocalStorage));
                location.reload();
            });
        
            let itemContentSettingDelete = document.createElement('div')
            itemContentSettingDelete.className = 'item__content__setting__delete'
            cartItemContentSetting.appendChild(itemContentSettingDelete)
        
            let deleteItem = document.createElement('p')
            deleteItem.className = 'deleteItem'
            deleteItem.innerText = 'Supprimer'
            deleteItem.style.cursor = 'pointer'
            deleteItem.style.width = '90px'
            itemContentSettingDelete.appendChild(deleteItem)
    
            let totalQuantity = document.querySelector('#totalQuantity');
            totalQuantity.innerText = total += parseInt(product.quantity);

            let totalPrice = document.querySelector('#totalPrice');
            totalPrice.innerText = number += product.price * product.quantity;           
        }
    }
}

basket();

// au click je supprime le produit du local storage avec la méthode filter

let deleteButton = () => {
    let deleteItem = document.querySelectorAll('.deleteItem');
    console.log(deleteItem);

    for (let i = 0; i < deleteItem.length; i++){
        deleteItem[i].addEventListener('click', function(){

            // selection de l'id du produit qui va être supprimé en cliquant sur le bouton

            let supprimerProduitId = produitLocalStorage[i].id;
            let supprimerProduitColor = produitLocalStorage[i].color;

            // avec filter je selectionne les éléments à garder et je supprime celui cliqué

            produitLocalStorage = produitLocalStorage.filter(p => p.id != supprimerProduitId || p.color != supprimerProduitColor);
            console.log(produitLocalStorage);
            localStorage.setItem('produit', JSON.stringify(produitLocalStorage));

            alert('Ce produit a bien été supprimé du panier');

            window.location.href ="../html/cart.html";
        })
    }
}

deleteButton()

// j'écoute les input du formulaire, pour chaque élément je met en place des règles regex, si la règle est respecté : validation sinon message d'erreur.

    let form = document.querySelector('.cart__order__form');

    form.firstName.addEventListener('change', function() {
        validFistName(this);
    });
    form.lastName.addEventListener('change', function() {
        validLastName(this);
    });
    form.address.addEventListener('change', function() {
        validAddress(this);
    });
    form.city.addEventListener('change', function() {
        validCity(this);
    });
    form.email.addEventListener('change', function() {
        validEmail(this);
    });

    const validFistName = (inputFirstName) => {
        let firstNameRegExp = new RegExp ("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");

        let testFirstName = firstNameRegExp.test(inputFirstName.value);

        console.log(testFirstName);

        if (testFirstName == false || testFirstName == null) {
            document.querySelector('#firstNameErrorMsg').innerText = 'Prénom invalide';
            return false
        } else {
            document.querySelector('#firstNameErrorMsg').innerText = 'Prénom valide';
            return true
        };
    };

    const validLastName = (inputLastName) => {
        let lastNameRegExp = new RegExp ("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");

        let testLastName = lastNameRegExp.test(inputLastName.value);

        console.log(testLastName);

        if (testLastName == false || testLastName == null) {
            document.querySelector('#lastNameErrorMsg').innerText = 'Nom invalide';
            return false
        } else {
            document.querySelector('#lastNameErrorMsg').innerText = 'Nom valide';
            return true
        };
    };

    const validAddress = (inputAddress) => {
        let addressRegExp = new RegExp ("^[a-zA-Z0-9 \s]{3,50}$");

        let testAddress = addressRegExp.test(inputAddress.value);

        console.log(testAddress);

        if (testAddress == false || testAddress == null) {
            document.querySelector('#addressErrorMsg').innerText = 'Adresse invalide';
            return false
        } else {
            document.querySelector('#addressErrorMsg').innerText = 'Adresse valide';
            return true
        };
    };

    const validCity = (inputCity) => {
        let cityRegExp = new RegExp ("^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$");

        let testCity = cityRegExp.test(inputCity.value);

        console.log(testCity);

        if (testCity == false || testCity == null) {
            document.querySelector('#cityErrorMsg').innerText = 'Ville invalide';
            return false
        } else {
            document.querySelector('#cityErrorMsg').innerText = 'Ville valide';
            return true
        };
    };

    const validEmail = (inputEmail) => {
        let emailRegExp = new RegExp ("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$");

        let testEmail = emailRegExp.test(inputEmail.value);

        console.log(testEmail);

        if (testEmail == false || testEmail == null) {
            document.querySelector('#emailErrorMsg').innerText = 'Email invalide';
            return false
        } else {
            document.querySelector('#emailErrorMsg').innerText = 'Email valide';
            return true
        };
    };

/* au click si tout les champs du formulaire sont valides alors on envoit les données du formulaire + données du local storage au backend via POST. 
On obtient l'id de commande en réponse. */

function postForm() {
    
    let order = document.querySelector('#order');

    order.addEventListener('click', function(e) {
        e.preventDefault();

        let inputFirstName = document.querySelector('#firstName');
        let inputLastName = document.querySelector('#lastName');
        let inputAddress = document.querySelector('#address');
        let inputCity = document.querySelector('#city');
        let inputEmail = document.querySelector('#email');

            if (!validFistName(inputFirstName) || !validLastName(inputLastName) || !validAddress(inputAddress) || !validCity(inputCity) || !validEmail(inputEmail)) {
                
                alert('Formulaire invalide');
                
            } else {

                console.log('test');

                let productsBought = [];
                
                for(let i = 0; i < produitLocalStorage.length; i++) {
                    productsBought.push(produitLocalStorage[i].id);
                }

                console.log(productsBought);

                const aEnvoyer = {
                    contact : {
                        firstName : inputFirstName.value,
                        lastName : inputLastName.value,
                        address : inputAddress.value,
                        city : inputCity.value,
                        email : inputEmail.value,
                    },
                    products : productsBought,
                };
                console.log(aEnvoyer);

                const options = {
                    method: 'POST',
                    body: JSON.stringify(aEnvoyer),
                    headers: {
                    "Content-Type" : "application/json",
                    },
                };
    
                fetch("http://localhost:3000/api/products/order", options)
                .then((response) => response.json())
                .then((data) => {
                    
                    console.log(data);

                    document.location.href = 'confirmation.html?id=' + data.orderId;
                })
                .catch(error => console.log(error));
            };
    });
}

postForm();












