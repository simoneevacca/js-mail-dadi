///////////////////////// MAIL /////////////////////////

//ask mail by prompt and save in variable

// read the list of correct mail

// check if the insert mail is correct

// const userMail = prompt ('inserisci la tua mail');
// console.log(userMail);

const userMail = document.querySelector('.mail')
let array = ['simone@mail.com', 'francesco@mail.com', 'marco@mail.com'];
const button = document.querySelector('.gioca')
const canGame = document.querySelector('.can-game')
canGame.style.display = "none";


button.addEventListener('click', function () {

    console.log('gaming...');


    for (let index = 0; index < array.length; index++) {
        const element = array[index];

            if (element == userMail.value){
                canGame.style.display = "block";

            }  
    }
}
)


/////////////////// GIOCO DEI DADI //////////////////////


const spear = document.querySelector('.spear');
const score = document.querySelector('.score');
const result = document.querySelector('.result');




spear.addEventListener('click', function () {
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const computerNumber = Math.floor(Math.random() * 6) + 1;
    console.log(userNumber, computerNumber);
    score.innerHTML = ('tu: ' + ' ' + userNumber + ' ' + 'pc: ' + ' ' + computerNumber)
    

if (userNumber > computerNumber) {

    result.innerHTML = ('HAI VINTO!!');


} else if (computerNumber > userNumber) {
    result.innerHTML = ('HAI PERSO');

} else {
    result.innerHTML = ('PAREGGIO');

}

}
)