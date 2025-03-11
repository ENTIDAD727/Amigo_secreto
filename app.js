// Modificaciones en app.js
let amigos = [];

// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const lista = document.getElementById("listaAmigos");

    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);

    // Crear un elemento de lista para mostrar el nombre
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para sortear un amigo secreto y desvanecerlo
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos nombres para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class='fade-out'>🎉 Tu amigo secreto es: <strong>${amigoSecreto}</strong> 🎁</li>`;

    // Hacer que el mensaje se desvanezca después de 3 segundos
    setTimeout(() => {
        resultado.innerHTML = "";
    }, 3000);
}
