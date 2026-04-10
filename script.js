const API="PEGAR_AQUI_TU_URL_WEBAPP"

function getData(){

return {
codigo:document.getElementById("codigo").value,
nombre:document.getElementById("nombre").value,
edad:document.getElementById("edad").value,
fechaNacimiento:document.getElementById("fechaNacimiento").value,
telefono:document.getElementById("telefono").value,
emergencia:document.getElementById("emergencia").value,
genero:document.getElementById("genero").value,
enfermedad:document.getElementById("enfermedad").value,
grado:document.getElementById("grado").value,
direccion:document.getElementById("direccion").value,

padreNombre:document.getElementById("padreNombre").value,
padreDpi:document.getElementById("padreDpi").value,
padreTelefono:document.getElementById("padreTelefono").value,

madreNombre:document.getElementById("madreNombre").value,
madreDpi:document.getElementById("madreDpi").value,
madreTelefono:document.getElementById("madreTelefono").value,

encargadoNombre:document.getElementById("encargadoNombre").value,
encargadoDpi:document.getElementById("encargadoDpi").value,
encargadoTelefono:document.getElementById("encargadoTelefono").value
}

}

function guardar(){

fetch(API,{
method:"POST",
body:JSON.stringify({
action:"guardar",
data:getData()
})
})
.then(r=>r.json())
.then(r=>alert(r.msg))

}

function buscar(){

const codigo=document.getElementById("buscarCodigo").value

fetch(API,{
method:"POST",
body:JSON.stringify({
action:"buscar",
data:{codigo:codigo}
})
})
.then(r=>r.json())
.then(r=>cargar(r.data))

}

function cargar(d){

if(!d)return alert("No encontrado")

document.getElementById("codigo").value=d[0]
document.getElementById("nombre").value=d[1]
document.getElementById("edad").value=d[2]

}

function actualizar(){

fetch(API,{
method:"POST",
body:JSON.stringify({
action:"actualizar",
data:getData()
})
})
.then(r=>r.json())
.then(r=>alert(r.msg))

}

function borrar(){

const codigo=document.getElementById("codigo").value

fetch(API,{
method:"POST",
body:JSON.stringify({
action:"borrar",
data:{codigo:codigo}
})
})
.then(r=>r.json())
.then(r=>alert(r.msg))

}

function nuevo(){
document.getElementById("formulario").reset()
}
