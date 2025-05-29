

function uppg8(){

// skapa en array med fem person objekt
const people = [
    // varje person objekt ska ha två properties, name och age
    {Name: "Ulf", Age: 78},
    {Name: "Greta", Age: 56},
    {Name: "Peter", Age: 27},
    {Name: "Tilde", Age: 31},
    {Name: "Magnus", Age: 42}
];

// skapa en funtion som tar in en array som argument
function ageCheck(personArray){
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är över 30 år som skrivs ut i konsolen
for (let person of people){
    if (person.Age > 30){
        console.log(person.Name);
    }
  }
}
// anropa funktionen och skicka med arrayen som argument
ageCheck(people);

}

module.exports = { uppg8 };