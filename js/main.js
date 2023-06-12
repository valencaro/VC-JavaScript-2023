
//INICIO DE SESION

const form = document.getElementById('form')
const nombreUsuario = document.getElementById('username')
const contraseña = document.getElementById('password')
const contraseña2 = document.getElementById('password2');

form.addEventListener("submit", e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs(){
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
		setErrorFor(username, 'El nombre de usuario no puede quedar en blanco');
	} else {
		setSuccessFor(username);
	}

    if(passwordValue === '') {
		setErrorFor(password, 'La contraseña no puede quedar en blanco');
	} else {
		setSuccessFor(password);
	}

    if(password2Value === '') {
		setErrorFor(password2, 'La contraseña no puede quedar en blanco');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'La contraseña no coincide');
	} else{
		setSuccessFor(password2);
        guardarDatosUsuario();
        window.location.href = "http://127.0.0.1:5500/pages/page1.html";
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}


//GUARDAR DATOS

function guardarDatosUsuario() {
  const nombreUsuario = document.getElementById('username').value;
  var contrasenaUsuario = document.getElementById('password').value;

  localStorage.setItem('username', nombreUsuario);
  localStorage.setItem('password', contrasenaUsuario);
}

guardarDatosUsuario()








// const btnCrearMascota3 = document.getElementById(btnCrearMascota3);








// function aumentarValor() {
//   dinero += 50;
// }
// setInterval(aumentarValor, 3600000);

// aumentarValor()


// function consultarDinero() {
//     const saldoContainer = document.getElementByI('saldo');
//     saldoContainer.innerText = 'Saldo actual: $' + dinero;
// }

// consultarDinero()


// function comprarComida (){
//     if (dinero >= 50){
//         alert ("Pudiste comprar una hamburguesa para tu mascota.")
//         dinero-=50;
//         energiaMascota += 1;
//     }
//     else{
//         alert("No tenés suficiente dinero para comprar comida.")
//     }

// }

// comprarComida()

function alimentarMascota(){
    if (energiaMascota <= 5) {
        alert ("Tu mascota se encuentra con la energia baja")
    } else if(energiaMascota <= 7){
        alert ("Tu mascota tiene la energia normal");
    } if (energiaMascota >7) {
        alert ("Tu mascota se encuentra con la energia super alta");
    }
}

// function consultarEnergia(){
//     alert ("La energía de tu mascota es " + energiaMascota)
// }

// function verMascota(){
//     // console.log (mascotas)
//     seleccionarOperacion()
// }


// function salir(){
//     alert ("Gracias por jugar a Mi Mascota Virtual. Que tengas buen día.")
// }


