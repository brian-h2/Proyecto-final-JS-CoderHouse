/*Simulador en el que el usuario pueda ingresar a la pagina y 
interactuar con los articulos de la tienda, seleccionar cuales y la forma de pago*/

//Cuando ingresa se solicita el usuario y contraseña
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
        } 
}

//Creo una funcion para mostrar el menu (Aclaro que solo lo hice con una sola marca)

function mostraMenu(menu) {
        if(menu > 1 || menu < 3){
            switch(menu) {
                case "1":
                    zapatillasMenu()
                break;
                default:
                    
                break;
            }
        }else {
            alert("No selecciono ningun producto")
        }
    }
    
    mostraMenu(prompt("Porfavor elegir un producto \n1 Zapatillas" ))
    
//Creamos una funcion con las zapatillas junto a un if y un prompt
    
function zapatillasMenu(zapas) {
        
        zapas = prompt("Elija su marca de preferencia😎 e ingrese un numero \n1 Nike \n2 Adidas \n3 Under Armour" )
        
        if(zapas == 1) {
            nike()
        }else if (zapas == 2) {
                adidas()
        } else if (zapas == 3) {
                underArmour()
        } else {
                alert("Seleccione una opcion")
        }
}

//Una funcion constructora para utilizar los elementos declarados de la misma y definir las caracteristicas de cada zapatilla junto a loselementos tanto nombre, precio y talle a eleccion




function underArmour() {
        class Tienda{
                constructor(nombre, precio, talle) {
                    this.nombre = nombre; 
                    this.precio = precio,
                    this.talle = talle = prompt("Ingrese su talle");
                }
            
            }
        
        let talle = 0

        const productosUnder = [
                { id: 1, nombre: "Under Armour Charged Spawn 3", precio: 32500},
                { id: 2, nombre: "Charged Essential Under Armour", precio: 42300},
        ];

        listaproductos = productosUnder.map((opciones) => opciones.nombre);
        alert("Las nuevas zapas ingresadas son " + "\n" + listaproductos.join(" , "))

        let under = prompt("Ingrese el modelo que mas le guste \n1 Under Armour Charged Spawn 3 \n2 Charged Essential Under Armour \n3 Under Armour Spawn 3 ")

        switch(under) {
                case "1":
                        const under1 = new Tienda ("Under Armour Charged Spawn 3", 32500, talle)
                        alert(`Este es el producto que usted eligio \nNombre: ${under1.nombre} \n Su talle elegido es: ${under1.talle} \n Precio $ : ${under1.precio}`)
                        preguntar()
                break;
                case "2":
                        const under2 = new Tienda ("Charged Essential Under Armour", 42300, talle)
                        alert(`Este es el producto que usted eligio \nNombre ${under2.nombre} \n Su talle elegido es: ${under2.talle} \n Precio $ : ${under2.precio}`)
                        preguntar()
                break;
                case "3":
                        const under3 = new Tienda ("Under Armour Spawn 3", 45000, talle)
                        alert(`Este es el producto que usted eligio \nNombre ${under3.nombre} \n Su talle elegido e: ${under3.talle} \n Precio $ : ${under3.precio}`)
                        preguntar()
                break;
                default:
                        alert("Seleccione una opcion")
                break;
        }


}

function adidas() {
        
        class Tienda{
                constructor(nombre, precio, talle) {
                    this.nombre = nombre; 
                    this.precio = precio,
                    this.talle = talle = prompt("Ingrese su talle");
                }
            
            }
        
        let talle = 0

        const productosAdidas = [
                { id: 1, nombre: "Adidas Next level", precio: 39500},
                { id: 2, nombre: "Adidas Trae Young 1", precio: 43300},
        ];

        listaproductos = productosAdidas.map((opciones) => opciones.nombre);
        alert("Las nuevas zapas ingresadas son " + "\n" + listaproductos.join(" , "))

        let adidas = prompt("Ingrese el modelo que mas le guste \n1 Hoops 3.0 Mid Classic Vintage \n2 Adidas Cross Em Up 5k \n3 Adidas Next level \n4 Adidas Trae Young 1")

        switch(adidas) {
                case "1":
                        const adidas1 = new Tienda("Adidas Hoops 3.0", 6500, talle)
                        alert(`Este es el producto que usted eligio \nNombre : ${adidas1.nombre} \n Su talle elegido es : ${adidas1.talle}\n Precio $ : ${adidas1.precio}`)
                        preguntar()
                break;
                case "2":
                        const adidas2 = new Tienda("Adidas Cross Em Up 5K", 12000, talle)
                        alert(`Este es el producto que usted eligio \nNombre : ${adidas2.nombre} \n Su talle elegido es : ${adidas2.talle} \n Precio $ : ${adidas2.precio}`)
                        preguntar()
                break;
                case "3":
                        const adidas3 = new Tienda("Adidas Next Level", 39500, talle)
                        alert(`Este es el producto que usted eligio \nNonbre : ${adidas3.nombre} \n Su talle elegido es : ${adidas3.talle} \n Precio $ : ${adidas3.precio}`)
                        preguntar()
                break;
                case "4":
                        const adidas4 = new Tienda("Adidas Trae Young 1", 43300, talle)
                        alert(`Este es el producto que usted eligio \nNombre : ${adidas4.nombre} \n Su talle elegido es : ${adidas4.talle} \n Precio $ : ${adidas4.precio}`)
                        preguntar()
                break;
                default:
                        alert("Elija un numero porfavor")
                break;
        }
}  



function nike() {
         
        class Tienda{
                constructor(nombre, precio, talle) {
                    this.nombre = nombre; 
                    this.precio = precio,
                    this.talle = talle = prompt("Ingrese su talle");
                }   
            }
        
        let talle = 0
    
        const productosNike = [
            { id: 1, nombre: "Nike Precision V", precio: 35000},
            { id: 2, nombre: "Nike LeBron Witness 6", precio: 32000},
        ];
    
        let listaproductos = productosNike.map((opciones) => opciones.nombre);
        alert("Las nuevas zapas ingresadas son " + "\n" + listaproductos.join(" , "))

        let nike = prompt("Ingrese el modelo de preferencia \n1 Nike Precision V \n2 Nike LeBron Witness 6")
        
        switch(nike) {
            case "1":
                const nike1 = new Tienda("Nike Precision V", 35000, talle)
                alert(`Este es el producto que usted eligio \nNombre : ${nike1.nombre} \n Su talle elegido es : ${nike1.talle}\n Precio $ : ${nike1.precio}`)
                preguntar()
                nike1.push(carrito)              
            break;
            case "2":
                const nike2 = new Tienda("Nike Lebron witness 6", 32000, talle) 
                alert(`Este es el producto que usted eligio \nNombre : ${nike2.nombre} \n Su talle elegio es : ${nike2.talle}\n Precio $ : ${nike2.precio}`) 
                preguntar()
                nike2.push(carrito)
            break;
            default:
                alert("Seleccione un numero")
            break;
        }
    
}
 
    
//Funcion para preguntar si desea algo mas el comprador
    
function preguntar() {
        let preguntaCompra = prompt("Desea comprar algo mas? En el caso de no puede proceder al carrito")
        
        if(preguntaCompra == "si") {
            mostraMenu(prompt("Porfavor elegir un producto \n1 Zapatillas" ))
        } else (preguntaCompra == "no") 
            alert("Sera redirigido a su carrito")
            suma()
            
      
}


const carrito = []

function suma() {
        const carrito = []
        alert(`Su lista de compras es esta ${carrito}`)
}





                /*case "6":
                        let efectivo = ""
                        let transferencia = ""
                        let tarjeta = ""
                        
                        let ropa = prompt(`Elija un plan de pago
                        \n1. Efectivo
                        \n2. Transferencia
                        \n3. Tarjeta`)
                        while (ropa > 4 || ropa < 1) { 
                                alert("No selecciono una opcion correcta")
                                let ropa = parseInt(prompt(`Elija un plan de pago
                                \n1. Efectivo
                                \n2. Tranferencia
                                \n3. Tarjeta`) ) 
                        } 
                        
                        //Colocamos un switch para cada opcion
                        
                        switch (ropa) {
                                case "1":
                                        efectivo = parseInt(prompt("El monto a abonar es " + operacion))
                                        alert("Su pago se a realizado correctamente")
                                break;
                                case "2":
                                        transferencia = prompt(`Aqui estan los datos de la cuenta bancaria a la que debe transferir el dinero
                                        \n #Banco galicia 01702046600000087865`)
                                break;
                                
                                case "3":
                                        tarjeta = prompt(`Seleccione alguna de las opciones con un numero del 1 al 3
                                        \n1- 3 Cuotas
                                        \n2- 6 Cuotas
                                        \n3- 12 Cuotas con interes`)
                                        alert("Se completo el pago de acuerdo a las cuotas seleccionadas")
                                break;
                                default: 
                                        alert(pregunta)
                                break
                        }while (pago < 1 || pago > 3 || pregunta === "no"){
                                  
                        } 
                      
                        
                default:
                break;
        }
}*/

















            






    
    
    