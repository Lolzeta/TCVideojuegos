function mostrarJuegosMasActuales(){
    let listaOrdenada = listaVideojuegos.sort(compararFechas);
    let listaBuscada = [];
    for (let i = 0; i < 10; i++) {
        listaBuscada[i] = listaOrdenada[i];
    }
    mostrarVideojuegosHTMLGestion(listaBuscada);
    return listaBuscada;
}

function compararFechas(videojuegoA, videojuegoB){
    if(videojuegoA.yearSalida > videojuegoB.yearSalida){
        return -1;
    }
    if(videojuegoA.yearSalida < videojuegoB.yearSalida){
        return 1;
    }
    else{
        return 0;
    }
}

function compararVotaciones(videojuegoA,videojuegoB){
    if(videojuegoA.votos > videojuegoB.votos){
        return -1;
    }
    if(videojuegoA.votos < videojuegoB.votos){
        return 1;
    }
    else{
        return 0;
    }
}

function compararNombres(videojuegoA,videojuegoB){
    return videojuegoA.nombre.localeCompare(videojuegoB.nombre)
}

function juegoMejorValorado(){
    let listaOrdenada = listaVideojuegos.sort(compararVotaciones);
    let videojuegoMejorValorado = listaOrdenada[0];
    mostrarUno(videojuegoMejorValorado, 'videojuegosGestion');
}

function ordenarAlfabeticamente(){
    let listaOrdenada = mostrarJuegosMasActuales();
    let listaAlfabetizada = listaOrdenada.sort(compararNombres)
    mostrarVideojuegosHTMLGestion(listaAlfabetizada);
}

function ordenarMejorValorado(){
    let listaOrdenada = mostrarJuegosMasActuales();
    let listaValorados = listaOrdenada.sort(compararVotaciones);
    mostrarVideojuegosHTMLGestion(listaValorados);
}

let botonMejorValorado = document.getElementById('botonMejorValorado');
botonMejorValorado.addEventListener('click', function(event){
    event.preventDefault();
    juegoMejorValorado();
});
let resetearFiltros = document.getElementById('resetearFiltros');
resetearFiltros.addEventListener("click", function(event){
    event.preventDefault();
    mostrarJuegosMasActuales();
});

let ordenarAlf = document.getElementById('ordenarAlf');
ordenarAlf.addEventListener('click', function(event){
    event.preventDefault();
    ordenarAlfabeticamente();
})

let ordenarVal = document.getElementById('ordenarVal');
ordenarVal.addEventListener('click', function(event){
    event.preventDefault();
    ordenarMejorValorado();
})

document.addEventListener('DOMContentLoaded', function(event){
    mostrarJuegosMasActuales();
})