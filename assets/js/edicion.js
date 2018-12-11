function crearVideojuego(){
    let nombreVideojuego = document.getElementById("nombreVideojuego");
    let nombreEmpresa = document.getElementById("nombreEmpresa");
    let nombrePlataforma = document.getElementById("nombrePlataforma");
    let nombreGenero = document.getElementById("nombreGenero");
    // Hacer validaciones
    empresa = listaEmpresas.find( x => x.nombre === nombreEmpresa.value);
    if(empresa === undefined){
        empresa = new Empresa(nombreEmpresa.value);
        listaEmpresas.push(empresa);
    }
    let videojuego = new Videojuego(nombreVideojuego.value,empresa, nombrePlataforma.value, nombreGenero.value, listaVideojuegos.lenght+1);
    listaVideojuegos.push(videojuego);
    empresa.addVideojuego(videojuego);
}