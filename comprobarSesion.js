window.addEventListener("load", function () {
    let botonLog = document.getElementById("botonLog");
    let botonLogOut = document.getElementById("botonLogOut");

    let sesion = localStorage.getItem("sesionIniciada");

    if (sesion) {
        botonLog.style.display = "none";
        botonLogOut.style.display = "flex";
    } else {
        botonLog.style.display = "flex";
        botonLogOut.style.display = "none";
    }

    function cerrarSesion() {
        localStorage.removeItem("sesionIniciada");
        botonLog.style.display = "flex";
        botonLogOut.style.display = "none";
        
    }
    function redirigir(){
        window.location.href = "login.html"; 
    }
    botonLogOut.addEventListener("click", cerrarSesion);
    botonLog.addEventListener("click", redirigir);
});