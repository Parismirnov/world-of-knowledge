let section = document.createElement('section');
section.className = "section-b1"

let contenedor = document.createElement('div');
contenedor.className = "contenedor-b1"
section.appendChild(contenedor);

let lista = document.createElement('a')
lista.className = "lista-b1"
contenedor.appendChild(lista);

let menu = document.createElement('div');
menu.className = "menu-b1";
contenedor.appendChild(menu);

let h1 = document.createElement('h1');
h1.className = "titulo-b1";
h1.innerText = "WELCOME TO THE";
contenedor.appendChild(h1);

let h2 = document.createElement('h1');
h2.className = "titulo2-b1";
h2.innerText = "world of knowledge";
contenedor.appendChild(h2);



export{section};