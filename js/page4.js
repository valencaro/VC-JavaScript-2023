//PAGINA 4

let saldoDisponible = 800;
let precioHamburguesa = 50;
let energiaMascota = 0;
let compraRealizada = false;

const saldo = document.getElementById('saldo');
const energia = document.getElementById ('energia');

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
  

function alimentar() {
    if (compraRealizada) {
      energiaMascota += 1;
      actualizarEnergia();
      mostrarMensaje('mensajeAlimentar', 'Muy bien! Alimentaste a tu mascota. Ahora su energía es de ' + energiaMascota + '.');
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
