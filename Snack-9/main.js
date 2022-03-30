/* Calcola la somma e la media dei primi 10 numeri. */

let first_number = 1; 
let last_number = 10; 
let somma = 0;
let media = 0;
for (let i = first_number; i <= last_number; i++) {
    somma = somma + i;
}
media = somma / last_number;
console.log("La somma dei numeri compresi tra", first_number, "e", last_number, "è:", somma);
console.log("La media dei numeri compresi tra", first_number, "e", last_number, "è:", media);