function sommeEntreAetB(A, B) {
    if(A>B) {
      //echange a et b si a est sup a b
    [A, B] = [B, A];  
    }
    
    let somme = 0;

    for(let i=A; i<=B; i++) {
        somme += i; // Ajoute chaque nombre de A a B a la somme
    }
    return somme;
}

const nbrA = parseInt(prompt("1er chiffre"));
const nbrB = parseInt(prompt("2eme chiffre"));
const resultat = sommeEntreAetB(nbrA, nbrB);

console.log(`La somme des entiers entre ${nbrA} et ${nbrB} est: ${resultat}`);

