function enviarDatos() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const altura = document.getElementById("altura").value.trim();
    const email = document.getElementById("email").value.trim();

    let mensaje = "";
    let esValido = true;

    if (nombre === "" || nombre.length > 50) {
        mensaje += "Complete el espacio en blanco y con menos de 50 carácteres.";
        esValido = false;
    }

    if (apellido === "" || nombre.length > 50) {
        mensaje += "Complete el espacio en blanco y con menos de 50 carácteres.";
        esValido = false;
    }

    if (edad < 0 || edad < 18) {
        mensaje += "Debe ingresar edad en valor positivo y ser mayor a +18."
        esValido = false
    }

    if (altura < 0 || altura > 230) {
        mensaje += "La altura debe ser mayor a cero y menor a 230(cm)."
        esValido = false
    }

    if (email === "" || !email.includes('@')) {
        mensaje += 'Debe rellenar el campo e incluir "@". ';
    }

    enviar.textContent = mensaje;

    if (esValido) {
        enviar.style.color = "green";

        enviar.textContent = "Todos los campos se completaron correctamente"
    } else {
        enviar.style.color = "red"
    }

}

