function buscarVideojuegoPorEmpresaYPlataforma(){
    let plataformaInput = document.getElementById('plataformaBuscada');
    let empresaInput = document.getElementById('empresaBuscada');
    let plataforma = plataformaInput.value;
    let empresa = empresaInput.value;
    let listaBuscada = listaVideojuegos.filter( videojuego => videojuego.contieneEmpresa(empresa) 
                                                                && videojuego.contienePlataforma(plataforma)
	);
    mostrarVideojuegosHTML(listaBuscada);

}

    let botonEmpresaPlataforma = document.getElementById('busquedaPlataformaEmpresa');
    botonEmpresaPlataforma.addEventListener("click", function(event){
        event.preventDefault();
        buscarVideojuegoPorEmpresaYPlataforma();
    });

    resetearFiltros.addEventListener("click", function(event){
        event.preventDefault();
        mostrarVideojuegosHTML(listaVideojuegos);
    });
    
function devolverSimilar(){
    let listaBuscada = [];
    let videojuegoId = parseInt(document.getElementById('selectVideojuegos').value);
    let videojuego = listaVideojuegos.find( x => x.id===videojuegoId);
    for (let i = 0; i < listaVideojuegos.length; i++) {
        if(videojuego.genero===listaVideojuegos[i].genero && videojuego.plataforma===listaVideojuegos[i].plataforma){
            listaBuscada.push(listaVideojuegos[i]);
        }
    }
    mostrarVideojuegosHTML(listaBuscada);
}

let botonBuscarSimilar = document.getElementById('botonBuscarSimilar');
botonBuscarSimilar.addEventListener('click', function(event){
    event.preventDefault();
    devolverSimilar();
})

function buscarElementoUsuario(){
    let busquedaUsuario = parseInt(document.getElementById('selectUsuario').value);
    let usuarioEncontrado = listaUsuarios.find( x => x.id===busquedaUsuario);
    mostrarVideojuegosHTML(usuarioEncontrado.videojuegosFavoritos);
}

let botonBuscarElementoUsuario = document.getElementById('botonBuscarElementoUsuario');
botonBuscarElementoUsuario.addEventListener('click', function(event){
    event.preventDefault();
    buscarElementoUsuario();
})

function buscarVideojuegoPorNombre(){
    let videojuegoBuscadoInput = document.getElementById('videojuegoBuscadoNombre');
    let videojuegoBuscado = videojuegoBuscadoInput.value;
    let nuevaLista = listaVideojuegos.filter( videojuego => videojuego.videojuegoParecido(videojuegoBuscado));
    mostrarVideojuegosHTML(nuevaLista);
}

let botonBuscarVideojuegoNombre = document.getElementById('botonBuscarVideojuegoNombre');
botonBuscarVideojuegoNombre.addEventListener('click', function(event){
    event.preventDefault();
    buscarVideojuegoPorNombre();
});

document.addEventListener('DOMContentLoaded', function(event){
    creacionSelectionVideojuegos('selectVideojuegos');
    creacionSelectionUsuarios('selectUsuario');
})


