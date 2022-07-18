//Al cargar el DOM va obtener el carrito y con el parse se transforma un string a objeto

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        mostrarProducto()
    }
})

