let produitLocalStorage = JSON.parse(localStorage.getItem('produit'));
console.log(produitLocalStorage);

// pour tout les produits qui se trouvent dans le local storage je crée le html et j'ajoute les informations des produits
if (produitLocalStorage!=null) {
    for (let product of produitLocalStorage) {
        /* let img = localStorage.getItem('img')
        let nom = localStorage.getItem('name')
        let price = localStorage.getItem('price')
        let id = localStorage.getItem('id')
        let color = localStorage.getItem('color')
        let quantity = localStorage.getItem('quantity') */
    
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
    
        let itemContentSettingDelete = document.createElement('div')
        itemContentSettingDelete.className = 'item__content__setting__delete'
        cartItemContentSetting.appendChild(itemContentSettingDelete)
    
        let deleteItem = document.createElement('p')
        deleteItem.className = 'deleteItem'
        deleteItem.innerText = 'Supprimer'
        itemContentSettingDelete.appendChild(deleteItem)
    }
}
