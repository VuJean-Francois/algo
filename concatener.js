function concatenerTabchaine(tab) {
    let resultat = "";

    for(let i=0; i<tab.length; i++) {
        resultat += tab[i];

    }
    return resultat;
}

//Exemple d'utilisation
const monTableau = ["Bonjour,", "comment"," ça va", "?"];
const resultat = concatenerTabchaine(monTableau);

console.log("Résultat de la concaténation : " + resultat);