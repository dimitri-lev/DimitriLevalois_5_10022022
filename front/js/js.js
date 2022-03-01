const object = {
    "name" : "totoObject"
}

const tab = [ "toto" , "tata" , "dim"]

console.log(object.name, tab[1])

tab.forEach(MaLingneDeTableau => {
    console.log(MaLingneDeTableau)
});

for (let index = 0; index < tab.length; index++) {
    console.log( "For : " + tab[index])    
}
