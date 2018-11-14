let creadorVal = new Creador("Valve");
let creadorBli = new Creador("Blizzard");
let creadorNin  = new Creador("Nintendo");
let creadorEA = new Creador("EA");


let listaCreador = [creadorVal, creadorEA, creadorNin, creadorEA];

// let generoFPS = new Genero("FPS");
// let generoPlataformas = new Genero("Plataformas");
// let generoRol = new Genero("Rol");
// let generoAventuras = new Genero("Aventuras");

let videojuegos = [];

let videojuegoCS = new Videojuego("Counter-Strike", creadorVal, "FPS");
let videojuegoHL = new Videojuego("Half-Life", creadorVal, "FPS");
let videojuegoPortal = new Videojuego("Portal", creadorVal, "FPS");
let videojuegoDD = new Videojuego("Day of Defeat", creadorVal, "FPS");

videojuegos.push(videojuegoCS);
videojuegos.push(videojuegoHL);
videojuegos.push(videojuegoPortal);
videojuegos.push(videojuegoDD);

creadorVal.incluirVideojuego(videojuegoCS);
creadorVal.incluirVideojuego(videojuegoHL);
creadorVal.incluirVideojuego(videojuegoPortal);
creadorVal.incluirVideojuego(videojuegoDD);

let videojuegoWOW = new Videojuego("World of Warcraft", creadorBli, "Rol");
let videojuegoOW = new Videojuego("Overwatch", creadorBli, "FPS");
let videojuegoDiablo = new Videojuego("Diablo", creadorBli, "Rol");

videojuegos.push(videojuegoWOW);
videojuegos.push(videojuegoOW);
videojuegos.push(videojuegoDiablo);

creadorBli.incluirVideojuego(videojuegoWOW);
creadorBli.incluirVideojuego(videojuegoOW);
creadorBli.incluirVideojuego(videojuegoDiablo);

let videojuegoMB = new Videojuego("Super Mario Bros", creadorNin, "Plataformas");
let videojuegoTLZ = new Videojuego("The Legend of Zelda", creadorNin, "Aventuras");

videojuegos.push(videojuegoMB);
videojuegos.push(videojuegoTLZ);

creadorNin.incluirVideojuego(videojuegoMB);
creadorNin.incluirVideojuego(videojuegoTLZ);

let videojuegoBF = new Videojuego("Battlefield", creadorEA, "FPS");
let videojuegoME = new Videojuego("Mass Effect", creadorEA, "Rol");

videojuegos.push(videojuegoBF);
videojuegos.push(videojuegoME);

creadorEA.incluirVideojuego(videojuegoBF);
creadorEA.incluirVideojuego(videojuegoME);

mostrarVideojuegosHTML(videojuegos);