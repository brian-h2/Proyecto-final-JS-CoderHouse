
const lista = []
const sumar = (a, b) => a + b;
const multi = (a, b) => a * b;
const sumaGrande = (a, b, c) => a + b + c;

let talle = 0
let cantidad = 0

class Tienda{
        constructor(nombre, precio, talle) {
            this.nombre = nombre; 
            this.precio = precio,
            this.talle = talle = prompt("Ingrese su talle");
        }
}

function preguntar() {
        
        let preguntaCompra = prompt("Quiere comprar algo mas? si/no")
   
        if(preguntaCompra == "si") {
                mostraMenu()
               
        } else if(preguntaCompra == "no") {
                alert("Sera redirigido a su carrito")
                carrito()
        } else {
                alert('Ingrese una opción valida')
                preguntar()
        }    
}

let usuario = prompt("Porfavor ingrese su usuario")
let contraseña = prompt("Porfavor ingrese su contraseña")    

if ((usuario !="") && (contraseña !="")){
        alert("Bienvenido "+ usuario )
}else{
        alert("Error: Ingresar usuario y contraseña")
        let usuario = prompt("Porfavor ingrese su usuario")
        let contraseña = prompt("Porfavor ingrese su contraseña")
        while(usuario == "" || contraseña == "") {
                alert("Porfavor ingrese los datos correctos")
                let usuario = prompt("Porfavor ingrese su usuario")
                let contraseña = prompt("Porfavor ingrese su contraseña")
        } 
}

//Creo una funcion para mostrar el menu (Aclaro que solo lo hice con una sola marca)

function mostraMenu(menu) {
        if(menu > 1 || menu < 3){
                switch(menu) {
                        case "1":
                                zapatillasMenu()
                        break;
                        case "2":
                                noSabesQueBuscar()
                        default:
                                alert("Seleccione una opcion valida")
                                mostraMenu()
                        break;
                }
        }else {
                mostraMenu(prompt("Porfavor elegir un producto \n1 Zapatillas \n2 Buscar" ))
        }
    }
    
mostraMenu(prompt("Porfavor elegir un producto \n1 Zapatillas \n2 Buscar" ))

function noSabesQueBuscar() {
        const terminos = [
                {nombre: "adidas"},
        ]

        listadudas = terminos.map((opciones) => opciones.nombre);
        alert("Estos son los terminos mas buscados, ingrese alguno de preferencia " + "\n" + listadudas.join("\n"))

        let preguntaDudas = prompt("Si no sabe que encontrar en la tienda puede escribir algun termino de los que aparecieron anteriormente" ) 

        const questionOne = terminos.find((el) => el.nombre === "adidas")
        questionOne = adidas()

}

function zapatillasMenu() {
        
        let zapatillasPregunta = prompt(`Seleccione su marca preferida \n1. Adidas \n2. Under Armour`)
        
        if (zapatillasPregunta == "1") {
                adidas()
        } else if (zapatillasPregunta == "2") {
                underArmour()
        } else {
                alert("Seleccione un termino correcto")
                zapatillasPregunta = prompt(`Seleccione su marca preferida \n1. Adidas \n2. Under Armour`)
        }
}


function adidas() {
        const productosAdidas = [
                { id: 1, nombre: "Hoops 3.0 Mid Classic Vintage", precio: 15500},
                { id: 2, nombre: "Adidas Cross Em Up 5K", precio: 12000},
        ];

        listaproductos = productosAdidas.map((opciones) => opciones.nombre);
        alert("Las nuevas zapas ingresadas son " + "\n" + listaproductos.join("\n"))

        let adidasLista = prompt("Ingrese el modelo que mas le guste \n1 Hoops 3.0 Mid Classic Vintage \n2 Adidas Cross Em Up 5k \n3 Adidas Next level \n4 Adidas Trae Young 1")

        if (adidasLista > 0 || adidasLista < 3) {
                switch(adidasLista) {
                        case "1":
                                const adidas1 = new Tienda("Adidas Hoops 3.0", 15600, talle)
                                alert(`Este es el producto que usted eligio \n Nombre : ${adidas1.nombre} \n Su talle elegido es : ${adidas1.talle}\n Precio $ : ${adidas1.precio}`)
                                cantidad = parseInt(prompt(`Porfavor ingrese la cantidad de pares`))
                                totalAdidas1 = multi(cantidad, 15600)
                                precioAdidasOne= sumar(totalAdidas1, 0)
                                lista.push(`Modelo: ${adidas1.nombre} precio: ${precioAdidasOne} pesos`)
                               
                        break;
                        case "2":
                                const adidas2 = new Tienda("Adidas Cross Em Up 5K", 12000, talle)
                              
                                alert(`Este es el producto que usted eligio \nNombre : ${adidas2.nombre} \n Su talle elegido es : ${adidas2.talle} \n Precio $ : ${adidas2.precio}`)
                                cantidad = parseInt(prompt(`Porfavor ingrese la cantidad de pares`))
                                totalAdidas2 = multi(cantidad, 12000)
                                precioAdidasTwo= sumar(totalAdidas2, 0)
                                lista.push(`Modelo: ${adidas2.nombre} precio: ${precioAdidasTwo} pesos`)
                                
                        break;
                        case "3":
                                const adidas3 = new Tienda("Adidas Next Level", 39500, talle)
                                alert(`Este es el producto que usted eligio \nNonbre : ${adidas3.nombre} \n Su talle elegido es : ${adidas3.talle} \n Precio $ : ${adidas3.precio}`)
                                cantidad = parseInt(prompt(`Porfavor ingrese la cantidad de pares`))
                                totalAdidas3 = multi(cantidad, 39500)
                                precioAdidasThree= sumar(totalAdidas3, 0)
                                lista.push(`Modelo: ${adidas3.nombre} precio: ${precioAdidasThree} pesos`)
                               
                        break;
                        case "4":
                                const adidas4 = new Tienda("Adidas Trae Young 1", 43300, talle)
                                alert(`Este es el producto que usted eligio \nNombre : ${adidas4.nombre} \n Su talle elegido es : ${adidas4.talle} \n Precio $ : ${adidas4.precio}`)
                                cantidad = parseInt(prompt(`Porfavor ingrese la cantidad de pares`))
                                totalAdidas4 = multi(cantidad, 12000)
                                precioAdidasFour= sumar(totalAdidas4, 0)
                                lista.push(`Modelo: ${adidas4.nombre} precio: ${precioAdidasFour} pesos`)
                                
                        break;
                        default:
                        break;
                        }
                preguntar()
        } else {
                alert("Seleccione un numero porfavor")
        }

}


function underArmour () {

        const productosNuevos = [
                { id: 1, nombre: "Under Armour Charged Spawn 3", precio: 32500},
                { id: 2, nombre: "Charged Essential Under Armour", precio: 42300},
                { id: 3, nombre: "Hoops 3.0 Mid Classic Vintage", precio: 15500},
                { id: 4, nombre: "Adidas Cross Em Up 5K", precio: 12000},
        ];

        listaproductos = productosNuevos.map((opciones) => opciones.nombre);
        alert("Las nuevas zapas ingresadas son " + "\n" + listaproductos.join("\n"))
        
        let underLista = prompt("Ingrese el modelo que mas le guste \n1 Under Armour Charged Spawn 3 \n2 Charged Essential Under Armour \n3 Under Armour Spawn 3 ")

        switch(underLista) {
                case "1":
                        const under1 = new Tienda ("Under Armour Charged Spawn 3", 32500, talle)
                        alert(`Este es el producto que usted eligio \nNombre: ${under1.nombre} \n Su talle elegido es: ${under1.talle} \n Precio $ : ${under1.precio}`)
                        cantidad = parseInt(prompt(`Porfavor ingrese la cantidad de pares`))
                        totalUnder1 = multi(cantidad, 32500)
                        precioUnderOne = sumar(totalUnder1, 0)
                        lista.push(`Modelo: ${under1.nombre} - precio: ${precioUnderOne} pesos`)
                
                break;
                case "2":
                        const under2 = new Tienda ("Charged Essential Under Armour", 42300, talle)
                        alert(`Este es el producto que usted eligio \nNombre ${under2.nombre} \n Su talle elegido es: ${under2.talle} \n Precio $ : ${under2.precio}`)
                        cantidad = parseInt(prompt(`Porfavor ingrese la cantidad de pares`))
                        totalUnder2 = multi(cantidad, 42300)
                        precioUnderTwo = sumar(totalUnder2, 0)
                        lista.push(`Modelo: ${under2.nombre} - precio: ${precioUnderTwo} pesos`)
                break;
                case "3":
                        const under3 = new Tienda ("Under Armour Spawn 3", 45000, talle)
                        alert(`Este es el producto que usted eligio \nNombre ${under3.nombre} \n Su talle elegido e: ${under3.talle} \n Precio $ : ${under3.precio}`)
                        cantidad = parseInt(prompt(`Porfavor ingrese la cantidad de pares`))
                        totalUnder3 = multi(cantidad, 42300)
                        precioUnderTree = sumar(totalUnder3, 0)
                        lista.push(`Modelo: ${under3.nombre} precio: ${precioUnderTree} pesos`)
                break;
                default:
                        alert("Seleccione una opcion")
                break;
        }
        preguntar()
}


function carrito() {
        alert(`Esta es su lista de compras: \n ${lista}`)
        pagos()
}

function pagos() {
        let metodos = prompt(`Elija un plan de pago
        \n1. Efectivo
        \n2. Transferencia
        \n3. Tarjeta`)
        switch(metodos) {
                case "1":
                        alert("Su pago se a realizado correctamente")
                break;
                case "2":
                        pregunta2 = prompt(`Aqui estan los datos de la cuenta bancaria a la que debe transferir el dinero
                        \n #Banco galicia 01702046600000087865`)
                break;
                
                case "3":
                        pregunta3 = prompt(`Seleccione alguna de las opciones con un numero del 1 al 3
                        \n1- 3 Cuotas
                        \n2- 6 Cuotas
                        \n3- 12 Cuotas con interes`)
                        alert("Se completo el pago de acuerdo a las cuotas seleccionadas")
                break;
                default: 
                        alert("Seleccion un numero porfavor")
                        pagos()
                break 
        }   
}

//Manejo de DOM (Aclaro que imprime los precios del array lista1)



let title = document.getElementById("#title")

console.log(title.innerHTML)

title.innerHTML = "Bienvenido"

console.log(title.innerHTML)

for (const zapatilla of lista) {
        let contenedor = document.createElement("div")

        contenedor.innerHTML = `<h2> Nombre: ${zapatilla.nombre}</h2>
                                <p> Precio: ${zapatilla.precio} </p>`

        document.body.appendChild(contenedor)
}
        
        

        




            






    
    
    