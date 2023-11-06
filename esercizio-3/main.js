/* Crea una semplice pagina HTML con un elemento div. 
Usa JavaScript per cambiare l'innerHTML e l'innerText del div. */

window.addEventListener('load', () => {
    const elemento = document.getElementById('div-1');
    elemento.innerHTML += `<p>Ciao</p>`;
    const elemento2 = document.getElementById('div-2');
    elemento2.innerText = 'Addio'; 
})
