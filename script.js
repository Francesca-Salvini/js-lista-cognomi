// Chiedi all’utente il cognome
// Inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// Stampa la lista ordinata alfabeticamente
// Scrivi anche la posizione "umana" (partendo da 1) 
// della lista in cui il nuovo utente si trova
// (facciamo questo in 2 versioni: col ciclo for e col while)


// step 1 : chiedo all'utente il suo cognome
var cognomeUtente = prompt("Dimmi il tuo cognome"); 

// step 2 : credo un array con altri cognomi 

var arrayCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"]; 


// console.log(arrayCognomi);

// step 3 : inserirsco il cognome dell'utente nell'array di cognomi

arrayCognomi.push(cognomeUtente);

// console.log(arrayCognomi);

// step 4 : stampa la lista dei cognomi ordinata alfabeticamente

for(var i = 0; i < arrayCognomi.length; i++ ) {
    var cognome = arrayCognomi[i];

    arrayCognomi.sort(); // ordina alfabeticamente i contenuti del mio array


    var contenutoAttualeUl = document.getElementById('lista-cognomi').innerHTML;
    document.getElementById('lista-cognomi').innerHTML = contenutoAttualeUl + '<li>' + cognome + '</li>';
}
