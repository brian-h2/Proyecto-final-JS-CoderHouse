//Al cargar el DOM va obtener el carrito y con el parse se transforma un string a objeto

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito')) 
        mostrarProducto()
    }
     
})

botonCarrito = document.getElementById("button-carrito")

botonCarrito.addEventListener("click", () => {
    //Coloco un toastify y un sweet alert asi dependiendo de la condicion del carrito es como actuen las alertas
    if(carrito.length == 0) {
        Toastify({
            text: "🚨Tienes el carrito vacio!🚨",
            className: "info",
            duration: 2000,
            position: "center",
            gravity: "bottom",
            style: {
              background: "#008000",
            }
          }).showToast();
    } else {
        Swal.fire({
        title: 'Estas seguro de vaciar el carrito?',
        text: "Los cambios no son reversibles",
        icon: 'ojo',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, vaciar!'
      }).then((result) => {
        //Este evento permite vaciar el LocalStorage
        result.isConfirmed === localStorage.clear() & window.location.reload() 
      })
    }
})


botonPagos = document.getElementById("pago")

botonPagos.addEventListener("click", () => {
    window.location.href = '#pagos.html'
})
