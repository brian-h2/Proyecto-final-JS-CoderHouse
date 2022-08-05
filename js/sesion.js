const nombre = document.getElementById("name_form")
const contrasenia = document.getElementById("password")
const email = document.getElementById("email")
const form  = document.getElementById("Formulario")
const sesion = document.getElementById("button-sesion")
const vaciarDatos = document.getElementById("button-sesion-vaciar")
const almacen = localStorage



const redireccionarPagina = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(window.location.href = '../index.html')
        }, 1200)
    })
}


form.addEventListener("submit", function(evento){
    evento.preventDefault()
    tecla(redireccionarPagina())
    click()
})

// Key publica de cuenta: kM1TKTIEXKlSizJv5
// Key privada de cuenta: O_imi_ETnrnKweb6VxmmQ
// Template ID: contact_form
// 

//Creamos una funcion que almacene los datos que ingrese en los campos de texto el usuario

function storage() {
    nombre.addEventListener("focusout", function(){
        almacen.setItem("nombre:", nombre.value)
    })
    
    contrasenia.addEventListener("focusout", function(){
        almacen.setItem("contrasenia:", contrasenia.value)
    })

    email.addEventListener("focusout", function(){
        almacen.setItem("correo:", email.value)
    })
    
    vaciarDatos.addEventListener("click", () => {
        almacen.clear()
        form.reset()
    })

}
storage()


/*Creamos una funcion para almacenar eventos dependiendo el caso que sea (En el primercaso se utiliza 
el operador lógico AND (&&) en el que retorna tal accion si la condicion es verdadera en este caso si 
se presiona la tecla Enter */

function tecla() {
    document.addEventListener("keyup", function(event) {
        event.code === 'Enter' && redireccionarPagina()
    });
}

function click() {
    sesion.addEventListener("click", () => {
        window.location.href = '../index.html'
    })
}

