'use strict'

var valor 
valor = prompt("ingrese el valor")

if (valor === 0) {
    console.log('El número es 0')
  } else if (valor < 0) {
    console.log('El número es negativo')
  } else if (valor >= 12) {
    console.log('El número más 2 es mayor 13')
  } else if (valor >= 20 && valor <= 50) {
    console.log('El número es mayor que 20 pero menor que 50')
  } else {
    console.log('el número no es 123123125')
  }