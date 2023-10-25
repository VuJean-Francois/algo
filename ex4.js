function up(tableau) {
    tableau.sort(function(a, b){return a - b});
    return;
}
 
function dec(tableau) {
    tableau.sort(function(a, b){return b - a});
    return;
}

let tableauDesordre = [78,64,89,18,22,35,29,56,22];
up(tableauDesordre);
console.log(`tableau croissant : ${tableauDesordre}`);
dec(tableauDesordre);
console.log(`tableau décroissant : ${tableauDesordre}`);