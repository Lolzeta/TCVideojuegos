function buscarVideojuegoPorEmpresaYPlataforma(){
    let listaBuscada = [];
    let plataforma = tratarCadenasInput(document.getElementById('#plataformaBuscada').value);
    let empresa = tratarCadenasInput(document.getElementById('#empresaBuscada').value);
    for (let i = 0; i < listaVideojuegos.length; i++) {
        if(listaVideojuegos[i].empresa.includes(empresa) && listaVideojuegos[i].plataforma.includes(plataforma)){
            listaBuscada.push(listaVideojuegos[i]);
        }
    }
    return listaBuscada;
}

function devolverSimilar(){
    let listaBuscada = [];
    let videojuegoId = document.getElementById('videojuegoBuscado').value;
    let videojuego = listaVideojuegos.find( x => x.id===videojuegoId);
    for (let i = 0; i < listaVideojuegos.length; i++) {
        if(videojuego.genero===listaVideojuegos[i].genero && videojuego.plataforma===listaVideojuegos[i].plataforma){
            listaBuscada.push(listaVideojuegos[i]);
        }
    }
    return listaBuscada;
}

function buscarElementoUsuario(){
    let usuarioBuscado = document.getElementById('usuarioBuscado').value;
    let usuarioEncontrado = listaUsuarios.find( x => x.nombre===usuarioBuscado);
    return usuarioEncontrado.listarVideojuegosFavorito();
}

function buscarVideojuegoPorNombre(){
    let videojuegoBuscadoNombre = document.getElementById('videojuegoBuscadoNombre').value;
    let videojuego = listaVideojuegos.find( x => x.nombre===videojuegoBuscadoNombre);
    return videojuego;
}