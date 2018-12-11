let empresaBLZ = new Empresa("Blizzard");
let empresaVALVE = new Empresa("Valve");
let empresaNIN = new Empresa("Nintendo");
let empresaEA = new Empresa("EA");

let plataformaPC = new Plataforma("PC");
let plataformaPS4 = new Plataforma("PS4");
let plataformaXBOX = new Plataforma("XBOX");
let plataformaSWITCH = new Plataforma("Switch");

let listaEmpresas = [empresaBLZ, empresaVALVE, empresaNIN, empresaEA];

let listaVideojuegos = [];

let videojuegoHL = new Videojuego("Half-Life",empresaVALVE, plataformaPC, "FPS",  "half-life.jpg", undefined);
let videojuegoHL2 = new Videojuego("Half-Life 2",empresaVALVE, plataformaPC, "FPS", "half-life2.jpg", undefined);
let videojuegoHL2E1 = new Videojuego("Half-Life 2 - Episodio Uno",empresaVALVE, plataformaPC, "FPS", "half-life2e1.jpg",  undefined);
let videojuegoHL2E2 = new Videojuego("Half-Life 2 - Episodio Dos",empresaVALVE, plataformaPC, "FPS", "half-life2e2.jpg", undefined);

empresaNIN.addVideojuego(videojuegoHL);
empresaNIN.addVideojuego(videojuegoHL2);
empresaNIN.addVideojuego(videojuegoHL2E1);
empresaNIN.addVideojuego(videojuegoHL2E2);

listaVideojuegos.push(videojuegoHL);
videojuegoHL.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoHL2);
videojuegoHL2.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoHL2E1);
videojuegoHL2E1.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoHL2E2);
videojuegoHL2E2.id = listaVideojuegos.length;

let videojuegoWOW = new Videojuego("World of Warcraft", empresaBLZ, plataformaPC, "MMORPG", "wow.jpg", undefined);
let videojuegoHS = new Videojuego("HearthStone", empresaBLZ, plataformaPC, "Juego de Cartas", "hs.jpg", undefined);
let videojuegoOW = new Videojuego("Overwatch", empresaBLZ, plataformaPC, "FPS", "ow.jpg", undefined);
let videojuegoDIA = new Videojuego("Diablo III", empresaBLZ, plataformaPC, "Rol", "diablo.jpg", undefined);
let videojuegoHOTS = new Videojuego("Heroes of the Storm", empresaBLZ, plataformaPC, "MOBA", "hots.jpg", undefined);

empresaBLZ.addVideojuego(videojuegoWOW);
empresaBLZ.addVideojuego(videojuegoHS);
empresaBLZ.addVideojuego(videojuegoOW);
empresaBLZ.addVideojuego(videojuegoDIA);
empresaBLZ.addVideojuego(videojuegoHOTS);

listaVideojuegos.push(videojuegoWOW);
videojuegoWOW.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoHS);
videojuegoHS.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoOW);
videojuegoOW.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoDIA);
videojuegoDIA.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoHOTS);
videojuegoHOTS.id = listaVideojuegos.length;

let videojuegoMBO = new Videojuego("Super Mario Odyssey", empresaNIN, plataformaSWITCH, "Plataformas", "smo.jpg", undefined);
let videojuegoMK = new Videojuego("Mario Kart 8", empresaNIN, plataformaSWITCH, "Carreras", "mk8.jpg", undefined);
let videojuegoSSB = new Videojuego("Super Smash Bros Ultimate", empresaNIN, plataformaSWITCH, "Peleas", "SSB.jpg", undefined);
let videojuegoZEL = new Videojuego("Zelda: Breath of the Wild", empresaNIN, plataformaSWITCH, "Aventuras", "zelda.jpg", undefined);

empresaNIN.addVideojuego(videojuegoMBO);
empresaNIN.addVideojuego(videojuegoMK);
empresaNIN.addVideojuego(videojuegoSSB);
empresaNIN.addVideojuego(videojuegoZEL);

listaVideojuegos.push(videojuegoMBO);
videojuegoMBO.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoMK);
videojuegoMK.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoSSB);
videojuegoSSB.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoZEL);
videojuegoZEL.id = listaVideojuegos.length;

let videojuegoNFS = new Videojuego("Need for Speed", empresaEA, plataformaPS4, "Carrera", "NFS.jpg", undefined);
let videojuegoBF = new Videojuego("Battlefield I", empresaEA, plataformaXBOX, "FPS", "BF.png", undefined);
let videojuegoSIMS = new Videojuego("SIMS 4", empresaEA, plataformaPS4, "Simulacion", "SIMS.jpg", undefined);
let videojuegoFIFA = new Videojuego("FIFA 18", empresaEA, plataformaPS4, "Deportes", "FIFA.jpg", undefined);
let videojuegoTF = new Videojuego("TitanFall 2", empresaEA, plataformaXBOX, "FPS", "TF.jpg", undefined);
let videojuegoGW = new Videojuego("Plants vs Zombies: Garden Warfare", empresaEA, plataformaXBOX, "Disparos", "GW.jpg", undefined);

empresaEA.addVideojuego(videojuegoNFS);
empresaEA.addVideojuego(videojuegoBF);
empresaEA.addVideojuego(videojuegoSIMS);
empresaEA.addVideojuego(videojuegoFIFA);
empresaEA.addVideojuego(videojuegoTF);
empresaEA.addVideojuego(videojuegoGW);

listaVideojuegos.push(videojuegoNFS);
videojuegoNFS.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoBF);
videojuegoBF.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoSIMS);
videojuegoSIMS.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoFIFA);
videojuegoFIFA.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoTF);
videojuegoTF.id = listaVideojuegos.length;
listaVideojuegos.push(videojuegoGW);
videojuegoGW.id = listaVideojuegos.length;

mostrarVideojuegosHTML(listaVideojuegos);

