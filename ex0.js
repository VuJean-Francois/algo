function ajoutElement(tableau,n) {
    tableau = [];
    for(let i=0; i<n ;i++) {
        let nbrAleatoire = Math.floor(Math.random()* -100) + 100;
        tableau.push(nbrAleatoire);
    }
    return tableau;
}

let monTableau = [];
monTableau = ajoutElement(monTableau, 20);
console.log(monTableau);