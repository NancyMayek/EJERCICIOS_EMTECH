//ACTIVIDAD 8
//NOMBRE: NANCY MAYEK TORRES AGUILAR
//1.Imprimir en consola solo las marcas con sus stock.

let zapatos = [
    {marca: 'NIKE', stock: 8, precios: 150.30},
    {marca: 'PUMA', stock: 7, precios: 80},
    {marca: 'ADIDAS', stock: 6, precios: 230.41},
    {marca: 'CONVERSE', stock: 8, precios: 120.8}
]

zapatos.forEach(marcaZapatos => {
    console.log("Marca:",marcaZapatos.marca," Stock:", marcaZapatos.stock )
})

//2.Imprimir en consola solo si alguno de los productos cuesta más de 200.

let precio200= zapatos.filter(elemento => elemento.precios>200)
console.log(precio200)

//3.Imprime en consola el precio promedio de los productos.

const precios =  zapatos.map (item => item.precios)
let suma= precios.reduce((anterior,actual)=> anterior + actual, 0)
let promedio = suma / precios.length
console.log("Promedio:", promedio)

//4.Imprime en consola alfabéticamente el nombre de los productos.

const marcas = zapatos.map (item => item.marca)
marcas.sort((a,b)=>{
    if(a == b){
        return 0;
    }
    if(a<b){
        return -1;
    }
    return 1;
});

console.log(marcas);


//5.Imprime en consola el producto más costoso, y redondea en un número entero.
let precioMax = 0;
zapatos.forEach(elemento=>{
    precioMax = Math.max(elemento.precios, precioMax);
});
precioRedondeado= Math.round(precioMax);
console.log(precioRedondeado);