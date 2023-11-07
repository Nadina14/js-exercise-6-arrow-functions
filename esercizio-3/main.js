/* Crea una semplice pagina HTML con un elemento div. 
Usa JavaScript per cambiare l'innerHTML e l'innerText del div. */

window.addEventListener('load', () => {
    const elemento = document.getElementById('div-1');
    elemento.innerText = 'Addio'; 
    elemento.innerHTML += `<p>Ciao</p>`;
})
