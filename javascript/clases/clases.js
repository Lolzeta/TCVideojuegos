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

    // funciones
    mostrarEnHTML(nodoHTML){
        let bloque = document.createElement("div");
        bloque.className = "videojuego";
        let titulo = document.createElement("h1");
        titulo.innerHTML = this.nombre; 
        let genero = document.createElement("h2");
        genero.innerHTML = this.genero;
        let creador = document.createElement("p");
        creador.innerHTML = this.creador.nombre;
        bloque.append(titulo);
        bloque.append(genero);
        bloque.append(creador);
        nodoHTML.appendChild(bloque);
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

    incluirVideojuego(videojuego){
        if(videojuego instanceof Videojuego){
            this._videojuegos.push(videojuego);
        }
    }
}


// class Genero{
//     // constructor
//     constructor(nombre){
//         this.nombre = nombre;
//     }

//     set nombre(nombre){
//         this._nombre = nombre;
//     }

//     get nombre(){
//         return this._nombre;
//     }
// }