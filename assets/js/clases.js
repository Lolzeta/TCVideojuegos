class Videojuego{
    constructor(nombre, empresa, plataforma, genero, img, id){
        this.nombre = nombre;
        this.empresa = empresa;
        this.plataforma = plataforma;
        this.genero = genero;
        this.id = id;
        this.img = img;
        this.votos = [];
    }

    get nombre(){
        return this._nombre;
    }

    get empresa(){
        return this._empresa;
    }

    get plataforma(){
        return this._plataforma;
    }

    get genero(){
        return this._genero;
    }

    get img(){
        return this._img;
    }

    set img(img){
        this._img = img;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set empresa(empresa){
        this._empresa = empresa;
    }

    set plataforma(plataforma){
        this._plataforma = plataforma;
    }

    set genero(genero){
        this._genero = genero;
    }

    set id(id){
        this._id = id;
    }

    get id(){
        return this._id;
    }

    set votos(votos){
        this._votos = votos;
    }

    get votos(){
        return this._votos;
    }

    addValoracion(valoracion){
        this.votos.push(valoracion);
    }

    imprimirVotos(){
        votacion = 0;
        for (let i = 0; i < votos.length; i++) {
            votacion += votos[i].voto;
        }
        return votacion;
    }

    mostrarVideojuegos(nodoHTML){
		let bloque = document.createElement('div');
		bloque.className = 'videojuego';

		let imagen = document.createElement('img');
		imagen.src = `images/${this.img}`;
		let titulo = document.createElement('h1');
		titulo.innerHTML = this.nombre; 
		let genero = document.createElement('h2');
		genero.innerHTML = this.genero;
		let empresa = document.createElement('h3');
        empresa.innerHTML = this.empresa.nombre;
        let plataforma = document.createElement('h4');
		plataforma.innerHTML = this.plataforma.nombre;
		bloque.append(imagen);
		bloque.append(titulo);
		bloque.append(genero);
        bloque.append(empresa);
        bloque.append(plataforma);
		nodoHTML.appendChild(bloque);
    }
    
	contieneEmpresa(empresa){
		let contiene = false;
		let empresaTratado = tratarCadenasInput(empresa);
		if(empresaTratado !== null){
            let comprobacion = this.empresa.nombre.toUpperCase();
            contiene = comprobacion.includes(empresaTratado); 
		}
		return contiene;
	}

	contienePlataforma(plataforma){
		let contiene = false;
		let plataformaTratado = tratarCadenasInput(plataforma);
		if(plataformaTratado != null){
			let comprobacion = this.plataforma.nombre.toUpperCase();
            contiene = comprobacion.includes(plataformaTratado); 
		}
		return contiene;
    }
    
    videojuegoParecido(videojuego){
        let contiene = false;
        let videojuegoTratado = tratarCadenasInput(videojuego);
        if(videojuego != null){
            let comprobacion = this.nombre.toUpperCase();
            contiene = comprobacion.includes(videojuegoTratado);
        }
        return contiene;
    }
}

class Empresa{
    constructor(nombre){
        this.nombre = nombre;
        this.videojuegos = [];
    }

    get nombre(){
        return this._nombre;
    }

    get videojuegos(){
        return this._videojuegos;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set videojuegos(videojuegos){
        this._videojuegos = videojuegos;
    }

    obtenerListaVideojuegos(){
        mensaje = '';
        for (let i = 0; i < this.videojuegos.length; i++) {
            mensaje+= `${this.videojuegos[i].nombre()} <br>`;
        }
        return mensaje;
    }

    addVideojuego(videojuego){
        if(videojuego instanceof Videojuego){
        this.videojuegos.push(videojuego);
        }
    }
}

class Plataforma{
    constructor(nombre){
        this.nombre = nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }
}

class Usuario{
    constructor(nombre){
        this.nombre = nombre;
        this.videojuegosFavoritos = [];
        this.votos = [];
    }

    get nombre(){
        return this._nombre;
    }
    
    set nombre(nombre){
        this._nombre = nombre;
    }

    get videojuegosFavoritos(){
        return this._videojuegosFavoritos;
    }

    set videojuegosFavoritos(videojuegosFavoritos){
        this._videojuegosFavoritos = videojuegosFavoritos;
    }

    get votos(){
        return this._votos;
    }

    set votos(votos){
        this._votos = votos;
    }

   añadirAListaVoto(voto){
       this.votos.push(voto);
   }

   listarVideojuegosFavorito(){
       mensaje = '';
       for (let i = 0; i < this.videojuegosFavoritos.length; i++) {
           mensaje += this.videojuegosFavoritos[i].genero();
       }
       return mensaje;
    }

    addVideojuegoFavorito(videojuego){
        if(videojuego instanceof Videojuego){
            this.videojuegosFavoritos.push(videojuego);
        }
    }

    votarVideojuego(videojuego,voto){
        let valoracion = new Voto(voto, this, videojuego);
        videojuego.addValoracion(valoracion);
        listaVotos.push(valoracion);
    }
}

class Voto{
    constructor(voto, usuario, videojuego){
        this.voto = voto;
        this.usuario = usuario;
        this.videojuego = videojuego;
    }

    set voto(voto){
        this._voto = voto;
    }

    set voto(voto){
        return this._voto; 
    }

    get usuario(){
        return this._usuario; 
    }

    set usuario(usuario){
        this._usuario = usuario;
    }

    get videojuego(){
        return this._videojuego; 
    }

    set videojuego(videojuego){
        this._videojuego = videojuego;
    }
}