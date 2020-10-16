//Zmienne
var pola = [];
var odpowiedzi = new Array(9);
var gracz = "O";

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
    kolejGracza(gracz);
    
    //Usunięcie listenera
    var nazwa = "pole" + id;
    var new_el = pola[id].cloneNode(false);
    pola[id].parentNode.replaceChild(new_el, pola[id]);
}

function oznaczPole(id) {
    if(gracz == "O") {
        pola[id].classList.add("kolko");
        odpowiedzi[id] = "O";
        gracz = "X";
    } else if(gracz == "X") {
        pola[id].classList.add("krzyzyk");
        odpowiedzi[id] = "X";
        gracz = "O";
    }
    pola[id].classList.add("zablokowany");
}

function kolejGracza(gracz) {
    kolejka.innerHTML = "<h2>" + gracz + "</h2>";
}