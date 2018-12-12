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
    plataforma = listaPlataformas.find( x => x.nombre === nombrePlataforma.value);
    if(plataforma === undefined){
        plataforma = new Plataforma(nombrePlataforma.value);
        listaPlataformas.push(plataforma);
    }
    let videojuego = new Videojuego(nombreVideojuego.value,empresa, plataforma, nombreGenero.value,"noreconocido.jpg", undefined);
    listaVideojuegos.push(videojuego);
    videojuego.id = listaVideojuegos.length;
    empresa.addVideojuego(videojuego);
    incluirVideojuegoHTML(videojuego);
}

function validarNombre(){
    let validado = false;
    let nombre = document.getElementById('nombreVideojuego').value;
    if(nombre!==""){
        validado = true;
    }
    return validado;
}

function validarEmpresa(){
    let validado = false;
    let empresa = document.getElementById('nombreEmpresa').value;
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
    let genero = document.getElementById('nombreGenero').value;
    let sintax = new RegExp(/^([a-zA-Z]{2,})$/,"g");
    if(sintax.test(genero)){
        resultado = true;
    }
    return validado;
}

function saltarErrores(){
    let errorNombre = document.getElementById('nombreVideojuego').nextElementSibling;;
    let errorPlataforma = document.getElementById('nombrePlataforma').nextElementSibling;;
    let errorEmpresa = document.getElementById('nombreEmpresa').nextElementSibling;;
    let errorGenero = document.getElementById('nombreGenero').nextElementSibling;;
    

    if(!validarNombre()){
        errorNombre.innerHTML = "El nombre no puede estar vacio";
    } else{
        errorNombre.innerHTML = "";
    }

    if(!validarPlataforma()){
        errorPlataforma.innerHTML = "La plataforma no puede estar vacia";
    } else{
        errorPlataforma.innerHTML = "";
    }

    if(!validarEmpresa()){
        errorEmpresa.innerHTML = "La empresa no puede estar vacia";
    } else{
        errorEmpresa.innerHTML = "";
    }

    if(!validarGenero()){
        errorGenero.innerHTML = "El genero tiene que tener dos letras, o mas";
    } else{
        errorGenero.innerHTML = "";
    }
}

let botonCrearVideojuego = document.getElementById('botonCrearVideojuego');
botonCrearVideojuego.addEventListener('click', function(event){
    event.preventDefault();
    if(validarEmpresa() && validarNombre() && validarGenero() && validarPlataforma()){
        crearVideojuego();
    } else{
        saltarErrores();
    }
});