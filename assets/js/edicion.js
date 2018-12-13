function crearVideojuego(){
    let nombreVideojuego = document.getElementById("nombreVideojuego");
    let nombreEmpresa = document.getElementById("nombreEmpresa");
    let nombrePlataforma = document.getElementById("nombrePlataforma");
    let nombreGenero = document.getElementById("nombreGenero");
    let nombreYearSalida = document.getElementById("nombreYearSalida");
    // Hacer validaciones
    empresa = listaEmpresas.find( x => x.nombre === nombreEmpresa.value);
    if(empresa === undefined){
        empresa = new Empresa(nombreEmpresa.value);
        listaEmpresas.push(empresa);
    }
    plataforma = listaPlataformas.find( x => x.nombre === nombrePlataforma.value);
    if(plataforma === undefined){
        plataforma = new Plataforma(nombrePlataforma.value);
        listaPlataformas.push(plataforma);
    }
    let videojuego = new Videojuego(nombreVideojuego.value,empresa, plataforma, nombreGenero.value,"noreconocido.jpg", nombreYearSalida.value, undefined);
    listaVideojuegos.push(videojuego);
    videojuego.id = listaVideojuegos.length;
    empresa.addVideojuego(videojuego);
    incluirVideojuegoHTML(videojuego);
}

function validarNombre(id){
    let validado = false;
    let nombre = document.getElementById(id).value;
    if(nombre!==""){
        validado = true;
    }
    return validado;
}

function validarEmpresa(id){
    let validado = false;
    let empresa = document.getElementById(id).value;
    if(empresa!==""){
        validado = true;
    }
    return validado;
}

function validarPlataforma(){
    let validado = false;
    let plataforma = document.getElementById('nombrePlataforma').value;
    if(plataforma!==""){
        validado = true;
    }
    return validado;
}

function validarGenero(){
    let validado = false;
    let genero = document.getElementById('nombreGenero').value.trim();
    if(genero.match(/^[a-zA-Z]{2,}$/)){
        validado = true;
    }
    return validado;
}

function validarDate(){
    let validado = true;
    let salida = document.getElementById('nombreYearSalida').value.trim();
    if(salida < 1971 && salida > 2018 || salida === ''){
       validado = false; 
    }
    return validado;
}

function saltarErroresUno(){
    let errorNombre = document.getElementById('nombreVideojuego').nextElementSibling;
    let errorPlataforma = document.getElementById('nombrePlataforma').nextElementSibling;
    let errorEmpresa = document.getElementById('nombreEmpresa').nextElementSibling;
    let errorGenero = document.getElementById('nombreGenero').nextElementSibling;
    let errorSalida = document.getElementById('nombreYearSalida').nextElementSibling;
    

    if(!validarNombre('nombreVideojuego')){
        errorNombre.innerHTML = "El nombre no puede estar vacio";
    } else{
        errorNombre.innerHTML = "";
    }

    if(!validarPlataforma()){
        errorPlataforma.innerHTML = "La plataforma no puede estar vacia";
    } else{
        errorPlataforma.innerHTML = "";
    }

    if(!validarEmpresa('nombreEmpresa')){
        errorEmpresa.innerHTML = "La empresa no puede estar vacia";
    } else{
        errorEmpresa.innerHTML = "";
    }

    if(!validarGenero()){
        errorGenero.innerHTML = "El genero tiene que tener dos letras, o mas";
    } else{
        errorGenero.innerHTML = "";
    }

    if(!validarDate()){
        errorSalida.innerHTML = "El año debe de ser mayor a 1971 y menor o igual a 2018";
    } else {
        errorGenero.innerHTML = "";
    }
}

function todoOkUno(){
    document.getElementById('nombreVideojuego').nextElementSibling.innerHTML = "";
    document.getElementById('nombrePlataforma').nextElementSibling.innerHTML = "";
    document.getElementById('nombreEmpresa').nextElementSibling.innerHTML = "";
    document.getElementById('nombreGenero').nextElementSibling.innerHTML = "";
    document.getElementById('nombreYearSalida').nextElementSibling.innerHTML = "";
}

function todoOkDos(){
    document.getElementById('nombreVideojuegoACambiar').nextElementSibling.innerHTML = "";
    document.getElementById('nombreEmpresaACambiar').nextElementSibling.innerHTML = "";
}


let botonCrearVideojuego = document.getElementById('botonCrearVideojuego');
botonCrearVideojuego.addEventListener('click', function(event){
    event.preventDefault();
    if(validarEmpresa('nombreEmpresa') && validarNombre('nombreVideojuego') && validarGenero() && validarPlataforma() && validarDate()){
        crearVideojuego();
        todoOkUno();
    } else{
        saltarErroresUno();
    }
});

function cambiarEmpresaVideojuego(){
    let videojuego = listaVideojuegos.find(x => x.nombre === document.getElementById('nombreVideojuegoACambiar').value);
    let antiguaEmpresa = videojuego.empresa;
    let empresa = listaEmpresas.find(x => x.nombre === document.getElementById('nombreEmpresaACambiar').value);
    if(empresa === undefined){
        empresa = new Empresa(document.getElementById('nombreEmpresaACambiar').value);
        listaEmpresas.push(empresa);
    }
    if(videojuego.contieneEmpresa(empresa)){
        console.log("El videojuego seleccionado ya tiene esta empresa");
    } else{
        videojuego.empresa = empresa;
        antiguaEmpresa.quitarVideojuego(videojuego);
        empresa.addVideojuego(videojuego);
        mostrarUno(videojuego); 
    }
}

let botonCambiarEmpresa = document.getElementById('botonCambiarEmpresa');
botonCambiarEmpresa.addEventListener('click', function(event){
    event.preventDefault();
    if(validarEmpresa('nombreEmpresaACambiar') && validarNombre('nombreVideojuegoACambiar')){
        cambiarEmpresaVideojuego();
        todoOkDos();
    } else{
        saltarErroresDos();
    }
});

function saltarErroresDos(){
    let errorVideojuego = document.getElementById('nombreVideojuegoACambiar').nextElementSibling;
    let errorEmpresa = document.getElementById('nombreEmpresaACambiar').nextElementSibling;
    
    if(!validarNombre('nombreVideojuegoACambiar')){
        errorVideojuego.innerHTML = "El nombre no puede estar vacio";
    } else{
        errorVideojuego.innerHTML = "";
    }

    if(!validarEmpresa('nombreEmpresaACambiar')){
        errorEmpresa.innerHTML = "La empresa no puede estar vacia";
    } else{
        errorEmpresa.innerHTML = "";
    }
}