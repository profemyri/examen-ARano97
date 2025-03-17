    document.getElementById('index.html').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const nombre = document.getElementById('nombre').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();

    
    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    
    if (direccion.length < 15) {
        alert("La dirección debe tener al menos 15 caracteres.");
        return;
    }

    
    const telefonoRegex = /^[0-9]{9}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono debe tener exactamente 9 dígitos.");
        return;
    }

    
    if (!email.includes('@')) {
        alert("El email debe contener el carácter '@'.");
        return;
    }

   
    alert("Formulario enviado correctamente.");
    this.submit();
});

