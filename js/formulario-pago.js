const nombre = document.getElementById("name")
const pago = document.getElementById("boton-pago")
const cantidadPago = document.getElementById("numero-pago")


formulario.addEventListener("submit",(event) =>{
    event.preventDefault()
    if(nombre.value.length < 3) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tu nombre es muy corto!',
        })

    }else {
        Swal.fire(
            'Su pago se ha realizado correctamente',
            'Puede seguir comprando',
            'success'
        )
    }
})    
    
