class Videojuego{
    constructor(nombre, empresa, plataforma, genero, id){
        this.nombre = nombre;
        this.empresa = empresa;
        this.plataforma = plataforma;
        this.genero = genero;
        this.id = id;
    }

    get nombre(){
        return _this._nombre;
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

    añadirVideojuego(videojuego){
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
}

class Votos{
    constructor(voto){
        this.voto = voto;
    }

    get voto(){
        return this._voto; 
    }

    set voto(voto){
        this._voto = voto;
    }

    votacion(voto){
        if(voto>0){
            voto("Positivo");
        }
        else if(voto<0){
            voto("Negativo");
        }
        else{
            voto("Neutral");
        }
    }
}