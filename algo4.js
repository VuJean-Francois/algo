function rechercheElement(tableau,elementRecherche) {
    for(let i=0; i < tableau.length; i++) {
        if(tableau[i] === elementRecherche) {
            return i;   // on retourne l'indice
        }
    }
    return -1;
}
// On déclare notre tableau
let tableau = ["Marie","Christine","Thierry","Didier","Florian","Gurvan"];

// demande à l'utilisateur de saisir une valeur
let recherche = (prompt("Entrez un nom à rechercher"));

// Recherche de l'élément dans le tableau
let resultat = rechercheElement(tableau,recherche);

if (resultat !== -1) {
    console.log(recherche+" a été trouvé à l'indice "+resultat+" dans le tableau");
} else {
        console.log(recherche +" n'a pas été trouvé dans le tableau.");
}