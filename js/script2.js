/* Snack 2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate inizialmente a 0.
Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

var squadre = [
    {
        nome: "Fiorentina",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Lazio",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Bologna",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Atalanta",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Spazia",
        puntiFatti: 0,
        falliSubiti: 0
    }
    
];

//console.log(squadre);

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


var nuovoArray = [];

for (var i = 0; i < squadre.length; i++) {
    
    squadre[i].puntiFatti = getRndInteger(0, 100);
    squadre[i].falliSubiti = getRndInteger(0, 100);

    nuovoArray.push(squadre[i].nome, squadre[i].falliSubiti); 
}

console.log(squadre);
console.log(nuovoArray);
