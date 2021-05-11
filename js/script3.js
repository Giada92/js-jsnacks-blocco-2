/* Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */

var arrayNumeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var a = 2;
var b = 10;


/* function arrayNew (array, a, b) {
    
    var arrayNuovo = [];
    arrayNuovo.push(array.slice(a, b));
    
    return arrayNuovo;
}


var prova = arrayNew (arrayNumeri, a, b);
console.log(prova); */

function arrayNew (array, a, b) {

    var arrayNuovo = [];
    
    for (var i = 0; i < array.length; i++){

        if (i > a && i < b) {
            arrayNuovo.push(array[i]);
        }
    }    

    return arrayNuovo;
}

var prova = arrayNew(arrayNumeri, a, b);
console.log(prova);