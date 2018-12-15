document.addEventListener('DOMContentLoaded', function(event){
    creacionSelectionVideojuegos('selectVideojuegos');
    creacionSelectionUsuarios('selectUsuarioComentario');
    creacionSelectionUsuarios('selectUsuario');
    creacionSelectionUsuarios('usuarioSimilar');
    creacionSelectionUsuarios('usuarioEncComentario');
})

function votoComentario(){
    let videojuegoId = parseInt(document.getElementById('selectVideojuegos').value);
    let usuarioId = parseInt(document.getElementById('selectUsuarioComentario').value);
    let voto = parseInt(document.getElementById('selectVotos').value);
    let opinion = document.getElementById('comentarioUsuario').value;

    let videojuego = listaVideojuegos.find(x => x.id===videojuegoId);
    let usuario = listaUsuarios.find(x => x.id===usuarioId);

    if(validarVotoComentario()){
        document.getElementById('comentarioUsuario').nextElementSibling.innerHTML = '';
        usuario.votarVideojuego(videojuego, voto);
        usuario.addOpinion(videojuego, opinion);
        mostrarVideojuegosHTML(listaVideojuegos);
    } else{
        document.getElementById('comentarioUsuario').nextElementSibling.innerHTML = 'No puedes votar y comentar mas de una vez el mismo videojuego';
    }
}

function validarVotoComentario(){
    let validacion = true;
    let videojuegoId = parseInt(document.getElementById('selectVideojuegos').value);
    let usuarioId = parseInt(document.getElementById('selectUsuarioComentario').value);

    let videojuego = listaVideojuegos.find(x => x.id===videojuegoId);
    let usuario = listaUsuarios.find(x => x.id===usuarioId);
    let votosUsuario = usuario.votos;

    for (let i = 0; i < votosUsuario.length; i++) {
        if(votosUsuario[i].videojuego===videojuego){
            validacion = false;
        }
    }
    return validacion;
}

function busquedaVideojuegosVotadosUsuario(){
    let usuario = listaUsuarios.find(x => x.id===parseInt(document.getElementById('selectUsuario').value));
    let votados = [];
    for (let i = 0; i < usuario.votos.length; i++) {
        votados.push(usuario.votos[i].videojuego);
    }
    mostrarVideojuegosHTML(votados);
}

function encontrarVideojuegosSimilaresFavUsu(){
    let usuario = listaUsuarios.find(x => x.id===parseInt(document.getElementById('usuarioSimilar').value));
    let videojuegosSimilares = [];
    for (let i = 0; i < usuario.videojuegosFavoritos.length; i++) {
        for (let k = 0; k < listaVideojuegos.length; k++) {
            if(usuario.videojuegosFavoritos[i].genero===listaVideojuegos[k].genero&&
            usuario.videojuegosFavoritos[i].plataforma===listaVideojuegos[k].plataforma&&
            !videojuegosSimilares.includes(listaVideojuegos[k])){
                videojuegosSimilares.push(listaVideojuegos[k]);
            }
        }
    }
    mostrarVideojuegosHTML(videojuegosSimilares);
}

function encontrarVideojuegosComentariosPorUsuario(){
    let usuario = listaUsuarios.find(x => x.id===parseInt(document.getElementById('usuarioEncComentario').value));
    let comentados = [];
    for (let i = 0; i < usuario.comentarios.length; i++) {
        comentados.push(usuario.comentarios[i].videojuego);
    }
    mostrarVideojuegosHTML(comentados);
}

let enviarVotoComentario = document.getElementById('enviarVotoComentario');
enviarVotoComentario.addEventListener('click', function(event){
    event.preventDefault();
    votoComentario();
});

let busquedaVotosUsuario = document.getElementById('busquedaVotosUsuario');
busquedaVotosUsuario.addEventListener('click',function(event){
    event.preventDefault();
    busquedaVideojuegosVotadosUsuario();
});

let encontrarUsuarioVidSimilar = document.getElementById('encontrarUsuarioVidSimilar');
encontrarUsuarioVidSimilar.addEventListener('click',function(event){
    event.preventDefault();
    encontrarVideojuegosSimilaresFavUsu();
});

let encontrarVidUsuComen = document.getElementById('encontrarVidUsuComen');
encontrarVidUsuComen.addEventListener('click',function(event){
    event.preventDefault();
    encontrarVideojuegosComentariosPorUsuario();
});