//Al cargar el DOM va obtener el carrito y con el parse se transforma un string a objeto

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito')) 
        mostrarProducto()
    }
     
})

botonCarrito = document.getElementById("button-carrito")

//Este evento permite borrar el localStorage

botonCarrito.addEventListener("click", () => {
    //Coloco un alert para preguntar si realmente desea variar el carrito dandole dos opciones
    Swal.fire({
        title: 'Estas seguro de vaciar el carrito?',
        text: "Los cambios no son reversibles",
        icon: 'ojo',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar!'
      }).then((result) => {
        result.isConfirmed === localStorage.clear() & window.location.reload() 
      })
})


botonPagos = document.getElementById("pago")

botonPagos.addEventListener("click", () => {
    window.location.href = '#pagos.html'
})