// ? Descrizione
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// ?Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

const emailListElemnt = document.getElementById(`email-list`);
const emailNumber = 10;

// per generare l'email 10 volte
for (let i = 0; i < emailNumber; i++) {
  axios
    .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then((response) => {
      const randomEmail = response.data.response;
      console.log(randomEmail);
    });
}
