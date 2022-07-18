const nombre = document.getElementById("name_form")
const contrasenia = document.getElementById("password")
const vaciarDatos = document.getElementById("button-sesion-vaciar")
const almacen = localStorage

nombre.addEventListener("focusout", function(){
    almacen.setItem("nombre_form", nombre.value)
})

contrasenia.addEventListener("focusout", function(){
    almacen.setItem("contrasenia_form", contrasenia.value)
})

vaciarDatos.addEventListener("click", () => {
    almacen.clear()
})

