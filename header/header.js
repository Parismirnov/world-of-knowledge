let header = document.createElement('header');
header.className = "header";

let contenedor = document.createElement('div');
contenedor.className = "contenedor-I1";
header.appendChild(contenedor);

let lista = document.createElement('div');
lista.className = "lista-I1";
contenedor.appendChild(lista);

let boton = document.createElement('div');
boton.className = "boton-l1";
boton.innerHTML = `
    <div class="menu-lateral-cont">
        <buttom class="activarboton">
            <span class="material-symbols-outlined">menu</span>
        </buttom>
        <span class="menu-text">biomas</span>
    </div>
`;
lista.appendChild(boton);

let biomas = [
    {nombre: "Plains", link: "biomas/bioma1.html"},
    {nombre: "Desert", link: "biomas/bioma2.html"},
    {nombre: "Savanna", link: "biomas/bioma3.html"},
    {nombre: "Taiga", link: "biomas/bioma4.html"},
    {nombre: "Snowy Plains", link: "biomas/bioma5.html"},
    {nombre: "Forest", link: "biomas/bioma6.html"},
    {nombre: "Jungle", link: "biomas/bioma7.html"},
    {nombre: "Ice Spikes", link: "biomas/bioma8.html"},
    {nombre: "Savanna Plateau", link: "biomas/bioma9.html"},
    {nombre: "Windswept Forest", link: "biomas/bioma10.html"},
    {nombre: "River", link: "biomas/bioma11.html"},
    {nombre: "Frozen Ocean", link: "biomas/bioma12.html"},
    {nombre: "Ocean", link: "biomas/bioma13.html"},
    {nombre: "Dripstone Caves", link: "biomas/bioma14.html"},
    {nombre: "Lush Caves", link: "biomas/bioma15.html"},
    {nombre: "Deep Dark", link: "biomas/bioma16.html"},
    {nombre: "Nether Wastes", link: "biomas/bioma17.html"},
    {nombre: "Crimson Forest", link: "biomas/bioma18.html"},
    {nombre: "Warped Forest", link: "biomas/bioma19.html"},
    {nombre: "Basalt Deltas", link: "biomas/bioma20.html"},
    {nombre: "Soul Sand Valley", link: "biomas/bioma21.html"},
    {nombre: "The End", link: "biomas/bioma22.html"},
    {nombre: "Village", link: "biomas/bioma23.html"},
    {nombre: "Pillager Outpost", link: "biomas/bioma24.html"},
    {nombre: "Desert Temple", link: "biomas/bioma25.html"},
    {nombre: "Jungle Temple", link: "biomas/bioma26.html"},
    {nombre: "Swamp Hut", link: "biomas/bioma27.html"},
    {nombre: "Igloo", link: "biomas/bioma28.html"},
    {nombre: "Shipwreck", link: "biomas/bioma29.html"},
    {nombre: "Ocean Ruins", link: "biomas/bioma30.html"},
    {nombre: "Mineshaft", link: "biomas/bioma31.html"},
    {nombre: "Stronghold", link: "biomas/bioma32.html"},
    {nombre: "Ocean Monument", link: "biomas/bioma33.html"},
    {nombre: "Woodland Mansion", link: "biomas/bioma34.html"},
    {nombre: "Ancient City", link: "biomas/bioma35.html"},
    {nombre: "Ruined Portal", link: "biomas/bioma36.html"},
    {nombre: "Bastion Remnant", link: "biomas/bioma37.html"},
    {nombre: "Nether Fortress", link: "biomas/bioma38.html"},
    {nombre: "End City", link: "biomas/bioma39.html"}
];

let menuLateral = document.createElement('div');
menuLateral.className = "menu-lateral";

biomas.forEach(bioma => {
    let link = document.createElement('a');
    link.href = bioma.link;
    link.innerText = bioma.nombre;
    menuLateral.appendChild(link);
});

boton.appendChild(menuLateral);

let menu = document.createElement('div');
menu.className = "menu-I1";
menu.innerHTML = `
    <div class="about-m1">About</div>
    <div class="blog-m1">Blog</div>
    <div class="tuto-m1">
        <div class="tuto-m1-cont">
            <button class="boton-tuto">
                <span class="material-symbols-outlined">menu</span>
            </button>
            <span class="menu-text">tutoriales</span>
        </div>
    </div>
    <div class="logo-m1">
        <div class="img1"><img src="https://1000marcas.net/wp-content/uploads/2020/01/Minecraft-Logo-2013.png" alt="Logo 1"></div>
        <div class="img2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Minecraft-creeper-face.jpg/640px-Minecraft-creeper-face.jpg" alt="Logo 2"></div>
    </div>
`;

contenedor.appendChild(menu);

let tutoriales = [
    {nombre: "Crafting", link: "tutoriales/crafting.html"},
    {nombre: "Potions", link: "tutoriales/potions.html"},
    {nombre: "Enchantments", link: "tutoriales/enchantments.html"},
    {nombre: "Trading", link: "tutoriales/trading.html"},
    {nombre: "Farms", link: "tutoriales/farms.html"}
];

let menuLateral2 = document.createElement('div');
menuLateral2.className = "menu-lateral2";

tutoriales.forEach(tutorial => {
    let link = document.createElement('a');
    link.href = tutorial.link;
    link.innerText = tutorial.nombre;
    menuLateral2.appendChild(link);
});

let tutoM1 = menu.querySelector('.tuto-m1');
tutoM1.appendChild(menuLateral2);

export { header };
