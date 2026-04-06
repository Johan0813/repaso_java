let perros = [
    { "nombre": "Perro 1", "imagen": "", "origen": "Dog API", "edad": 5 },
    { "nombre": "Perro 2", "imagen": "", "origen": "Dog API", "edad": 3 },
    { "nombre": "Perro 3", "imagen": "", "origen": "Dog API", "edad": 7 },
    { "nombre": "Perro 4", "imagen": "", "origen": "Dog API", "edad": 2 },
    { "nombre": "Perro 5", "imagen": "", "origen": "Dog API", "edad": 5 }
];

function cargarImagenes() {

    let promesas = perros.map(perro => {
        return fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                perro.imagen = data.message;
            });
    });

    Promise.all(promesas).then(() => {
        mostrarPerros();
    });
}

function mostrarPerros() {

    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    perros.forEach(perro => {
        contenedor.innerHTML += `
            <div class="card">
                <h2>${perro.nombre}</h2>
                <img src="${perro.imagen}">
                <p>Edad: ${perro.edad}</p>
                <p>Origen: ${perro.origen}</p>
            </div>
        `;
    });
}