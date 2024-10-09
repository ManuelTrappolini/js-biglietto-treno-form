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
 const customerTicketEl = document.querySelector('.t-body')
 /* console.log(nameEl , kmEl, ageEl, submitEl, formEl, over65); */
let price
price = 0.21  * customerKm


formEl.addEventListener('submit', function (e){
    e.preventDefault()
    /* console.log(e.target.customerName.value, e.target.customerKm.value); */
    const customerKm = e.target.customerKm.value;
    const customerName = e.target.customerName.value
    let price = parseFloat(0.21 * customerKm)
    let checkUnder18 = isUnder18.selected
    let checkOver65 = isOver65.selected
    let train = Math.floor((Math.random() * 10) + 1)
    let code = Math.floor((Math.random() * 10000) + 1)
    if (checkOver65 || checkUnder18) {
        if (checkOver65) {
            discountOver = price - ((price * 40) / 100)
            console.log(customerName);
            console.log(parseFloat(discountOver.toFixed( 2 )));
            let offer = 'Over 65 Sconto 40%'
            const customerTicket =`
            <tr class="">
                        <td class="name">${customerName}</td>
                        <td class="offer">${offer}</td>
                        <td class="train">${train}</td>
                        <td class="code">${code}</td>
                        <td class="ticketcost">€ ${discountOver.toFixed( 2 )}</td>
            </tr>
            `
            customerTicketEl.insertAdjacentHTML('beforeend', customerTicket)
        } else {
            discountUnder = price - ((price * 20) / 100)
            console.log(customerName);
            console.log(parseFloat(discountUnder.toFixed( 2 )));
            let offer = 'Under 18 Sconto 20%'
            const customerTicket =`
            <tr class="">
                        <td class="name">${customerName}</td>
                        <td class="offer">${offer}</td>
                        <td class="train">${train}</td>
                        <td class="code">${code}</td>
                        <td class="ticketcost">€ ${discountUnder.toFixed( 2 )}</td>
            </tr>
            `
            customerTicketEl.insertAdjacentHTML('beforeend', customerTicket)
        }
    } else {
        console.log(customerName);
        console.log(price)
        let offer = 'Standard'
        const customerTicket =`
            <tr class="">
                        <td class="name">${customerName}</td>
                        <td class="offer">${offer}</td>
                        <td class="train">${train}</td>
                        <td class="code">${code}</td>
                        <td class="ticketcost">€ ${price.toFixed( 2 )}</td>
            </tr>
            `
            customerTicketEl.insertAdjacentHTML('beforeend', customerTicket)
    }
})





 