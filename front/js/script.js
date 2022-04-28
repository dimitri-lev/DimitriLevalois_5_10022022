// Récupérer les données des produits sur le serveur
// Créer le html pour intégrer les produits


let url = 'http://localhost:3000/api/products';
fetch(url)
    .then(response => response.json()           // on obtient une promesse qui contient les données json, on rend ces données utilisable
        .then(products => {                     // on recupère les produits qu'on affiche dans la console
            console.log(products)
            for (let product of products) {     // pour chaque produit je crée le html avec les bonnes variables 
                console.log(product);

                let a = document.createElement('a');
                a.setAttribute('href', `./product.html?id=${product._id}`);

                let article = document.createElement('article');
                a.appendChild(article);

                let img = document.createElement('img');
                img.setAttribute('src', product.imageUrl)
                img.setAttribute('alt', product.name)
                article.appendChild(img);

                let h3 = document.createElement('h3');
                h3.classList.add('productName');
                h3.innerText = product.name;
                article.appendChild(h3);

                let p = document.createElement('p');
                p.classList.add('productDescription');
                p.innerText = product.description;
                article.appendChild(p);
                
                let items = document.querySelector('#items');
                items.appendChild(a);
            }
        }));