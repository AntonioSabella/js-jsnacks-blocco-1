/* SNACK 2 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */

const first_word = prompt('Inserisci la prima parola')
const second_word = prompt('Inserisci la prima parola')


//console.log(first_word.length);
//console.log(second_word.length);

const word1_lungezza = first_word.length;
const word2_lungezza = second_word.length;

if (word1_lungezza > word2_lungezza) {
    console.log(word2_lungezza);
    console.log(word1_lungezza);
} else if (word2_lungezza > word1_lungezza) {
    console.log(word1_lungezza);
    console.log(word2_lungezza);
} else if (typeof word1_lungezza  == 'number' && typeof word2_lungezza == 'number') {
    console.log('Attenzione: inserire solo dati numerici');
}
