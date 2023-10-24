function estPalindrome(chaine){
    // conversion de la chaîne en minuscule et suppression des espaces
    chaine = chaine.toLowerCase().replace(/ /g,'');
    
    // On va inverser la chaîne
    const chaineInverse = chaine.split('').reverse().join('');

    // On compare les 2 chaînes de caractères
    if(chaine === chaineInverse){
        return true;
    } else{
        return false;
    }
}
// Demande à l'utilisateur de saisir une chaîne
let saisie = prompt("entrez une chaîne de caractères:");

// On véridie si la saise est palindrome
if(estPalindrome(saisie)){
    alert(saisie+" est un palindrome");
} else {
    alert(saisie+" n'est pas un palindrome");
}