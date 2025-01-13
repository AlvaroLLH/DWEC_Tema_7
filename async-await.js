"use strict";

document.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const respuesta = await res.json();

    let h1 = document.createElement('h1');
    h1.textContent = respuesta.title;

    let p = document.createElement('p');
    p.textContent = respuesta.body;

    let div = document.querySelector('.main');
    div.appendChild(h1);
    div.appendChild(p);
});