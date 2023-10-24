function triBulles(tableau) {
    let n = tableau.length;
    let permutation;
    
    do {
        permutation = false;    //initialisation

        for(let i=0; i< n-1; i++) {
            if(tableau[i] > tableau[i+1]) {
                // on échange les éléments
                let temp = tableau[i];
                tableau[i] = tableau[i+1];
                tableau[i+1] = temp;
                permutation = true;
            }
        }
    } while(permutation);

    return tableau;
}

// on va créer le tableau
let tableauDesordre = [78,64,89,18,22,35,29,56,22];
// on va trier notre tableau
let tableauTri = triBulles(tableauDesordre);

console.log("tableau trié : "+tableauTri);

