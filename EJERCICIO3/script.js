let arreglo = []
let numeros=0;

do {
    numeros = prompt('escriba un numero')
    numeros = parseInt(numeros)
    if (numeros != 0 && !isNaN(numeros))
        arreglo.push (numeros)
} while (numeros != 0)
console.log (arreglo)

