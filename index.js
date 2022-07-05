import {DateTime} from 'luxon'
console.log('Hello world')
console.log('pato')

const obj = {
  name: "Pato",
  action: "Camina",
  alimento : "granos"
}

function consola(msj) {
  console.table(msj)
  console.log(msj)
}

consola("Ya dile a tus papas que te vas con un loco que no te para de amar")

export default consola