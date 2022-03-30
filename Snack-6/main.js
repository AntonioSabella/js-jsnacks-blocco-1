/* Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */

let numberChoice = parseInt(prompt('Inserisci un numero'));

for (let i = 1; i <= numberChoice; i++) {
    console.log(Math.pow(i, 3));
} 

