//Array con informacion de los productos

const lista = [
        {id: 1, nombre: "Adidas Hoops 3.0", precio: 15600, img: "../img/productos-venta/adidas1.jpg", talle: "Talle 12"},
        {id: 2, nombre: "Adidas Cross Em Up", precio: 12000, img: "../img/productos-venta/adidas2.jpg", talle: "Talle 12"},
        {id: 3, nombre: "Nike Precision 5 Bred", precio: 30550, img: "../img/productos-venta/nike3.png", talle: "Talle 12"},
        {id: 4, nombre: "Adidas Four", precio: 43300, img: "../img/productos-venta/adidas4.jpg", talle: "Talle 12"},
        {id: 5, nombre: "Charged Spawn 3", img: "../img/productos-venta/under1.jpg", precio: 32500, talle: "Talle 12"},
        {id: 6, nombre: "Charged Essential", img: "../img/productos-venta/under2.png", precio: 42330, talle: "Talle 12"},
        {id: 7, nombre: "Under Armour Jet", precio: 45000, img: "../img/productos-venta/under3.jpg",talle: "Talle 12"},  
        {id: 8, nombre: "Nike KD 13 Black/grey", precio: 41900, img: "../img/productos-venta/nike2.jpg",talle: "Talle 10"},
        {id: 9, nombre: "Air Jordan XXXVI SE", precio: 52900, img: "../img/productos-venta/nike4.jpg",talle: "Talle 14"},
        {id: 10, nombre: "Nike Renew Elevate 3", precio: 38100, img: "../img/productos-venta/nike5.jpg",talle: "Talle 11"},
        {id: 11, nombre: "Kyrie Infinity By You", precio: 36000, img: "../img/productos-venta/nike6.jpg",talle: "Talle 13"},
        {id: 12, nombre: "Air Jordan XXXVI", precio: 32000, img: "../img/productos-venta/nike7.jpg",talle: "Talle 15"},
        {id: 13, nombre: "Air Jordan XXXVI FS", precio: 42300, img: "../img/productos-venta/nike8.jpg",talle: "Talle 11"},
        {id: 14, nombre: "Kyrie Infinity", precio: 32300, img: "../img/productos-venta/nike9.jpg",talle: "Talle 11"},
        {id: 15, nombre: "Nike Air Zoom G.T", precio: 52300, img: "../img/productos-venta/nike10.jpg",talle: "Talle 11"},

]  

//Constantes globales
  
const contenedorProductos = document.getElementById("tarjetas-compra")   

const carritoLista = document.getElementById("carrito-lista") 

const precioFinal = document.getElementById("precioTotal")

let carrito = []



//Creamos una iteracion para que se haga una card por cada objeto que se agregue al array lista 

for(const producto of lista) {    
        let columna = document.createElement(`div`)
        columna.classList.add(`columna`)
        columna.id = `columna-${producto.id}`
        columna.innerHTML = `
                <div class="card" style="max-width: 400px; width: 100%;">
                        <img src=${producto.img} alt="" class="imagen-productos">
                        <div class="card-body">
                                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                                <p class="card-text">Precio: <b>$${producto.precio}</b></p>
                                <button id="agregar${producto.id}" class="button-agregar"> Comprar</button>
                        </div> 
                </div>
        `
        contenedorProductos.appendChild(columna)

        //Boton para agregar productos al carrito en base al ID
        
        const boton = document.getElementById(`agregar${producto.id}`)
        
        boton.addEventListener('click', () => {
                agregarCarrito(producto.id)
                alert(`Su producto fue agregado al carrito`)
        })

}

//Arrow function para pushear el elemento que se elija a la variable carrito

const agregarCarrito = (prodId) => {
        const elemento = lista.find((prod) => prod.id === prodId)
        carrito.push(elemento)
        mostrarProducto()
}

//Function para eliminar tal elemento con un metodo splice en base a lo que nos pase el indexOf

function eliminarProducto(prodId) {
        const trash = carrito.findIndex((prod) => prod.id === prodId)
        const inicio = carrito.indexOf(trash)
        carrito.splice(inicio, 1)
        mostrarProducto()
}

//Este permite mostrar al producto cuando se va agregando al carrito y su precio total

const mostrarProducto = () => {

        carritoLista.innerHTML = ""
        
        carrito.forEach((producto) => {
        const product = document.createElement('div')
        product.classList.add(`carrito`)
        product.innerHTML = `
                                                                                        
        <table class="table">
                <thead>
                        <tr>
                                <th>Producto</th>
                                <th>Nombre del producto</th>
                                <th>Precio</th>
                        </tr>
                </thead>
                <tbody>
                        <tr>
                                <th><img src=${producto.img} alt="" style="width: 100px; height: 100px; background-color: #F0F0F0" class="imagen-carrito"></th>
                                <td>${producto.nombre}</td>
                                <td>${producto.precio} <button onclick="eliminarProducto(${producto.id})" = class="custom-btn btn"><i class="fas fa-trash-alt">Eliminar Producto</button></td>
                        </tr>
                </tbody>
        </table>
                                               `
        carritoLista.appendChild(product)
        })

        precioFinal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}


 /*const filtrado = document.getElementById("button-filter")
        filtrado.addEventListener('click', () => {
                precios.innerText =  lista.filter(producto => {
                        return producto.precio <= 52900;
                })
})*/



       


 
    