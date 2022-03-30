/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

let arrayDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
let somma = 0; 
let user_numbers = prompt("Inserisci un numero composto da 4 cifre es.(0000-9999)");
  
for (let i = 0; i < user_numbers.length; i++) {
    somma = somma + parseInt(user_numbers[i]);
}

console.log("Le cifre da te inserite:", user_numbers, "Danno come somma:", somma);