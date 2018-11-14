function mostrarVideojuegosHTML(videojuegosMostrar){
    let divVideojuegos  = document.getElementById("videojuegos");
    divVideojuegos.innerHTML = "";
    if(videojuegosMostrar.length === 0){
        divVideojuegos.innerHTML = "NO HAY VIDEOJUEGOS QUE MOSTRAR";
    }else{
        videojuegosMostrar.forEach( videojuego => videojuego.mostrarEnHTML(divVideojuegos));
    }
}