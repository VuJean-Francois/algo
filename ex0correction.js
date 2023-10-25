function tableau(table) {
    let saisie = prompt("Saississez ou appuyez sur entrée pour arreter:");
    if(saisie == '') return table;
    table.push(saisie);
    tableau(table);
}

const tab = [];
tableau(tab);
console.log(tab);