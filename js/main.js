// console.log("funziona");

let randomNumberArray = [];
for(let i = 0; i < 5;i++){
    const randomNumber = getRandomInt(1,100);
    const randomNumberAlert = alert(randomNumber);
    console.log(randomNumber);
    console.log(randomNumberAlert);
    // const n = getRandomInt(1, 100);
    // console.log(n);
    randomNumberArray.push(randomNumber);

}
console.log(randomNumberArray);

// const prova = getRandomInt(1,10);
// const alerto = alert(prova);
// console.log(alerto);
// console.log(prova);

// let userNumberArray = [];
// setTimeout(function(){
//     for (let i = 0; i < 5;i++) {
//         const userNumber = parseInt(prompt("inserisci i numeri"));
//         console.log(userNumber);
//         userNumberArray.push(userNumber);
        
//     }
    
//     console.log(userNumberArray);
// },3000);

























// funzione per generare numeri random 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    // The maximum is exclusive and the minimum is inclusive
}