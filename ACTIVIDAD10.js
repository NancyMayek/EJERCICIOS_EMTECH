const btnAPI = document.getElementById("btn_API");
const btnlocal = document.getElementById("btn_local");
const lista = document.querySelector('#listado');
const contenedorPersonajes = document.getElementById('contenedorPersonajes');



    fetch ("./data.json")
    .then ((res) => res.json())
    .then ((data) => {
         data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h2>${producto.nombre}</h2>
                <h4>Precio: ${producto.precio}</h2>
                <h4>Marca: ${producto.marca}</h2>
            `
            lista.append(li)
        })
    })
 




btnAPI.addEventListener("click",()=>{
    llamarAPI();
})


const llamarAPI= () =>{ 
    fetch ("https://rickandmortyapi.com/api/character")
    .then (respuesta => respuesta.json())
    .then (informacion => informacion.results.forEach(personaje => {
        contenedorPersonajes.innerHTML += 
        `
            <h2>Nombre: ${personaje.name}</h2>
            <h2>Estatus: ${personaje.status}</h2>
            <h2>Especie: ${personaje.species}</h2>
            <h2>Genero: ${personaje.gender}</h2>
            <img src="${personaje.image}" alt="${personaje.name}">
        `
    }))
    contenedorPersonajes.classList.add("grid");
} 