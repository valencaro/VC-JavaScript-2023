//PAGINA 4

//MOSTRAR NOMBRE DE MASCOTA CAPTURADO DE LA PAG 3

document.addEventListener("DOMContentLoaded", function() {
    const nombreMascota = localStorage.getItem("nombreMascota");
    const tituloMascota = document.getElementById("tituloMascota");
    tituloMascota.textContent = `¡Tu mascota creada es ${nombreMascota}!`;
});



let saldoDisponible = 800;
let energiaMascota = 0;
let compraRealizada = true;

const saldo = document.getElementById('saldo');
const energia = document.getElementById ('energia');

//CAPTURAR COMIDA DE JSON LOCAL

async function obtenerComida () {

    const respuesta = await fetch ("../json/comida.json")
    const comidas = await respuesta.json()
    
    return comidas
}

async function mostrarComida(){

        const comidas = await obtenerComida()
        const contenedor = document.getElementById("comidaAlmacen")
        const buscador = document.getElementById('buscador');

        function mostrarComidasFiltradas(comidasFiltradas) {
            contenedor.innerHTML = "";
    
            comidasFiltradas.forEach(comida => {
            const cardComida = document.createElement("div")
                cardComida.innerHTML=`
                <div class="cardComidaContenedor">
                    <div class="cardComida">
                        <h5 class="cardTitulo">${comida.nombre}</h5>
                        <img class="cardImg" src=${comida.imagen}></img>
                        <h6 class="cardSubtitulo">$${comida.precio}</h6>
                        <button class="cardBtnComprar">COMPRAR</button>
                    </div>
                </div>`
    
            contenedor.appendChild(cardComida)
        });

            const botonesComprar = document.getElementsByClassName("cardBtnComprar");
                Array.from(botonesComprar).forEach((boton) => {
                boton.addEventListener("click", cardBtnComprar);
            });
    }

        function eventoBuscador() {
            const filtro = buscador.value.toLowerCase();
            const comidasFiltradas = filtrarComidas(comidas, filtro);
            mostrarComidasFiltradas(comidasFiltradas);
    }

        buscador.addEventListener("input", eventoBuscador);

        mostrarComidasFiltradas(comidas);
}

mostrarComida();

function cardBtnComprar() {
    const precioElement = this.parentElement.querySelector(".cardSubtitulo");
    const precio = parseInt(precioElement.innerText.substring(1));
    
    if (saldoDisponible >= precio) {
        saldoDisponible -= precio; 
        actualizarSaldo();
        console.log(`Se ha comprado la comida por $${precio}. Saldo restante: $${saldoDisponible}`);
        alimentar();
    } else {
        console.log("No tienes suficiente saldo para comprar esta comida.");
    }
}

function actualizarSaldo() {
    document.getElementById('saldo').textContent = 'SALDO DISPONIBLE: ' + saldoDisponible;
}


function alimentar() {
    energiaMascota += 1;
    energia.textContent = `Energía actual: ${energiaMascota}`;
}

  
function actualizarEnergia() {
    document.getElementById('energia').textContent = 'ENERGÍA ACTUAL: ' + energiaMascota;
}

function consultar() {
    if (energiaMascota <= 3) {
        Toastify({
            text: "Tu mascota se encuentra con la energía baja",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "#000",
                color: "#fff",
                fontFamily:"Almarai',sans-serif",
                fontSize:"16px"
            },
            onClick: function() {}
        }).showToast();
    } else if (energiaMascota <= 7) {
        Toastify({
            text: "Tu mascota tiene la energía normal",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "#000",
                color: "#fff",
                fontFamily:"Almarai',sans-serif",
                fontSize:"16px"
            },
            onClick: function() {}
        }).showToast();
    } else if (energiaMascota > 7) {
        Toastify({
            text: "Tu mascota se encuentra con la energía super alta",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "center",
            stopOnFocus: true,
            style: {
                background: "#000",
                color: "#fff",
                fontFamily:"Almarai',sans-serif",
                fontSize:"16px"
            },
            onClick: function() {}
        }).showToast();
    }
}

//BUSCADOR

function filtrarComidas(comidas, filtro) {
    const comidasFiltradas = comidas.filter(comida => comida.nombre.toLowerCase().includes(filtro));
    return comidasFiltradas;
}