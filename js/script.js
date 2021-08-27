//obteniendo todos los elementos necesarios
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const quit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");

// If el Botón de Comenzar es Clickeado
start_btn.onclick = ()=> {
    info_box.classList.add("activeInfo");//muestra info box
}


// If el Botón de Salir es Clickeado
exit_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo");// oculta info box
}