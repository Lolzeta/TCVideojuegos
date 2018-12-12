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