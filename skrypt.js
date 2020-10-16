var pola = [];

for(i = 0; i < 9; i++) {
    var nazwa = "pole" + i;
    pola.push(document.getElementById(nazwa));
    pola[i].addEventListener("click", akcjaDlaPola.bind(null, i),  false);
}

function akcjaDlaPola(id) {
    console.log(id);
    pola[id].classList.add("kolko");
    pola[id].classList.add("zablokowany");
    
    //Usunięcie listenera
    var nazwa = "pole" + id;
    var new_el = pola[id].cloneNode(false);
    pola[id].parentNode.replaceChild(new_el, pola[id]);
}