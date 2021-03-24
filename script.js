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

console.log(arrayCognomi);

// step 4 : stampa la lista dei cognomi ordinata alfabeticamente

arrayCognomi.sort(); // ordina alfabeticamente i contenuti del mio array


for(var i = 0; i < arrayCognomi.length; i++ ) {
    var cognome = arrayCognomi[i];

    var contenutoAttualeOl = document.getElementById('lista-cognomi').innerHTML;
    document.getElementById('lista-cognomi').innerHTML = contenutoAttualeOl + '<li>' + cognome + '</li>';
}

// step 5 : scrivo la posizione in cui si trova il cognome dell'utente (uso ciclo FOR)

// var position = -1;

// for(var i = 0 ; i < arrayCognomi.length ; i++ ) {
    
//     if( cognomeUtente == arrayCognomi[i] ) {
//       position = i; }
 

//     document.getElementById('position').innerHTML = "La tua posizione è : " + (position + 1); 


// }

// step 6 : scrivo la posizione in cui si trova il cognome dell'utente (uso ciclo WHILE)

var position = -1;
var i = 0; 

while( i < arrayCognomi.length ) {
    if( cognomeUtente == arrayCognomi[i] ) {
        position = i;

              
    }
         
    
    document.getElementById('position').innerHTML = "La tua posizione è : " + (position + 1);


   i++;
    
}
