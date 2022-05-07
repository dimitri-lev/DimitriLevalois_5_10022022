let produitLocalStorage = JSON.parse(localStorage.getItem('produit'));
console.log(produitLocalStorage);
let total = 0;
let number = 0;

// pour tout les produits qui se trouvent dans le local storage je crée le html et j'ajoute les informations des produits

let basket = () => {

    if (produitLocalStorage!=null) {
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
                quantite.innerText = 'Qté : ' + this.value
            });
        
            let itemContentSettingDelete = document.createElement('div')
            itemContentSettingDelete.className = 'item__content__setting__delete'
            cartItemContentSetting.appendChild(itemContentSettingDelete)
        
            let deleteItem = document.createElement('p')
            deleteItem.className = 'deleteItem'
            deleteItem.innerText = 'Supprimer'
            deleteItem.style.cursor = 'pointer'
            itemContentSettingDelete.appendChild(deleteItem)
    
            let totalQuantity = document.querySelector('#totalQuantity');
            totalQuantity.innerText = total += product.quantity;
    
            let totalPrice = document.querySelector('#totalPrice');
            totalPrice.innerText = number += product.price * product.quantity;
        }
    }

    if (produitLocalStorage.length == 0) {
        let panierVide = document.querySelector('#cart__items');
        panierVide.innerText = 'Le panier est vide';
        panierVide.style.textAlign = "center";
        panierVide.style.fontSize = "22px";
        panierVide.style.paddingBottom = "20px"
    }
}

basket();

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
            /* alert('Ce produit a été supprimé du panier'); */
            window.location.href ="../html/cart.html";
        })
    }
}

deleteButton()

// function getForm() {
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

        if (testFirstName == false) {
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

        if (testLastName == false) {
            document.querySelector('#lastNameErrorMsg').innerText = 'Nom invalide';
        } else {
            document.querySelector('#lastNameErrorMsg').innerText = 'Nom valide';
        };
    };

    const validAddress = (inputAddress) => {
        let addressRegExp = new RegExp ("^[a-zA-Z0-9 \s]{5,50}$");

        let testAddress = addressRegExp.test(inputAddress.value);

        console.log(testAddress);

        if (testAddress == false) {
            document.querySelector('#addressErrorMsg').innerText = 'Adresse invalide';
        } else {
            document.querySelector('#addressErrorMsg').innerText = 'Adresse valide';
        };
    };

    const validCity = (inputCity) => {
        let cityRegExp = new RegExp ("^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$");

        let testCity = cityRegExp.test(inputCity.value);

        console.log(testCity);

        if (testCity == false) {
            document.querySelector('#cityErrorMsg').innerText = 'Ville invalide';
        } else {
            document.querySelector('#cityErrorMsg').innerText = 'Ville valide';
        };
    };

    const validEmail = (inputEmail) => {
        let emailRegExp = new RegExp ("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$");

        let testEmail = emailRegExp.test(inputEmail.value);

        console.log(testEmail);

        if (testEmail == false) {
            document.querySelector('#emailErrorMsg').innerText = 'Email invalide';
        } else {
            document.querySelector('#emailErrorMsg').innerText = 'Email valide';
        };
    };
// }

// getForm();

function postForm() {
    
    let order = document.querySelector('#order');

    order.addEventListener('click', function(e) {
        e.preventDefault();

        let inputFirstName = document.querySelector('#firstName');
        let inputLastName = document.querySelector('#lastName');
        let inputAddress = document.querySelector('#address');
        let inputCity = document.querySelector('#city');
        let inputEmail = document.querySelector('#email');

/*     let valueFormulaire = {
        prenom : inputFirstName.value,
        nom : inputLastName.value,
        adresse : inputAddress.value,
        city : inputCity.value,
        mail : inputEmail.value,
    } */
        
            /* localStorage.setItem('valueFormulaire', JSON.stringify(valueFormulaire)); */

            // console.log(inputFirstName.value);

            if (!validFistName(inputFirstName) || !inputLastName.value || !inputAddress.value || !inputCity.value || !inputEmail.value) {
                
                alert('Formulaire invalide');

            } else {

                let productsBought = [];
                
                productsBought.push(produitLocalStorage.id);
                productsBought = ["055743915a544fde83cfdfc904935ee7" , "055743915a544fde83cfdfc904935ee7"];

                // contact: {
                //     *   firstName: string,
                //     *   lastName: string,
                //     *   address: string,
                //     *   city: string,
                //     *   email: string
                //     * }
                //     * products: [string] <-- array of product _id

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

                    /* localStorage.clear(); */
                    
                    console.log(data);
                    //Via URL variable
                    localStorage.setItem('orderId', data.orderId);

                    /* document.location.href = 'confirmation.html'; */
                })
                .catch(error => console.log(error));
            };
    });
}

postForm();







/* let formulaire  = () => {
    let firstName = document.querySelector('#firstName');

    firstName.addEventListener('change', function(){
        validFirstName(this);
    });

    const validFirstName = (inputFirstName) => {
        let firstNameRegExp = new RegExp ("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");

        let testFirstName = firstNameRegExp.test(inputFirstName.value);

        console.log(testFirstName);

        if (testFirstName == false) {
            document.querySelector('#firstNameErrorMsg').innerText = 'Prénom invalide';
            return false
        } else {
            document.querySelector('#firstNameErrorMsg').innerText = 'Prénom valide';
            return true
        };
    };

    let lastName = document.querySelector('#lastName');

    lastName.addEventListener('change', function(){
        validLastName(this);
    });

    const validLastName = (inputLastName) => {
        let lastNameRegExp = new RegExp ("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");

        let testLastName = lastNameRegExp.test(inputLastName.value);

        console.log(testLastName);

        if (testLastName == false) {
            document.querySelector('#lastNameErrorMsg').innerText = 'Nom invalide';
        } else {
            document.querySelector('#lastNameErrorMsg').innerText = 'Nom valide';
        };
    };

    let address = document.querySelector('#address');

    address.addEventListener('change', function(){
        validAddress(this);
    });

    const validAddress = (inputAddress) => {
        let addressRegExp = new RegExp ("^[a-zA-Z0-9 \s]{5,50}$");

        let testAddress = addressRegExp.test(inputAddress.value);

        console.log(testAddress);

        if (testAddress == false) {
            document.querySelector('#addressErrorMsg').innerText = 'Adresse invalide';
        } else {
            document.querySelector('#addressErrorMsg').innerText = 'Adresse valide';
        };
    };

    let city = document.querySelector('#city');

    city.addEventListener('change', function(){
        validCity(this);
    });

    const validCity = (inputCity) => {
        let cityRegExp = new RegExp ("^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$");

        let testCity = cityRegExp.test(inputCity.value);

        console.log(testCity);

        if (testCity == false) {
            document.querySelector('#cityErrorMsg').innerText = 'Ville invalide';
        } else {
            document.querySelector('#cityErrorMsg').innerText = 'Ville valide';
        };
    };

    let email = document.querySelector('#email');

    email.addEventListener('change', function(){
        validEmail(this);
    });

    const validEmail = (inputEmail) => {
        let emailRegExp = new RegExp ("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$");

        let testEmail = emailRegExp.test(inputEmail.value);

        console.log(testEmail);

        if (testEmail == false) {
            document.querySelector('#emailErrorMsg').innerText = 'Email invalide';
        } else {
            document.querySelector('#emailErrorMsg').innerText = 'Email valide';
        };
    };

    let order = document.querySelector('#order');

    order.addEventListener('click', function(e) {
        e.preventDefault();
        let valueFormulaire = {
            prenom : document.querySelector('#firstName').value,
            nom : document.querySelector('#lastName').value,
            adresse : document.querySelector('#address').value,
            city : document.querySelector('#city').value,
            mail : document.querySelector('#email').value,
        }
            console.log(valueFormulaire)
            localStorage.setItem('valueFormulaire', JSON.stringify(valueFormulaire));

            if (validFirstName(valueFormulaire.prenom) && validLastName(valueFormulaire.nom) && validAddress(valueFormulaire.adresse) && validCity(valueFormulaire.city) && validEmail(valueFormulaire.mail)) {
                const aEnvoyer = {
                    produitLocalStorage,
                    valueFormulaire,
                }
                console.log(aEnvoyer);
            } else {
                alert('Formulaire invalide');
            }
            
    })
}

formulaire(); */




