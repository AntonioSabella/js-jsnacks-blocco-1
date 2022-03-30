/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
 */


for (let i = 0; i < 10; i++) {
    let ask_number = parseInt(prompt('Inserisci un numero'));
    console.log(ask_number); 
    let somma = ask_number + ask_number + ask_number + ask_number + ask_number + ask_number + ask_number + ask_number + ask_number + ask_number;
    console.log(somma);
}












