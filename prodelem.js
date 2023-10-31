function prodElemtab(tab) {
    if(tab.length === 0) {
        return 0; // Si le tableau est vide le produit = 0
    }

    let produit = 1;

    for(let i=0; i<tab.length; i++) {
        if (tab[i]==0) continue;
        if (typeof(tab[i])!="number") continue;
        produit *= tab[i];  //Multiplie le produit par l'élément actuel

    }
    return produit;
}

const monTableau = ["Salut les potes", 3, 4, 0, 5];
const resultat = prodElemtab(monTableau);

console.log("Le produit des éléments du tableau est : "+ resultat);