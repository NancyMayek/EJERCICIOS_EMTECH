//ACTIVIDAD 6
//NOMBRE: NANCY MAYEK TORRES AGUILAR

//1.Una función que ejecute una suma de 3 números, imprimir su resultado en la terminal con console.log().

function suma3 (a,b,c){
    var resultado = a+b+c;
    console.log(resultado);
}

suma3(1,2,3);

//2.Una función que ejecute una comparación de 2 números (mayor, menor, igual o diferentes), imprimir su resultado en la terminal con console.log().

function compararNumeros (a,b){
    if (a > b){
        console.log( a + " es un numero mayor que " + b);
    }else{
        console.log( a + " es un numero menor o igual a " + b);
    }
}

compararNumeros(5,2);

//3.Realizar las 2 funciones anteriores, pero como función flecha, imprimir su resultado en la terminal con console.log().

const sumar = (a,b,c) => console.log(a+b+c);
sumar(2,3,4);

const comparar = (a,b)  => console.log(a>b);
comparar(10,5);

//4.Crear un objeto con mínimo 5 key(clave) y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().

//objeto
const cliente1 = {
    nombre: "Mario",
    apellido: "Alvares",
    email: "Uaaa@gmail.com",
    edad: "22",
    pais: "Mexico",
}
//Desestructuración

const {pais, edad, nombre} = cliente1;
console.log(pais, edad, nombre);


//5.Crear un arreglo que contenga: 1-string, 2-números, 1-array con 2 valores y realizar la desestructuración de 3 de ellas. Imprimir su resultado en la terminal con console.log().

const arreglo=["Nancy",23,["Lana del Rey","Greta Van Fleet"]];

//desestructuración
const [nom, age, musica] = arreglo;
console.log(nom, age, musica)