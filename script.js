const nombre = document.getElementById("nombre");
const password = document.getElementById("password");
const email = document.getElementById("email");
const errorNombre = document.getElementById("errorNombre");
const errorPassword = document.getElementById("errorPassword");
const errorEmail = document.getElementById("errorEmail");
const formulario = document.getElementById("formulario");
let hasErrors = true;

formulario.addEventListener("input", () => {
    hasErrors = false;

    // Validar nombre
    if (nombre.value.trim() === "") {
        errorNombre.style.display = "block";
        hasErrors = true;
    } else {
        errorNombre.style.display = "none";
    }

    // Validar contraseña
    if (password.value.length < 8) {
        errorPassword.style.display = "block";
        hasErrors = true;
    } else {
        errorPassword.style.display = "none";
    }

    // Validar correo electrónico
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value)) {
        errorEmail.style.display = "block";
        hasErrors = true;
    } else {
        errorEmail.style.display = "none";
    }
});

formulario.addEventListener("submit", (e) => {
    if (hasErrors) {
        e.preventDefault();
        alert("Por favor, corrija los errores antes de enviar el formulario.");
    }
});