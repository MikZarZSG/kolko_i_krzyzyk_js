var pola = [];

for(i = 0; i < 9; i++) {
    var nazwa = "pole" + i;
    pola.push(document.getElementById(nazwa));
    pola[i].addEventListener("click", akcjaDlaPola.bind(null, i),  false);
}

function akcjaDlaPola(id) {
    console.log(id);
}