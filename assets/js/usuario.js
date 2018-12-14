document.addEventListener('DOMContentLoaded', function(event){
    creacionSelectionVideojuegos('selectVideojuegos');
    creacionSelectionUsuarios();
})

function creacionSelectionUsuarios(){
    let selection = document.getElementById('selectUsuario');
    for (let i = 0; i < listaUsuarios.length; i++) {
        let opcionNueva = document.createElement('option');
        opcionNueva.value = listaUsuarios[i].id;
        opcionNueva.innerHTML = listaUsuarios[i].nombre;
        selection.append(opcionNueva);
    }
}

function votoComentario(){
    let videojuegoId = parseInt(document.getElementById('selectVideojuegos').value);
    let usuarioId = parseInt(document.getElementById('selectUsuario').value);
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
    let usuarioId = parseInt(document.getElementById('selectUsuario').value);

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

let enviarVotoComentario = document.getElementById('enviarVotoComentario');
enviarVotoComentario.addEventListener('click', function(event){
    event.preventDefault();
    votoComentario();
})