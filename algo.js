// Demander àl'utilisateur de saisir 2 nombres
let premierNombre = parseFloat(prompt("Entrez le premier nombre :"));
let deuxiemeNombre = parseFloat(prompt("Entrez le deuxième nombre:"));

// Vérifiez si la saisie et valide
if(isNaN(premierNombre) || isNaN(deuxiemeNombre)){
    console.log("Veuillez saisir des nombres valides.")
} else {
    // Addition des 2 nombres
    let somme = premierNombre + deuxiemeNombre;

    //On affiche le résultat dans la console
    console.log("La somme de "+ premierNombre +" et "+ deuxiemeNombre +" est "+somme);
}
