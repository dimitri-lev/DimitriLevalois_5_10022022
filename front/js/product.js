
console.log(window)
console.log(window.location.search)

const urlParams = new URLSearchParams(window.location.search)
const urlId = urlParams.get("id");

console.log(urlId)

///Fetch sur ulr + id
//Afficher les informations du produit dans les bon champs html
