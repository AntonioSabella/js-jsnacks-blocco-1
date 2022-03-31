/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */

let somma = 0;
let userNumber;



let i = 0

while (i < 10) {
    userNumber = parseInt(prompt("Inserisci un numero"));
    somma = somma + userNumber

    i++
}

console.log(somma);
