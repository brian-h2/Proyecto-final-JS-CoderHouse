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
        
        zapas = prompt("Elija su marca de preferencia e ingrese un numero \n1 Nike" )
        
        if(zapas == 1) {
            nike()
        }
}
    
//Creamos funcion de la marca y que modelos tiene 
    
function nike() {
        
        let pregunta = prompt("Si su respuesta es si, se le mostrara la lista de productos o no para proceder")
    
//Declaramos un array para mostrar los nuevos modelos ingresados
    
        const productosNike = [
            { id: 1, nombre: "Nike Precision V", precio: "$1200"},
            { id: 2, nombre: "Nike LeBron Witness 6", precio: "900"},
        ];
    
//Se crea el while para la pregunta dependiendo de lo que de el usuario
    
        while(pregunta != "si" && pregunta != "no") {
            alert("Seleccione una opcion, porfavor")
            pregunta = prompt("Si su respuesta es si,se le mostrara la lista de productos o no para proceder")
        }
    
//Un if en caso que la pregunta sea si, dentro del mismo una variable, integrada por metodo de array (map y join) junto a un alert asi demostrando la lista de productos existentes
    
        if(pregunta == "si") {
            let listaproductos = productosNike.map((opciones) => opciones.nombre);
            alert("Las nuevas zapas ingresadas son " + "\n" + listaproductos.join(" , "))
        }
        
        let talle = 0
        
//Una funcion constructora para utilizar los elementos declarados de la misma y definir las caracteristicas de cada zapatilla junto a loselementos tanto nombre, precio y talle a eleccion
    
        class Tienda{
            constructor(nombre, precio, talle) {
                this.nombre = nombre; 
                this.precio = precio,
                this.talle = prompt("Ingrese su talle");
            }
        
        }
        
        let nike = prompt("Ingrese el modelo de preferencia \n1 Nike Precision V \n2 Nike LeBron Witness 6")
    
//De acuerdo al modelo que elija el usuario, el switch hara su trabajo y mostrara por alert el producto elejido
        
        switch(nike) {
            case "1":
                const nike1 = new Tienda("Nike Precision V", "$500", talle)
                alert(`Este es el producto que usted eligio \nNombre : ${nike1.nombre} \n Su talle elegido es : ${nike1.talle}\n Precio : ${nike1.precio}`)
                preguntar()
            break;
            case "2":
                const nike2 = new Tienda("Nike Lebron witness 6", "$1200", talle) 
                alert(`Este es el producto que usted eligio \nNombre : ${nike2.nombre} \n Su talle elegio es : ${nike2.talle}\n Precio : ${nike2.precio}`) 
                preguntar()
            break;
            default:
                alert("Seleccione un numero")
            break;
        }
    
}
    
//Funcion para preguntar si desea algo mas el comprador
    
function preguntar() {
        let preguntaCompra = prompt("Desea comprar algo mas?")
        
        if(preguntaCompra == "si") {
            mostraMenu(prompt("Porfavor elegir un producto \n1 Zapatillas" ))
        } else (preguntaCompra == "no") 
            alert("Abandono la compra, que tenga buenos dias")
        
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

















            






    
    
    