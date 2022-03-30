/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

const full_name = prompt('Inserisci il tuo nome completo');

//Creare array con gli invitati

const arrayAccessPartecipants = ["Antonio","Giulio","Marco","Aldebrando","Vercingetorige","Ermenegildo","Filippo"];

let info;

// Verificare se l'invitato è presente nella lista per accoglierlo o respingerlo

if (arrayAccessPartecipants.includes(full_name)) {
    info = `Benvenuto ${full_name}. Sei presente nella lista degli invitati`;
    console.log(`Benvenuto ${full_name}. Sei presente nella lista degli invitati`);
    } else {
        info = `Spiacente ${full_name}. Non sei in lista`;
        console.log(`Spiacente ${full_name}. Non sei in lista`);
    } 