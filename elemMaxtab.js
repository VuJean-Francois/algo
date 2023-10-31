function findMax(tab) {
    let max = tab[0];
    for(let i=1;i< tab.length; i++) {
        if(tab[i] > max) {
            max = tab[i];
        }
    }
    return max;
}

const monTab = [50, 3, 9, 1, 8, 2];
const max = findMax(monTab);
console.log("Le MAX du tableau : " + max);