

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    function sort(numbers){
        // i funktionen ska du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
        // i if-sattsen skriv ut i konsolen resultatet
        // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"
    for (let number of numbers){
        if (number % 2 === 0){
            console.log(`${number} + jämnt`);
        } else {
            console.log(`${number} + " udda`);
        }
}
}
// anropa funktionen och skicka med en array som argument
sort([4, 7, 12, 15, 20, 23])
}

module.exports = { uppg9 };