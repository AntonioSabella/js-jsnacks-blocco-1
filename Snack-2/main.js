/* SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */

const first_word = prompt('Inserisci la prima parola');
const second_word = prompt('Inserisci la prima parola');


//console.log(first_word.length);
//console.log(second_word.length);

const word1_lunghezza = first_word.length;
const word2_lunghezza = second_word.length;

if (word1_lunghezza > word2_lunghezza) {
    console.log(word2_lunghezza);
    console.log(word1_lunghezza);
} else if (word2_lunghezza > word1_lunghezza) {
    console.log(word1_lunghezza);
    console.log(word2_lunghezza);
} else if (word1_lunghezza == word2_lunghezza) {
    console.log('Le due parole sono uguali');
} else if (typeof word1_lunghezza  == 'number' && typeof word2_lunghezza == 'number') {
    console.log('Attenzione: inserire solo parole');
} 
