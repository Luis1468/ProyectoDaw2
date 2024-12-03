// Obtener los elementos de los formularios y los radios
window.addEventListener("load", function () {

    let usuarioForm = this.document.getElementById("usuario");
    let contraseñaForm = this.document.getElementById("contraseña");
    let botonForm = this.document.getElementById("entrarWeb");

    let iniciarForm = this.document.getElementById("iniciar");
    let registrarForm = this.document.getElementById("registrar");
    let iniciarRadio = this.document.getElementById("iniciarSes");
    let registrarRadio = this.document.getElementById("registrarSes");

    let usuarios = [
        {
            usuario: "admin",
            contraseña: "admin",
            rol: 1
        }, {
            usuario: "profesor",
            contraseña: "Example123@",
            rol: 2
        }, {
            usuario: "alumno",
            contraseña: "Example123@",
            rol: 3
        }
    ];

    
    // Función para cambiar los formularios
    function cambiarFormulario() {
        if (iniciarRadio.checked) {
            iniciarForm.style.display = "block";  
            registrarForm.style.display = "none"; 
        }else if (registrarRadio.checked) {
            iniciarForm.style.display = "none";   
            registrarForm.style.display = "block"; 
        }
    }

    function iniciarSesion() {
        contraseñaForm = contraseñaForm.value;
        usuarioForm = usuarioForm.value;
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].usuario == usuarioForm && usuarios[i].contraseña == contraseñaForm) {
                localStorage.setItem("sesionIniciada", usuarioForm); // Guardamos la sesión en localStorage
                window.location.href = "index.html"; // Redirigimos a index.html
            }
        }
    }

    botonForm.addEventListener("click", iniciarSesion)
    iniciarRadio.addEventListener("change", cambiarFormulario);
    registrarRadio.addEventListener("change", cambiarFormulario);
});