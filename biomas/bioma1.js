// Seleccionar el body
let body = document.body;

body.className = "bioma1";

let contenedor = document.createElement("div");
contenedor.className = "contenedor";

// Array de URLs de las imágenes
let imagenes = [
    "https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5d/Sheared_White_Sheep.png/revision/latest/scale-to-width/360?cb=20190809165347",
    "https://via.placeholder.com/150?text=Imagen+2",
    "https://via.placeholder.com/150?text=Imagen+3",
    "https://via.placeholder.com/150?text=Imagen+4",
    "https://via.placeholder.com/150?text=Imagen+5",
    "https://via.placeholder.com/150?text=Imagen+6",
    "https://via.placeholder.com/150?text=Imagen+7",
    "https://via.placeholder.com/150?text=Imagen+8",
    "https://via.placeholder.com/150?text=Imagen+9",
    "https://via.placeholder.com/150?text=Imagen+10",
    "https://via.placeholder.com/150?text=Imagen+11",
    "https://via.placeholder.com/150?text=Imagen+12"
];

imagenes.forEach((imagenes) => {
    let div = document.createElement("div");

    // Crear una imagen y establecer su fuente
    let img = document.createElement("img");
    img.className = "img-b1"
    img.src = imagenes;

    div.appendChild(img);

    contenedor.appendChild(div);
});


body.appendChild(contenedor);

let contenedor2 = document.createElement("div");
contenedor2.className = "contenedor2";
contenedor2.innerHTML = `
<h1>welcome to the plains</h1>
`;
body.appendChild(contenedor2);

let contenedor3 = document.createElement("div");
contenedor3.className = "contenedor3";
body.appendChild(contenedor3);




