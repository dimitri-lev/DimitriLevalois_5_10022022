// je récupère l'id de l'url avec searchParams et je l'affiche. Je vide le localStorage

function main() {
    
    const idSearch = new URLSearchParams(window.location.search);
    const idParams = idSearch.get('id');
    console.log(idParams);

    const idOrder = document.getElementById('orderId');
    idOrder.innerHTML = idParams;

    localStorage.clear();
}

main();