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
}

//Declaramos constantes para realizar operaciones basicas 

const suma = (a,b) => a + b;
const sumar  = (a,b,c,d) => a + b + c + d;
const resta = (a,b) => a - b;
const multiplicacion  = (a,b) => a * b;

//Declaramos variables para los productos y cantidad

let total = 0
let cantidad = 0
let shoes =  0
let rebook = 0
let adidas = 0
let topper = 0
let nike = 0
let zapatillas = 0
let precioRebook = 1200
let precioNike = 3000
let precioTopper = 4000
let precioAdidas = 8000
let resultado1 = 0
let resultado2 = 0
let resultado3 = 0
let resultado4 = 0

//Asignamos un prompt para que el usuario elija que zapatillas comprar y la cantidad

while(zapatillas > 4 || zapatillas < 1) {
        let zapatillas = prompt(`Elija el modelo que mas le guste colocando un numero del 1 al 4, para proceder al carrito presione 5
        \n1. Rebook ($1200)
        \n2. Adidas Fly 2 ($8000)
        \n3. Topper max ($4000)
        \n4. Nike Jordan Fly 3 ($3000)
        \n5. Ir al carrito
        \n6. Ir al pago`
        )
        
        switch (zapatillas) {  
                case "1":
                        cantidad = parseInt(prompt("Cuantos pares desea llevar?"))
                        rebook = suma(rebook, cantidad)
                        resultado1 = cantidad * precioRebook
                break;
                case "2":
                        cantidad = parseInt(prompt("Cuantos pares desea llevar?"))
                        adidas = suma(adidas, cantidad)
                        resultado2 = cantidad * precioAdidas
                break;
                case "3":
                        cantidad = parseInt(prompt("Cuantos pares desea llevar"))
                        topper = suma(topper, cantidad)
                        resultado3 = cantidad * precioTopper
                break;
                case "4":
                        cantidad = parseInt(prompt("Cuantos pares desea llevar"))
                        nike = suma(nike, cantidad)
                        resultado4 = cantidad * precioNike
                        
                break;
                default:   
                break;         
        }
        
        //Creamos un switch para proceder a los distintos metodos de pago
        
        switch (zapatillas) {
                case "5":
                        operacion = sumar(resultado1, resultado2, resultado3, resultado4 ) 
                        zapatillas = parseInt(prompt(`El valor total es ` + `$` + operacion + `  y este es su carrito:
                        \n Rebook ${rebook} par/es
                        \n Adidas ${adidas} par/es   
                        \n Topper ${topper} par/es    
                        \n Nike ${nike} par/es
                        \n Puede proceder a pagar dando al ENTER y presionando el 6`))
                break;

                case "6":
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
}

















            






    
    
    