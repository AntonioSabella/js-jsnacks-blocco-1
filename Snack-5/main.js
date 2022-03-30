/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */

let arrayNumbers = []

for (let i = 0; i < 6; i++) {
    let arrayNumber = parseInt(prompt('Inserisci un numero:'))
    console.log(arrayNumber);
    if (arrayNumber % 2 != 0) {
        arrayNumbers.push(arrayNumber);
    } else {
        console.log('numero pari: Impossibile da inserire');
    }

    console.log(arrayNumbers);
}

