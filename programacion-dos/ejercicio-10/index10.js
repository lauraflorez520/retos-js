'use strict';

var dia = 24;
var año
var HorasDeEdad
var edad

año = dia * 365;
edad = prompt("Digite su edad");
HorasDeEdad = año * edad;
document.querySelector("h1").innerHTML = ("Usted tiene " + HorasDeEdad + " horas.")