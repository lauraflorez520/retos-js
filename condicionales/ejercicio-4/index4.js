'use strick';

var añosPerrunos

añosPerrunos = prompt("Ingrese la edad de su perro");

if (añosPerrunos === 1) {
    alert("Su perro tiene 15 años perrunos");
    
} else if(añosPerrunos === 2)
{
    alert("su perro tiene 24 años perrunos");
} else if (añosPerrunos > 3) {
    alert("su perro tiene " + (((añosPerrunos-2)*5)+24) + "años perrunos")
}
/* la primera operacion es para eliminar los dos años que ya contamos, la segunda es para multiplicar el numero que queda por 5 y la ultima es para agregar los 24 años que tuvo por sus primeros dos años de vida, cada que se haga una operacion se debe separar por parentesis*/