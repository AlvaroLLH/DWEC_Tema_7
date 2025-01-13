"use strict";

// Fetch para obtener los posts
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const postsContenedor = document.getElementById('postsContenedor');
        posts.forEach(post => {

            // Creamos un contenedor para cada post
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <button class="carga-comentarios" data-post-id="${post.id}">Ver Comentarios</button>
                <div class="comments" id="comments-${post.id}"></div>
                `;
                postsContenedor.appendChild(postDiv);

                // Obtenemos el botón para cargar los comentarios
                const cargaBotonComentarios = postDiv.querySelector('.carga-comentarios');
                cargaBotonComentarios.addEventListener('click', function() {
                    const postId = this.getAttribute('data-post-id');
                    const comentariosContenedor = document.getElementById(`comments-${postId}`);

                    // Comprobamos si los comentarios están ya cargados
                    if(comentariosContenedor.innerHTML.trim() === '') {

                        // Fetch para obtener los comentarios de ese post
                        
                    }
                })
        })
    })