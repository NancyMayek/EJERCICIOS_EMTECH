//ACTIVIDAD 7
//NOMBRE: NANCY MAYEK TORRES AGUILAR

//1.Declara una variable “let edad = Number”, luego crea un condicional “if” donde hagas una comparación, si la edad es mayor o igual a 18, imprime en consola “VÁLIDO”. De lo contrario “NO VÁLIDO”.

let edad= 10;

if (edad >= 18){
    console.log("VALIDO");
}else{
    console.log("NO VALIDO");
}


//2.Crea un array que contenga mínimo 4 objetos, que a su vez contengan como mínimo 3 claves e imprime todo el array en consola con un bucle “for”.
const GretaVanFleet= {
    cantante: "Josh kishka",
    bandMemers: 4,
    albums:3,
}

const libro={
    titulo:"La cancion de Achilles",
    autor:"Madeline Miller",
    publicado:2009,
}

const pelicula={
    titulo:"Les Miserables",
    rating:4,
    director:"Tom Hooper",
}

const obraTeatro={
    titulo:"Fantasma de la Opera",
    autor:"Gaston Leroux",
    idioma:"Frances",
}

const arr=[GretaVanFleet,libro,pelicula,obraTeatro];


for(var i=0; i< arr.length; i++){
    console.log(arr[i]);
}

//3.Crear un bucle switch donde simula la venta de entradas al cine. Donde dependiendo de la edad el cliente recibe alguna promoción.

let age= 18;
let entrada= 100;

switch (age){
    case 10:
        entrada= 50;
        console.log("A LOS NIÑOS DE 10 SE LES COBRA 50 PESOS")
        break;
    case 18:
        entrada= 80;
        console.log("A LOS ADULTOS DE 18 SE LES COBRA 80 PESOS")
        break;
    case 90:
        entrada=30;
        console.log("A LOS ADULTOS MAYORES DE 90  SE LES COBRA 30 PESOS")
        break;
    default:
        console.log("LA ENTRADA NORMAL CUESTA 100 PESOS")
}
