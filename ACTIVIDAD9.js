//ACTIVIDAD 9
//NOMBRE: NANCY MAYEK TORRES AGUILAR

//1. Crea un <h1>texto inicial</h1> en un archivo .html y cambia su texto con JavaScript. 
let dom_elemento = document.getElementById('titulo');
dom_elemento.textContent="Hola MEXICO";

//2.Crean una lista (<ul>, <li>) en tu HTML usando JavaScript
let nuevo_elemento =document.createElement ('ul');
nuevo_elemento.innerHTML = '<li>Zapatos NIKE</li> <li>Zapatos ADIDAS</li> <li>Zapatos CONVERSE</li>';
let elemento_padre = document.getElementById('list');
console.log(elemento_padre)
elemento_padre.appendChild(nuevo_elemento);

//3. Usando el arreglo de la imagen, inserta en tu HTML un elemento nuevo que contenga: marca, 
//   cantidad y precio, todo en color negro, y que el valor de cada llave (key) se vea en color rojo (plantilla literal)
 


let zapatos = [
    {marca: 'NIKE', stock: 8, precios: 150.30},
    {marca: 'PUMA', stock: 7, precios: 80},
    {marca: 'ADIDAS', stock: 6, precios: 70.41},
    {marca: 'CONVERSE', stock: 8, precios: 120.8}
]



zapatos.forEach(zapato => {
    let tarjeta = document.createElement('div');
    tarjeta.style.borderColor="#FFRFRE";

    tarjeta.innerHTML=
    `<h3> Marca: <span style="color:red">${zapato.marca}</span> </h3>
    <h3> Marca: <span style="color:red">${zapato.stock}</span> </h3>
    <h3> Marca: <span style="color:red">${zapato.precios}</span> </h3>`;

    tarjeta.style.border =  '1px solid red';
    
    let tag_padre = document.getElementById('zapatos');
    tag_padre.appendChild(tarjeta);
    
});

//4.Crea un botón de mostrar productos y uno de ocultar productos en el HTML, que cuando hagas clic sobre él se muestren los productos o se oculten. 


const btn_mostrar = () => {
    let z= document.getElementById('zapatos');
    z.style.visibility= "visible";
    
}

const btn_ocultar = () => {
    let z= document.getElementById('zapatos');
    z.style.visibility= "hidden";
}


//5.Local Storage
function loadStorage(){
    console.log("hey");
    let nombre = document.getElementById('localStorage'); 
    if (localStorage.getItem("nombre") === null) {
    nombre.innerHTML = 
        `
            <h1>Hola me podrias dar tu nombre?</h1>
            <input id="valor_nombre" type="text">
            <button id="btReiniciar" onclick="btn_guardar();">Guardar</button>
            <button id="btReiniciar" onclick="btn_reiniciar();">Reiniciar</button>
        `;
    }else{

        let Stringlocal = JSON.stringify(localStorage);
        let objectLocal = JSON.parse(Stringlocal);
        let nombre = document.getElementById('localStorage'); 
        
        Object.entries(objectLocal).forEach(([key,value])=>{
            nombre.innerHTML = `<h1> Bienvenido nuevamente ${value} </h1>
                                <button id="btReiniciar" onclick="btn_reiniciar();">Reiniciar</button>`;
        });
    }

}

const btn_guardar = () => {
    let nom = document.getElementById('valor_nombre');
    if(nom.value == null || nom.value == '' ){
        alert("items vacios");
    }
    else{
        localStorage.setItem('nombre', `${nom.value}`)
        alert("Nombre guardado");
    }

    let Stringlocal = JSON.stringify(localStorage);
    let objectLocal = JSON.parse(Stringlocal);
    let nombre = document.getElementById('localStorage'); 
    
    Object.entries(objectLocal).forEach(([key,value])=>{
        nombre.innerHTML = `<h1> Bienvenido nuevamente ${value} </h1>
                             <button id="btReiniciar" onclick="btn_reiniciar();">Reiniciar</button>`;
    });

}

const btn_reiniciar = () => {
    let Stringlocal = JSON.stringify(localStorage);
    let objectLocal = JSON.parse(Stringlocal);
    console.log(objectLocal);
    Object.entries(objectLocal).forEach(([key,value])=>{   
        localStorage.removeItem(`${key}`);
    });

    let nombre = document.getElementById('localStorage'); 
    
    nombre.innerHTML = 
        `<div id="localStorage">
            <h1>Hola me podrias dar tu nombre?</h1>
            <input id="valor_nombre" type="text">
            <button id="btReiniciar" onclick="btn_guardar();">Guardar</button>
            <button id="btReiniciar" onclick="btn_reiniciar();">Reiniciar</button>
        </div>`;
    
}
