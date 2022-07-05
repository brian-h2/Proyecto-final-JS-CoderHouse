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
                case "2":
                        noSabesQueBuscar()
                default:
                    
                break;
            }
        }else {
            alert("No selecciono ningun producto")
        }
    }
    
    mostraMenu(prompt("Porfavor elegir un producto \n1 Zapatillas \n2 Buscar" ))
    
//Creamos una funcion con las zapatillas junto a un if y un prompt

function noSabesQueBuscar(pregunta) {

        const marcas = [
                {nombre: "nike"},
                {nombre: "zapasnike"},
                {nombre: "adidas"},
                {nombre: "basket zapatillas"},
        ];
        
        dudas = marcas.map((opciones) => opciones.nombre);
        alert("Estas son algunos de los terminos mas buscados \n" + dudas.join("  -  "))

        pregunta = prompt("Porfavor ingrese uno de los terminos anteriores y se le filtrara la busqueda ")

        respuesta1 = marcas.find((pregunta) => pregunta.nombre === "nike")
        respuesta1 = alert(nike())
        
        respuesta2 = marcas.find((pregunta) => pregunta.nombre === "zapasnike")
        respuesta2 = alert(nike())

        respuesta4 = marcas.find((pregunta) => pregunta.nombre === "basket zapatillas")
        respuesta4 = alert(nike())
        

}

function zapatillasMenu(zapas) {
        
        zapas = prompt("Elija su marca de preferencia😎 e ingrese un numero \n1 Nike \n2 Adidas \n3 Under Armour" )
        
        if(zapas == 1) {
            nike()
        } else {
                alert("Seleccione una opcion")
        }
}
    
//Una funcion constructora para utilizar los elementos declarados de la misma y definir las caracteristicas de cada zapatilla junto a loselementos tanto nombre, precio y talle a eleccion


function nike() {
        
        const sumar = (a, b) => a + b;
        const multi = (a, b) => a * b;
        let total = 0
        let precio2 = 0
         
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

        let nike = prompt("Ingrese el modelo de preferencia \n1 Nike Precision V \n2 Nike LeBron Witness 6 \n3 Proceder al pago")
        
        switch(nike) {
            case "1":
                const nike1 = new Tienda("Nike Precision V", 35000, talle)
                alert(`Este es el producto que usted eligio \nNombre : ${nike1.nombre} \n Su talle elegido es : ${nike1.talle}\n Precio $ : ${nike1.precio}`)
                let cantidad = parseInt(prompt(`Porfavor ingrese la cantidad de pares`))
                total = multi(cantidad, 35000)
                precio1 = sumar(total, 0)
                preguntar()
                pagos()
                             
            break;
            case "2":
                const nike2 = new Tienda("Nike Lebron witness 6", 32000, talle) 
                alert(`Este es el producto que usted eligio \nNombre : ${nike2.nombre} \n Su talle elegio es : ${nike2.talle}\n Precio $ : ${nike2.precio}`) 
                cantidad = parseInt(prompt(`Porfavor ingrese la cantidad de pares`))
                total = multi(cantidad, 32000)
                precio2 = sumar(total, 0)
                preguntar()
                pagos()
            break;
            case "3":
                totalNike = sumar(precio1, precio2)
                let metodos = prompt(`Elija un plan de pago
                \n1. Efectivo
                \n2. Transferencia
                \n3. Tarjeta`)
                switch(metodos) {
                        case "1":
                                pregunta1 = parseInt(prompt(`El monto a abonar es ${totalNike} pesos`))
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
                                
                        break 
                }
        }
    
}


           
//Funcion para preguntar si desea algo mas el comprador
    
function preguntar() {
        let preguntaCompra = prompt("Desea comprar algo mas? En el caso de no puede proceder al carrito")
        
        if(preguntaCompra == "si") {
            mostraMenu(prompt("Porfavor elegir un producto \n1 Zapatillas" ))
        } else (preguntaCompra == "no") 
            alert("Sera redirigido a su carrito dentro de la seccion nike") 
            nike()
            
}


















            






    
    
    