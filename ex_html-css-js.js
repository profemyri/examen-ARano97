    document.getElementById('index.html').addEventListener('submit', function(event) {
    event.preventDefault();

     
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('nombre').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();

    
    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    if (apellido === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    
    if (direccion.length < 15) {
        alert("La dirección debe tener al menos 15 caracteres.");
        return;
    }

    
    const telefono = /^[0-9]{9}$/;
    if (!telefono.test(telefono)) {
        alert("El teléfono debe tener exactamente 9 dígitos.");
        return;
    }

    
    if (!email.includes('@')) {
        alert("El email debe contener el carácter '@'.");
        return;
    }


    function calculateTotal() {
            const burgerPrice = parseFloat(document.getElementById("burgerType").value);
            const extraIngredients = parseInt(document.getElementById("extraIngredients").value);
            const quantity = parseInt(document.getElementById("quantity").value);

            const total = (burgerPrice + (extraIngredients * 1.5)) * quantity;
            document.getElementById("totalPrice").innerText = total.toFixed(2);
        }

        document.getElementById("burgerType").addEventListener("change", calculateTotal);
        document.getElementById("extraIngredients").addEventListener("input", calculateTotal);
        document.getElementById("quantity").addEventListener("input", calculateTotal);

     function confirmOrder() {
            const total = document.getElementById("totalPrice").innerText;
            const confirmation = confirm(`¿Quieres confirmar y enviar tu pedido ahora?\nPrecio total: ${total}`);
            if (confirmation) {
                document.getElementById("orderForm").submit();
            }
        }

        calculateTotal();
   
    alert("Formulario enviado correctamente.");
    this.submit();
});

