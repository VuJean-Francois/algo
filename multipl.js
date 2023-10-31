function multiplicationElementsTab(tableau) {
    if(tableau.length === 0) {
        return 0; // si le tableau est vide
    }
    let produit = 1; // init produit à 1
    for(let i=0; i<tableau.length; i++) {
        produit *= tableau[i]; // multiplie le produite par l'élément actuel
    }
    return produit;
}

// exemple d'utilisation
const monTab = [2, 3, 4, 5];
const produit = multiplicationElementsTab(monTab);

console.log("Le produit des éléments du tableau est: " + produit);