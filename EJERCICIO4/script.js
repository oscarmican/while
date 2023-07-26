let arreglo = []
let palabras = ''
let frase;
do {
    palabras = prompt ("escriba letras o palabras(dejar vacio si no se quiere ingresar informacion)")
    arreglo.push (palabras)
    } while (palabras != '') 
    frase = arreglo.join(' ')
    alert(frase)

