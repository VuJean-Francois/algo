function croissant(tableau) {
    tableau.sort();
}
 
function decroissant(tableau) {
    tableau.sort();
    tableau.reverse();
}

let tableauDesordre = [78,64,89,18,22,35,29,56,22];
let tableauCroi = croissant(tableauDesordre);
console.log("tableau croissant : "+tableauCroi);
let tableauDecroi = decroissant(tableauDesordre);
console.log("tableau décroissant : "+tableauDecroi);