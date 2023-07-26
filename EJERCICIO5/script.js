let dia

do {
    dia = prompt('introduzca un dia de la semana')
    if (dia == ("lunes")) {
        alert("que lindo iniciar la semana vas a poder con todo");
    } else if (dia == ("martes")) {
        alert("esfuerzate");
    } else if (dia == ("miercoles")) {
        alert("mitad de semana");
    } else if (dia == ("jueves")) {
        alert("ya casi la logras");
    } else if (dia == ("viernes")) {
        alert("el mejor dia del mundo");
    } else if (dia == ("sabado")) {
        alert("ten un gran fin de semana");
    } else if (dia == ("domingo")) {
        alert("Ve a descansar");
    }
} while (dia != 'domingo')
