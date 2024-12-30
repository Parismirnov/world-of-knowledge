let header = document.createElement('header');
header.className = "header"

let contenedor = document.createElement('div');
contenedor.className = "contenedor-I1"
header.appendChild(contenedor);

let lista = document.createElement('div')
lista.className = "lista-I1"
contenedor.appendChild(lista);

let boton = document.createElement('div');
boton.className = "boton-l1"
boton.innerHTML = `
    <div class="menu-lateral-cont">
    <buttom class="activarboton">
        <span class="material-symbols-outlined">menu</span>
    </buttom>
    <span class="menu-text">biomas</span>
    </div>
    <div class="menu-lateral">
        <a href="">Plains</a>
        <a href="">Desert</a>
        <a href="">Savanna</a>
        <a href="">Taiga</a>
        <a href="">Snowy Plains</a>
        <a href="">Forest</a>
        <a href="">Jungle</a>
        <a href="">Ice Spikes</a>
        <a href="">Savanna Plateau</a>
        <a href="">Windswept Forest</a>
        <a href="">River</a>
        <a href="">Frozen Ocean</a>
        <a href="">Ocean</a>
        <a href="">Dripstone Caves</a>
        <a href="">Lush Caves</a>
        <a href="">Deep Dark</a>
        <a href="">Nether Wastes</a>
        <a href="">Crimson Forest</a>
        <a href="">Warped Forest</a>
        <a href="">Basalt Deltas</a>
        <a href="">Soul Sand Valley	</a>
        <a href="">The End</a>
        <a href="">Village	</a>
        <a href="">Pillager Outpost	</a>
        <a href="">Desert Temple	</a>
        <a href="">Jungle Temple	</a>
        <a href="">Swamp Hut	</a>
        <a href="">Igloo	</a>
        <a href="">Shipwreck	</a>
        <a href="">Ocean Ruins</a>
        <a href="">Mineshaft	</a>
        <a href="">Stronghold	</a>
        <a href="">Ocean Monument	</a>
        <a href="">Woodland Mansion	</a>
        <a href="">Ancient City	</a>
        <a href="">Ruined Portal	</a>
        <a href="">Bastion Remnant	</a>
        <a href="">Nether Fortress	</a>
        <a href="">Ruined Portal	</a>
        <a href="">End City	</a>
    </div>
`;
lista.appendChild(boton);


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
        <div class="menu-lateral2">
        <a href="">Crafting</a>
        <a href="">Potions</a>
        <a href=""> Enchantments</a>
        <a href="">Trading</a>
        <a href="">Farms</a>
        </div>
    </div>

    <div class="logo-m1">
        <div class="img1"><img src="https://1000marcas.net/wp-content/uploads/2020/01/Minecraft-Logo-2013.png" alt="Logo 1"></div>
        <div class="img2"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Minecraft-creeper-face.jpg/640px-Minecraft-creeper-face.jpg" alt="Logo 2"></div>
    </div>
`;

contenedor.appendChild(menu);



export {header}