/*Fare una webapp che richiede un nome di un Paese e restituisce in forma ordinata le informazioni di quel Paese (usare servizio Country)*/
let prompt = 'https://restcountries.com/v3.1/name/%NOME';
const bottone = document.getElementById('bottone');
const testo = document.getElementById('paese');

bottone.onclick = () => {
  prompt = prompt.replace('%NOME', testo.value);
  fetch(prompt)
    .then((response) => response.json())
    .then((data) => console.log(data));
};
