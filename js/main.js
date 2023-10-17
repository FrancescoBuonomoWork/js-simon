// console.log("funziona");

let RandomNumberArray = [];
for(let i = 0; i < 5;i++){
    RandomNumberArray = parseInt(alert(getRandomInt(1, 100)));
    console.log(RandomNumberArray);
}
























// funzione per generare numeri random 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    // The maximum is exclusive and the minimum is inclusive
}