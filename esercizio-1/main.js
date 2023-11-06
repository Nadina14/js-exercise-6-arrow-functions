/* Crea una arrow functio che accetta due numeri come parametri e restituisce la loro sottrazione. */

const num1Utente = Number(prompt('Inserisci un numero'));
const num2Utente = Number(prompt('Inserisci un numero maggiore di quello inserito prima'));

window.addEventListener('load', sottrazione = (num1, num2) => {
    return num2 - num1;
})

const risultato = sottrazione(num1Utente, num2Utente);
console.log(risultato)
