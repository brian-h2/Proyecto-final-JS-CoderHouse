const pago = document.getElementById("boton-pago")

pago.addEventListener("click", (event) => {
    event.preventDefault()
    Swal.fire(
        'Su pago se ha realizado correctamente',
        'Puede seguir comprando',
        'success'
        )
})