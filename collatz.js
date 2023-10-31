function suiteCollatz(n){
    //Crée un tableau pour stocker les termes de la suite
    const sequence =  [n];

    //tant que  que n n'est pas égal à 1, continue à calculer le terme suivant
    while(n !== 1) {
        if (n %2 === 0) {
            n = n/2;
        
        } else {
            // si n est impair, multiplie-le par 3 et ajoute1
            n = 3 * n+1;
        }
        //Ajoute le terme à la suite
        sequence.push(n);
    }
    return sequence;
}

// Exemple d'utilisation de la fonction pour la valeur initiale 6
const valeurInitiale = prompt('Taper la valeur initiale.');
const resultat = suiteCollatz(valeurInitiale);
console.log(`Suite de Collatz pour n = ${valeurInitiale}: ${resultat.join(' -> ')}`);
