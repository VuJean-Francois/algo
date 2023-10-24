function calculIMC(poids,taille) {
    // formule imc: poids/(taille*taille)
    const imc = poids/(taille*taille);
    return imc;
}
// demander le poids à l'utilisateur
let poids =  parseFloat(prompt("Quel est votre poids en kg"));
// demander la taille
let taille = parseFloat(prompt("Quel est votre taille en mètres?"));
// calcul de l'IMC
const imc = calculIMC(poids,taille);
// on affiche le résultat
console.log("Votre IMC est "+imc);

// Interprétation de l'IMC
if(imc < 18.5) {
    alert("Manger des kouign-amann");

} else if(imc >= 18.5 && imc < 24.9) {
    alert("N'abusez pas des bonnes choses vous êtes bien");
}else if (imc >= 25 && imc < 29.9) {
    alert("Le gras c'est la vie");   
} else {
    alert("La bretagne ça vous gagne");
}