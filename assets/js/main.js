///////////////////////// MAIL /////////////////////////

//ask mail by prompt and save in variable

// read the list of correct mail

// check if the insert mail is correct

const userMail = prompt ('inserisci la tua mail');
console.log(userMail);

let array = ['simone@mail.com', 'francesco@mail.com', 'marco@mail.com'];

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element == userMail) {
        alert ("Congratulazioni!! Puoi accedere al sito!");
   
}
}
/////////////////// GIOCO DEI DADI //////////////////////


const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;

console.log(userNumber, computerNumber);

if (userNumber > computerNumber){

    console.log('Hai vinto!!');

} else if (computerNumber > userNumber){

    console.log("hai perso, ritenta");

} else {
    console.log("Pareggio");
}
