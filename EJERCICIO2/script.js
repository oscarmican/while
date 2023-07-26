let numero1 = prompt("elija un numero entre 1 y 50")
let numero2 = prompt("elija un numero entre 1 y 50")
i = 1

while (i <= 50) {
    if (numero1 == i || numero2 == i)
        console.log(i + " !loteria!")
    else
        console.log(i)
    i++
}