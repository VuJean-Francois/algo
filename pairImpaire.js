function pairOuImpair(nbr) {
    if(nbr%2 === 0){
        return "pair";
    } else {
        return "impair";
    }
}
const nbr1 = 6;
const nbr2 = 9;

console.log(`${nbr1} est un nombre ${pairOuImpair(nbr1)}.`);
console.log(`${nbr2} est un nombre ${pairOuImpair(nbr2)}.`);