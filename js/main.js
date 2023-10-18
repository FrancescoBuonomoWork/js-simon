// console.log("funziona");

let randomNumberArray = [];
for (let i = 0; i < 5; i++) {
    const randomNumber = getRandomInt(1, 100);
    console.log(randomNumber);
    const randomNumberAlert = alert(randomNumber);
    console.log(randomNumberAlert);
    randomNumberArray.push(randomNumber);
    
}
console.log(randomNumberArray);


setTimeout(function () {
    let userNumberArray = [];
    for (let i = 0; i < 5; i++) {
        const userNumber = parseInt(prompt("inserisci i numeri"));
        console.log(userNumber);
        userNumberArray.push(userNumber);
    }
    console.log(userNumberArray);
    console.log(randomNumberArray);
    let samenumbersCount = 0;
    let sameNumbers = [];
    for (let i = 0; i < userNumberArray.length;i++) {
        const currentNumber = userNumberArray[i];
        // console.log(currentNumber);
        if (randomNumberArray[i] === currentNumber) {
            samenumbersCount += 1
            sameNumbers.push(currentNumber);
            // console.log(sameNumbers);
        }
        // console.log("i numeri indovinati sono:" + currentNumber);
    }
    console.log("i numeri indovinati sono: "+ samenumbersCount + " e sono i numeri "+ sameNumbers);

    // return userNumberArray
    // console.log(userNumberArray.includes(2));

}, 3000);
// console.log(userNumberArray);






// funzione per generare numeri random 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    // The maximum is exclusive and the minimum is inclusive
}
// const prova = getRandomInt(1,10);
// const alerto = alert(prova);
// console.log(alerto);
// console.log(prova);