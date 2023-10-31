function estNbrPrem(n) {
    if(n<=1) return false;
    if(n<=3) return true;
    if(n%2 === 0 || n%3 === 0) return false;
    for(let i=5; i*i <= n; i+=6) {
        if(n%i === 0 || n%(i+2) === 0) return false;
    }
    return true;
}

function sommeNbrPrem(N) {
    let somme  = 0;
    for (let i = 2; i <= N; i++) {
        if(estNbrPrem(i)) {
            somme += i;
        }
    }
    return somme;

}

// exemple d'utilisation avec N = 10
const N = prompt('donner N');
//let tab = estNbrPrem(n);
const resultat = sommeNbrPrem(N);
//console.log(`La suite de nombre premier ${n} est : ${tab[estNbrPrem]}`);
console.log(`La somme des nombres premiers jusqu'à ${N} est : ${resultat}`);