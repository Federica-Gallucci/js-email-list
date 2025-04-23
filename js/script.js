// ? Descrizione
// Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// ?Bonus
// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

const emailListElement = document.getElementById(`email-list`);
const createEmailButton = document.getElementById(`button-create-mail`);

const emailNumber = 10;

// # funzione che genera gli elementi della lista

function generateLiElement(element) {
  return `
      <tr>
        <td>${element}</td>
      </tr>
  `;
}

// per generare l'email 10 volte

//   for (let i = 0; i < emailNumber; i++) {
//     axios
//       .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
//       .then((response) => {
//         const randomEmail = response.data.response; // accedo ai dati (data) della risposta(response) con key response(response)
//         console.log(randomEmail);

//         const liElement = generateLiElement(randomEmail);
//         emailListElemnt.innerHTML += liElement;
//       });
//   }

const emailArray = [];

createEmailButton.addEventListener("click", () => {
  // elimino i figli dell'elemento ad ogni click del bottone
  emailListElement.replaceChildren();

  // genero una nuova lista di email
  for (let i = 0; i < emailNumber; i++) {
    axios
      .get(`https://flynn.boolean.careers/exercises/api/random/mail`)
      .then((response) => {
        const randomEmail = response.data.response; // accedo ai dati (data) della risposta(response) con key response(response)
        console.log(randomEmail);

        const liElement = generateLiElement(randomEmail);
        emailListElement.innerHTML += liElement;
      });
  }
});
