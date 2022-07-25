


//Constantes globales 

const contenedorProductos = document.getElementById("tarjetas-compra")   

const contenedorCamisetas = document.getElementById("tarjetas-camisetas")

const carritoLista = document.getElementById("carrito-lista") 

const precioFinal = document.getElementById("precioTotal")

let carrito = []


//Creamos una iteracion para que se haga una card por cada objeto que se agregue al array lista 

for(const producto of camisetas) {    
        let columnaCamisetas = document.createElement(`div`)
        columnaCamisetas.classList.add(`columnaCamisetas`)
        columnaCamisetas.id = `columnaCamisetas-${producto.id}`
        columnaCamisetas.innerHTML = `
                <div class="card" style="max-width: 400px; width: 100%;">
                        <img src=${producto.img} alt="" class="imagen-productos">
                        <div class="card-body">
                                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                                <p class="card-text">Precio: <b>$${producto.precio}</b></p>
                                <button id="agregar${producto.id}" class="button-agregar"> Comprar</button>
                        </div> 
                </div>
        `
        contenedorCamisetas.appendChild(columnaCamisetas)

        //Boton para agregar productos al carrito en base al ID
        
        const boton = document.getElementById(`agregar${producto.id}`)
        
        boton.addEventListener('click', () => {
                agregarCarrito1(producto.id)
                Swal.fire(
                        'Se agrego correctamente al carrito',
                        'Puede seguir comprando',
                        'success'
                )
        })

}

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
                //Coloco este alert para informarle al usuario que agrego correctamente el producto al carrito
                Swal.fire(
                        'Se agrego correctamente al carrito',
                        'Puede seguir comprando',
                        'success'
                        )
                }
                )
                
}
     


const agregarCarrito1 = (prodId) => {
        const elemento = camisetas.find((prod) => prod.id === prodId)
        carrito.push(elemento)
        mostrarProducto()
}
//Arrow function para pushear el elemento que se elija a la variable carrito

const agregarCarrito = (prodId) => {
        const elemento = lista.find((prod) => prod.id === prodId)
        carrito.push(elemento)
        mostrarProducto()
}

//Function para eliminar tal elemento con un metodo splice en base a lo que nos pase el indexOf

function eliminarProducto(productoId) {
        const trash = carrito.findIndex((prod) => prod.id === productoId)
        const inicio = carrito.indexOf(trash)
        carrito.splice(inicio, 1)
        mostrarProducto()
}

//Este permite mostrar al producto cuando se va agregando al carrito y su precio total

const mostrarProducto = () => {

        carritoLista.innerHTML=""
        
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
                                <td>$${producto.precio} <button id="alert" onclick="eliminarProducto(${producto.id})" class="custom-btn btn">Eliminar Producto</button></td>
                        </tr>
                </tbody>
        </table>
                                               `
        carritoLista.appendChild(product)
        
        //Seteamos el setItem para darle un nombre y valor al carrito, transformando el objeto a un string (Formato JSON)

        localStorage.setItem('carrito', JSON.stringify(carrito))
        })
        precioFinal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0)
}

//Esta seccion es para pagar los productos

const carro = document.getElementById("carrito-pagos") 
const contador = document.getElementById("contador-lista")


/*
const buton = document.getElementById('button-filtro-precio')

buton.addEventListener('click', () => {
        console.log(listaFiltrado)
})

const listaFiltrado = lista.filter(producto => {
        if(producto.precio < 32000) {
                return producto.precio
        }
})
*/

