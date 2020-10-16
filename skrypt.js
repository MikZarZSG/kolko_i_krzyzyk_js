//Zmienne
var pola = [];
var odp = new Array(9);
var gracz = "O";
var ruchy = 0;

var kolejka = document.querySelector(".kolejka");



//Załadowanie strony
for(i = 0; i < 9; i++) {
    var nazwa = "pole" + i;
    pola.push(document.getElementById(nazwa));
    pola[i].addEventListener("click", akcjaDlaPola.bind(null, i),  false);
}

kolejGracza(gracz);



//Funkcje
function akcjaDlaPola(id) {
    oznaczPole(id);
    ruchy++;
    if(!czyKoniecGry()) {
        zmianaGracza();
        kolejGracza();
    }
    
    //Usunięcie listenera
    var nazwa = "pole" + id;
    var new_el = pola[id].cloneNode(false);
    pola[id].parentNode.replaceChild(new_el, pola[id]);
}

function oznaczPole(id) {
    if(gracz == "O") {
        pola[id].classList.add("kolko");
        odp[id] = "O";
    } else if(gracz == "X") {
        pola[id].classList.add("krzyzyk");
        odp[id] = "X";
    }
    pola[id].classList.add("zablokowany");
}

function kolejGracza() {
    kolejka.innerHTML = "<h2>" + gracz + "</h2>";
}

function czyKoniecGry() {
    if(     (odp[0] != null && odp[0] == odp[1] && odp[1] == odp[2]) ||
            (odp[3] != null && odp[3] == odp[4] && odp[4] == odp[5]) ||
            (odp[6] != null && odp[6] == odp[7] && odp[7] == odp[8]) ||
            (odp[0] != null && odp[0] == odp[3] && odp[3] == odp[6]) ||
            (odp[1] != null && odp[1] == odp[4] && odp[4] == odp[7]) ||
            (odp[2] != null && odp[2] == odp[5] && odp[5] == odp[8]) ||
            (odp[0] != null && odp[0] == odp[4] && odp[4] == odp[8]) ||
            (odp[2] != null && odp[2] == odp[4] && odp[4] == odp[6])
    ) {
        console.log("Gratulacje! " + gracz);
        return true;        
    } else if(ruchy >= 9) {
        console.log("Remis!");
        return true;
    }
    
    return false;
}

function zmianaGracza() {
    if(gracz == "O") gracz = "X";
    else if(gracz == "X") gracz = "O";
}