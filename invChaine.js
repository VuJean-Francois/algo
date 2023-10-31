function inversChaine(chaine) {
    const chaineInverse = chaine.split('').reverse().join('');
    return chaineInverse;
}

const maChaine = "Bonjour!";
const chaineInverse = inversChaine(maChaine);
console.log("Chaine inversé : " + chaineInverse);