function pays(){
    let pays = prompt('Dans quel pays habitez-vous?');
    pays = pays.toLowerCase();
    switch(pays){
        case 'france':
            alert('French Baguette =)');
        break;
        case 'grande-bretagne':
            alert('Fish and chips');
        break;
        case 'espagne':
            alert('Paella');
        break;
        default:
            alert('Hors Europe');
    }
}
pays();

// prompt('Dans quel pays habitez-vous?') == 'france' ? alert('French Baguette =)')