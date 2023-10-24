 function compterVoyelle(chaine) {
    chaine = chaine.toLowerCase();
    let compteur = 0;
    let voyelles = 'aeiouyéè';
    for(let i=0; i < chaine.length; i++) {
        console.log(chaine[i] !==+' '+voyelles.indexOf(chaine[i]));
        if(voyelles.indexOf(chaine[i]) !== -1) {        // renvois -1 si ne détecte pas de voyelles
            compteur++;
        }
    }
    return compteur;
 }
 function verifierPersonne() {
   
    let age = parseFloat(prompt("Quel est votre age?"));
    
    if(age > 5){
        let sexe  = prompt('Quel est votre genre?');
        let prenom = prompt('Quel est votre prénom?');
        
        // On vérifie si les prénom  comporte moins de 2 voyelles
        let nbVoyelle = compterVoyelle(prenom);
        if(nbVoyelle < 2) {
            return false;
        }
        alert('Bonjour '+prenom+', votre prénom comporte '+compterVoyelle(prenom)+' voyelles');
        if(sexe == 'femme') {
           if(age <= 10) {
                alert('Bonjour fillette.');
            } else if(age > 10 && age <= 18) {
                alert('Bonjour Mademoiselle.');
            } else if(age > 18 && age <= 60) {
                alert('Bonjour Madame.');
            } else {
                alert('Bonjour Mamie');
            }
        }
        else if(sexe == 'homme') {
             if(age <= 11) {
                alert('Bonjour petit garçon.');
            } else if(age > 11 && age <= 15) {
                alert('Bonjour Jeune Garçon.');
            } else if(age > 15 && age <= 17) {
                alert('Bonjour Jeune Homme.');
            } else if(age == 18) {
                alert('Bienvenue dans la vie adulte');
            } else if(age > 18 && age <= 30) {
    
            } else if(age > 30 && age <= 40) {
                alert('Bonjour le trentenaire');
            } else if(age > 40 && age <= 50) {
                alert('Bonjour le quadragénaire');
            } else if(age == 50){
                alert('Félicitations pour le demi-siècle');
            } else if(age > 50 && age <= 60) {
                alert('Bonjour le quinquagénaire');
            }
            else {
                alert('Bonjour papi.');
            }
    
        } else if(sexe == 'autre') {
            let question = prompt('Qui êtes vous??');
            switch(question){
                case 'non-binaire':
                    alert('0 ou 1 mon coeur balance');
                break;
                case 'asexuel':
                    alert('Ici nous aimons tout le monde.');
                break;
                case 'transgenre':
                    alert('Bienvenue à vous.');
                break;
                default:
                    alert('On ne connait pas votre genre mais on est heureus de voir.')
            }
        } 
        else{
            alert('Imposssible de vous accueillir');
        }
    }

    
 }

 verifierPersonne();

