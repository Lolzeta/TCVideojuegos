class Videojuego{
    // constructor
    constructor(nombre, creador, genero){
        this.nombre = nombre;
        this.creador = creador;
        this.genero = genero;
    }
    // setter y getters
    set nombre(nombre){
        this._nombre = nombre;
    }

    set creador(creador){
        this._creador = creador;
    }

    set genero(genero){
        this._genero = genero;
    }

    get nombre(){
        return this._nombre;
    }

    get creador(){
        return this._creador;
    }

    get genero(){
        return this._genero;
    }
}

class Creador{
    // constructor
    constructor(nombre){
        this.nombre = nombre;
        this.videojuegos = [];
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set videojuegos(videojuegos){
        this._videojuegos = videojuegos;
    }

    get nombre(){
       return this._nombre;
    }

    get videojuegos(){
        return this._videojuegos;
    }
}


class Genero{
    // constructor
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