/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

let somma;
let userNumber;
somma = 0;

for (let i = 0; i < 10; i++) {
    userNumber = parseInt(prompt("Inserisci un numero"));
    somma = somma + userNumber
}

console.log(somma);












