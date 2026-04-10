async function guardar(){

let data={
nombre:nombre.value,
codigo:codigo.value,
edad:edad.value
}

let r=await api("guardar",data)

alert(r.msg)

}

async function buscar(){

let r=await api("buscar",{codigo:codigo.value})

if(r.data){

nombre.value=r.data[0]
edad.value=r.data[2]

}

}

async function actualizar(){

await api("actualizar",{
codigo:codigo.value,
nombre:nombre.value
})

alert("Actualizado")

}

async function borrar(){

await api("borrar",{codigo:codigo.value})

alert("Archivado 7 días")

}

function imprimir(){
window.print()
}
