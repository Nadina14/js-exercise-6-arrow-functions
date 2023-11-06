/* Crea un oggetto chiamato 'studente'. Dovrebbe avere proprietà per 'nome' e 'età'. 
Dovrebbe anche avere un metodo che usa la parola chiave 'this' 
per stampare il nome e l'età dello studente e un metodo per incrementare l'età. */

let studente = {
    nome : 'Pierino',
    etá : 13,
    stampaCaratteristicheStudente: function (){
        console.log(`L'etá dello studente é ${this.etá}, mentre il suo nome é ${this.nome}`);
    },
    incrementoEtá : function (){
        const numUtente = Number(prompt("Vuoi aumentare l'etá di pierino? Dimmi di qunato! (inserisci solo il numero)"));
        const risultato = this.etá + numUtente;
        console.log(`Ora Pierino ha ${risultato} anni!`);
    }
}
studente.stampaCaratteristicheStudente();
studente.incrementoEtá();