let num1 = parseInt(prompt("Ingrese un número: "));
let num2 = parseInt(prompt("Ingrese un segundo número: "));
let num3 = parseInt(prompt("Ingrese el tercer número: "));

let numeros = [num1, num2, num3]
let numerosAscendente = [...numeros];
let numerosDescendente = [...numeros];
numerosAscendente.sort ();
numerosDescendente.sort();
numerosDescendente.reverse();
const todosIguales = numeros.every(num => num === numeros[0]);
if (todosIguales) {
    console.log("Todos los números son iguales.");
  } else {
    console.log("De menor a mayor:", numerosAscendente);
    console.log("De mayor a menor:", numerosDescendente);
  }