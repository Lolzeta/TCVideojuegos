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

