let nombreUsuario;
let contraseña;
let dinero = 5000;
let precioHamburguesa = 50;
let energiaMascota = 0;
let comidaMascota = 0;


alert("Bienvenido/a a Mi Mascota Virtual."+ " "+ "Un juego en donde vas a poder cuidar y alimentar a tu mascota virtual como si fuera de verdad." + " " + "Esperamos que puedas pasar un buen rato divirtiéndote con nuestro juego.")

function registro() {
  nombreUsuario = prompt("Para poder registrarte, deberás indicar un nombre de usuario que deberás recordar para ingresar cada vez que quieras jugar.");
  contraseña = prompt("Ahora, deberás registrar una contraseña asociada al nombre de usurio seleccionado.");
}

function ingresar() {
  let ingresarUsuario = prompt("Ingresá tu nombre de usuario para poder ingresar.");
  let ingresarContraseña = prompt("Ingresá la contraseña.");

 while (ingresarUsuario != nombreUsuario || ingresarContraseña != contraseña){
    alert("Alguno de los datos ingresados no es correcto. Por favor vuelve a intentarlo.");
    ingresarUsuario = prompt ("Indicá tu nombre de usuario para poder ingresar.");
    ingresarContraseña = prompt ("Indicá la contraseña")
 }
  if (ingresarUsuario === nombreUsuario && ingresarContraseña === contraseña) {
    alert("Bienvenido " + nombreUsuario + "!." + " Ya podés jugar a Mi Mascota Virtual");
  }
}

function seleccionarOperacion(){
    alert ("Elegí la acción que quieras realizar \n 1: Consultar dinero \n 2: Comprar comida \n 3: Alimentar mascota \n 4: Consultar energia \n 5: Ver mascota \n 6: Salir");

    let operacion = prompt ("Ingresar el número de operación a realizar")
    switch (operacion) {
        case "1":
            consultarDinero ()
            break;
        case "2":
            comprarComida()
            break;
        case "3":
            alimentarMascota()
            break;
        case "4":
            consultarEnergia()
            break;
        case "5":
            verMascota()
            break;
        case "6":
            salir()
            break;
        default:
            console.log ("Operación inválida")
    }
}


function consultarDinero(){
    alert ("Su saldo es de " + dinero)
    seleccionarOperacion()
}

function comprarComida (){
    if (dinero >= 50){
        alert ("Pudiste comprar una hamburguesa para tu mascota.")
        dinero-=50;
        energiaMascota += 1;
    }
    else{
        alert("No tenés suficiente dinero para comprar comida.")
    }
    seleccionarOperacion()

}

function alimentarMascota(){
    if (energiaMascota <= 5) {
        alert ("Tu mascota se encuentra con la energia baja")
    } else if(energiaMascota <= 7){
        alert ("Tu mascota tiene la energia normal");
    } if (energiaMascota >7) {
        alert ("Tu mascota se encuentra con la energia super alta");
    }
    seleccionarOperacion()
}

function consultarEnergia(){
    alert ("La energía de tu mascota es " + energiaMascota)
    seleccionarOperacion()
}

function verMascota(){
    console.log (mascota1)
    seleccionarOperacion()
}

function salir(){
    alert ("Gracias por jugar a Mi Mascota Virtual. Que tengas buen día.")
}


registro();
ingresar();
seleccionarOperacion();