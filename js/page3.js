//PAGINA 3

const mascotas = []

function crearMascota() {
    // Obtener los valores ingresados por el usuario
    const nombre = document.getElementById("inputNombre").value;
    const sexo = document.getElementById("inputSexo").value;
    const comida = document.getElementById("inputComida").value;

    const mascota = {
        nombre : nombre,
        sexo : sexo,
        comida : comida,
    };

    mascotas.push(mascota);

    document.getElementById("inputNombre").value = "";
    document.getElementById("inputSexo").value = "";
    document.getElementById("inputComida").value = ""; 
    
    window.location.href = "../pages/page4.html";

}

//Metodo filtrado ---> corregir

function buscarMascotasPorTipo(tipo) {
    const mascotasFiltradas = mascotas.filter(function(mascota) {
        return mascota.tipo === tipo;
    });

    return mascotasFiltradas;
}

buscarMascotasPorTipo("perro")
