//ACTIVIDAD 5

//1. Crear una variable de cada tipo y hacerle un console.log a cada una en la terminal.

var cadena= "HOLA EMTECH";
let num = 1000;
const bandera=true;

console.log("Variable tipo String: " + cadena);
console.log("Variable tipo Number: " + num);
console.log("Variable tipo Booleano: " + bandera);

//2. Crear 2 variables y concatenarlas con interpolación de texto.

var apellido = "Torres Aguilar";
var nombre = "Nancy Mayek"

console.log(`Hola mundo mi nombre es ${nombre} y mis apeliidos son ${apellido}`);

//3.Crear 2 variables tipo Number y realizar:
//  Una operación aritmética.
//  2 asignaciones + una operación aritmética.
//  1 comparación.

var a=5;
var b=10;
var suma=a+b;

console.log(a+b);
console.log(a=b);
console.log(a += b);
console.log(a *= b);
console.log(a == b);
