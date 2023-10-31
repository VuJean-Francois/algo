function rechercherDoublons(tableau) {
    const elementsEnDouble = {};
    const doublons = [];

    for(let i=0; i<tableau.length; i++) {
        const element = tableau[i];
        if(elementsEnDouble[element] === undefined) {
            // si l'élément n'a pas été rencontré auparavant, le marquer comme vu
            elementsEnDouble[element] = i;
        } else {
            //si l'element a deja ete rencontre, ajouter a la liste des doublons
            if(!doublons.includes(element)) {
                doublons.push(element);
            } 
        }
    }
    return doublons;
}

//exemple d'utilisation
const monTab = [1, 2, 3, 4, 2, 5, 6, 4];
const doublons = rechercherDoublons(monTab);

console.log("Les éléments en double sont : "+ doublons.join(", "));
