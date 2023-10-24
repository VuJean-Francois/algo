// les tableaux multidimensions
let tableaux = [
    ['Jérémie','Aubrejat','03/03/1985','Mr'],
    ['Abdallah','Belhouari','07/09/1970','Mr'],
    ['Julian','Bouchetard','26/12/2001','Mr'],
    ['Séphora','Ciserane','23/01/1991', 'Mme']
];
for(let i=0; i < tableaux[3][2]; i++) {
    console.log(tableaux[i][0]);
    for(let c=0; c < tableaux[i].length; c++) {
        console.log(tableaux[i][c]);
    }
}