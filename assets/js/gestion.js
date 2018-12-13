function mostrarJuegosMasActuales(){
    listaOrdenada = listaVideojuegos.sort(compararFechas);
    listaBuscada = [];
    for (let i = 0; i < 10; i++) {
        listaBuscada[i] = listaOrdenada[i];
    }
    mostrarVideojuegosHTMLGestion(listaBuscada);
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

document.addEventListener('DOMContentLoaded', function(event){
    mostrarJuegosMasActuales();
})