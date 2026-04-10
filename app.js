const role=localStorage.getItem("role")

if(!role){
location.href="login.html"
}

if(role!="admin"){
document.addEventListener("DOMContentLoaded",()=>{
document.getElementById("exportBtn").style.display="none"
})
}

function datos(){

return{

nombre:val("nombre"),
codigo:val("codigo"),
edad:val("edad"),
fecha:val("fecha"),
telefono:val("telefono")

}

}

function val(id){
return document.getElementById(id).value
}

async function guardar(){

const r=await api("guardar",datos())
alert("Guardado")

}

async function buscar(){

const codigo=val("codigo")

const r=await api("buscar",{codigo})

if(!r.data)return

document.getElementById("nombre").value=r.data[1]

}

function nuevo(){
document.getElementById("form").reset()
}

function imprimir(){
window.print()
}

function logout(){
location.href="login.html"
}

function exportar(){
api("exportar")
}
