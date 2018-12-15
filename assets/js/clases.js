    class Videojuego{
    constructor(nombre, empresa, plataforma, genero, img, yearSalida, id){
        this.nombre = nombre;
        this.empresa = empresa;
        this.plataforma = plataforma;
        this.genero = genero;
        this.id = id;
        this.img = img;
        this.votos = 0;
        this.comentarios = [];
        this.yearSalida = yearSalida;
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

    set yearSalida(yearSalida){
        this._yearSalida = yearSalida;
    }

    get yearSalida(){
        return this._yearSalida;
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
        let resultado = 0;
        if(valoracion>0){
            resultado = 1;
        } else{
            resultado = -1;
        } 
        this.votos += resultado;
    }

    addComentario(comentario){
        this.comentarios.push(comentario);
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
        let yearSalida = document.createElement('h4');
        yearSalida.innerHTML = this.yearSalida;
        let votos = document.createElement('h4');
        votos.innerHTML = `Votos: ${this.votos}`
        let comentario = document.createElement('h4');
        let mensaje = 'Comentarios:</br>';
        for (let i = 0; i < this.comentarios.length; i++) {
            mensaje+= `<hr>${this.comentarios[i]}`;
        }
        comentario.innerHTML = mensaje;
		bloque.append(imagen);
		bloque.append(titulo);
		bloque.append(genero);
        bloque.append(empresa);
        bloque.append(plataforma);
        bloque.append(yearSalida);
        bloque.append(votos);
        bloque.append(comentario);
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

    contieneGenero(genero){
		let contiene = false;
		let generoTratado = tratarCadenasInput(genero);
		if(generoTratado != null){
			let comprobacion = this.genero.toUpperCase();
            contiene = comprobacion.includes(generoTratado); 
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

    quitarVideojuego(videojuego){
        let index = this.videojuegos.indexOf(videojuego);
        this.videojuegos.splice(index,1);
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
    constructor(nombre, id){
        this.nombre = nombre;
        this.videojuegosFavoritos = [];
        this.votos = [];
        this.comentarios = [];
        this.id = id;
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

    get comentarios(){
        return this._comentarios;
    }
    
    set comentarios(comentarios){
        this._comentarios = comentarios;
    }

    get id(){
        return this._id; 
    }

    set id(id){
        this._id = id;
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
        videojuego.addValoracion(valoracion.voto);
        this.votos.push(valoracion);
    }

    addOpinion(videojuego, comentario){
        let opinion = new Comentario(comentario, this, videojuego);
        videojuego.addComentario(comentario);
        this.comentarios.push(opinion);
    }
}

class Voto{
    constructor(voto, usuario, videojuego, id){
        this.voto = voto;
        this.usuario = usuario;
        this.videojuego = videojuego;
    }

    get voto(){
        return this._voto; 
    }

    set voto(voto){
        this._voto = voto; 
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

class Comentario{
    constructor(comentario, usuario, videojuego){
        this.comentario = comentario;
        this.usuario = usuario;
        this.videojuego = videojuego;
    }

    get comentario(){
        return this._comentario;
    }
    
    get usuario(){
        return this._usuario;
    }

    get videojuego(){
        return this._videojuego;
    }

    set comentario(comentario){
        this._comentario = comentario;
    }

    set usuario(usuario){
        this._usuario = usuario;
    }

    set videojuego(videojuego){
        this._videojuego = videojuego;
    }
}