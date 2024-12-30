import { header } from "./header/header.js";
import { section } from "./inicio/inicio.js";

let Dom = document.querySelector("#root");
Dom.appendChild(header);
Dom.appendChild(section);

// Seleccionar elementos
let boton = document.querySelector('.activarboton');
let menuLateral = document.querySelector('.menu-lateral');

// Inicialmente ocultar el menú lateral
menuLateral.style.display = 'none';

// Agregar evento al botón
boton.addEventListener('click', () => {
    if (menuLateral.style.display === 'none') {
        menuLateral.style.display = 'block'; // Mostrar menú lateral
    } else {
        menuLateral.style.display = 'none'; // Ocultar menú lateral
    }
});

let menu = document.querySelector('.boton-tuto');
let menuLateral2 = document.querySelector('.menu-lateral2')


menuLateral2.style.display = 'none';

menu.addEventListener('click', () => {
    if (menuLateral2.style.display === 'none') {
        menuLateral2.style.display = 'block'; // Mostrar menú lateral
    } else {
        menuLateral2.style.display = 'none'; // Ocultar menú lateral
    }
});