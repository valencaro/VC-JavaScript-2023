
//INICIO DE SESION

const form = document.getElementById('form')
const nombreUsuario = document.getElementById('username')
const contraseña = document.getElementById('password')
const contraseña2 = document.getElementById('password2');

const btnEmpecemos = document.getElementsByClassName('btnEmpecemos');

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
		Swal.fire({
            icon: 'success',
            title: '¡Inicio de sesión exitoso!',
            text: 'Redirigiendo a la próxima página...',
            timer: 3000,
            showConfirmButton: false,
			customClass:{
				popup: 'swal-custom',
			}
		}).then(() => {
            window.location.href = "../pages/page1.html";
        });
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
