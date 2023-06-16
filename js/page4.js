//PAGINA 4

let saldoDisponible = 800;
let precioHamburguesa = 50;
let energiaMascota = 0;
let compraRealizada = true;
let vecesAlimentada = 0; 

const saldo = document.getElementById('saldo');
const energia = document.getElementById ('energia');

//Me falta modificar el codigo para que con una compra, se pueda alimentar por ej 3 veces la mascota y no infinitamente.

function comprar() {
    if (saldoDisponible >= 50) {
        saldoDisponible -= 50;
        compraRealizada = true;
        actualizarSaldo();
        mostrarMensaje('mensajeCompra', 'Compra realizada correctamente! Se restaron 50 del saldo.');
    } else {
        mostrarMensaje('mensajeCompra', 'No tienes saldo suficiente para realizar la compra.');
  }
}
  
//La funcion alimentar tiene un condicional de que cuando la energia de la mascota llega a 10, ya no te deja seguir alimentandola.

function alimentar() {
    if (compraRealizada) {
        if (energiaMascota < 10) {
            energiaMascota += 1;
            actualizarEnergia();
            mostrarMensaje('mensajeAlimentar', '¡Muy bien! Alimentaste a tu mascota. Ahora su energía es de ' + energiaMascota + '.');
        } else {
            mostrarMensaje('mensajeAlimentar', 'Tu mascota ya está completamente alimentada.');
        }
    } else {
        mostrarMensaje('mensajeAlimentar', 'Debes realizar una compra antes de poder alimentar a la mascota.');
    }
}


function actualizarSaldo() {
    document.getElementById('saldo').textContent = 'SALDO DISPONIBLE: ' + saldoDisponible;
}
  
function actualizarEnergia() {
    document.getElementById('energia').textContent = 'ENERGÍA ACTUAL: ' + energiaMascota;
}

function consultar(){
    if (energiaMascota <= 3) {
        alert ("Tu mascota se encuentra con la energia baja")
    } else if(energiaMascota <= 7){
        alert ("Tu mascota tiene la energia normal");
    } if (energiaMascota >7) {
        alert ("Tu mascota se encuentra con la energia super alta");
    }
}

function mostrarMensaje(idDiv, mensaje) {
    const divMensaje = document.getElementById(idDiv);
    divMensaje.textContent = mensaje;
    setTimeout(function() {
      divMensaje.textContent = '';
    }, 4000);
}

async function pedirMascotas () {

    const respuesta = await fetch ("../json/mascotas.json")
    const mascotas = await respuesta.json()

    return mascotas 
}

async function mostrarMascota(){

    const mascotas = await pedirMascotas()
    const contenedor = document.getElementById("mascotaContenedor")

    mascotas.forEach(mascota => {
        const cardMascota = document.createElement("div")

        cardMascota.innerHTML=`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${mascota.nombre}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Tipo de mascota: ${mascota.tipo}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Comida favorita: ${mascota.comida}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">Sexo: ${mascota.sexo}</h6>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div>
        </div>`

        contenedor.appendChild(cardMascota)
    });
}
mostrarMascota()