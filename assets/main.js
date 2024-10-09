console.log('it works');

//Descrizione:
//Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere
//Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 
 const formEl = document.querySelector('form')
 const nameEl = document.querySelector ('#customerName')
 const kmEl = document.querySelector ('#customerKm')
 const ageEl = document.querySelector ('#customerAge')
 const submitEl = document.getElementById('submit')
 const isUnder18 = document.getElementById('under18')
 const isOver65 = document.getElementById('over65')
 /* console.log(nameEl , kmEl, ageEl, submitEl, formEl, over65); */
 


let price


price = 0.21  * customerKm

/* if (age < 18){
    discountUnder = price - ((price * 20) / 100) 
    console.log(discountUnder.toFixed( 2 ))
}
else if (age > 65){
    discountOver = price - ((price * 40) / 100)
    console.log(discountOver.toFixed( 2 ));
}
else{
    console.log(price.toFixed( 2 ))
} */





formEl.addEventListener('submit', function (e){
    e.preventDefault()
    console.log(e.target.customerName.value, e.target.customerKm.value);
    const customerKm = e.target.customerKm.value;

    console.log(customerKm);
    let checkUnder18 = isUnder18.value === 'Minorenne'
    /* console.log(checkUnder18); */
    let checkOver65 = isOver65.value === 'Over 65'
    console.log(checkOver65);
    if(checkOver65){
        discountOver = price - ((price * 40) / 100)
        console.log(discountOver);
        
    }
    else if (checkUnder18){
        discountUnder = price - ((price * 20) / 100) 
        console.log(discountUnder.toFixed( 2 ))
    }
})




    function totalPrice(number, isUnder18, isOver65) {
        if (isUnder18) {
            return number - ((number * 20) / 100);
        } else if (isOver65) {
            return number - ((number * 40) / 100);
        } else {
            return number;
        }
    }

totalPrice(kmEl)

 