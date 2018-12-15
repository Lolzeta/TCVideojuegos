function tratarCadenasInput(cadena){
	let cadenaResultante = null;
	if(typeof(cadena) === 'string'){
		let cadenaTratada = cadena.trim().toUpperCase();
		cadenaTratada = cadenaTratada.replace(/\s{2,}/g,' ');
		if(cadenaTratada !== ''){
			cadenaResultante = cadenaTratada;
		}
	}
	return cadenaResultante;
}

function mostrarVideojuegosHTML(listaDeVideojuegos){
	let divVideojuegos  = document.getElementById('videojuegos');
	divVideojuegos.innerHTML = '';
	if(listaDeVideojuegos.length === 0){
		divVideojuegos.innerHTML = '';
	}else{
		listaDeVideojuegos.forEach( videojuego => videojuego.mostrarVideojuegos(divVideojuegos));
	}
}

function mostrarVideojuegosHTMLGestion(listaDeVideojuegos){
	let divVideojuegos  = document.getElementById('videojuegosGestion');
	divVideojuegos.innerHTML = '';
	if(listaDeVideojuegos.length === 0){
		divVideojuegos.innerHTML = '';
	}else{
		listaDeVideojuegos.forEach( videojuego => videojuego.mostrarVideojuegos(divVideojuegos));
	}
}

function incluirVideojuegoHTML(videojuego){
	let divVideojuegos  = document.getElementById('videojuegosCreados');
	videojuego.mostrarVideojuegos(divVideojuegos);
}

function mostrarUno(videojuego, id){
	let divVideojuegos  = document.getElementById(id);
	divVideojuegos.innerHTML = "";
	videojuego.mostrarVideojuegos(divVideojuegos);
}

function creacionSelectionVideojuegos(id){
    let selection = document.getElementById(id);
    for (let i = 0; i < listaVideojuegos.length; i++) {
        let opcionNueva = document.createElement('option');
        opcionNueva.value = listaVideojuegos[i].id;
        opcionNueva.innerHTML = listaVideojuegos[i].nombre;
        selection.append(opcionNueva);
    }
}

function creacionSelectionUsuarios(id){
    let selection = document.getElementById(id);
    for (let i = 0; i < listaUsuarios.length; i++) {
        let opcionNueva = document.createElement('option');
        opcionNueva.value = listaUsuarios[i].id;
        opcionNueva.innerHTML = listaUsuarios[i].nombre;
        selection.append(opcionNueva);
    }
}
