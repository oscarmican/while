let numero = prompt("ingrese un numero")
i = 1

while (i <= numero) {
    multiplo = i % 5
    if (multiplo == 0) {
        console.log(i + " multiplo de 5")
    }
    i++
}
