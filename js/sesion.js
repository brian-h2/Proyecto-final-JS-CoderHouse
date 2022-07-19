const nombre = document.getElementById("name_form")
const contrasenia = document.getElementById("password")
const email = document.getElementById("email")
const form  = document.getElementById("Formulario")
const sesion = document.getElementById("button-sesion")
const vaciarDatos = document.getElementById("button-sesion-vaciar")
const almacen = localStorage


//Creamos un evento para evitar que se recargue la pagina evitando asi que se eliminen los datos ingresados al formulario

form.addEventListener("submit", function(evento){
    evento.preventDefault()
    tecla()
    click()
})

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

//Creamos una funcion para almacenar eventos dependiendo el caso que sea

function tecla() {
    document.addEventListener("keyup", function(event) {
        if (event.code === 'Enter') {
            redireccionar()
        } else{
            click()
        }
    });
}

function click() {
    sesion.addEventListener("click", () => {
        window.location.href = '../index.html'
    })
}

//Esta function es para que cuando ocurra un evento se redirija a la pagina

function redireccionar() {
    window.location.href = '../index.html';
}