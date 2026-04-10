const role=localStorage.getItem("role")

if(!role){
location.href="login.html"
}

function val(id){
return document.getElementById(id)?.value || ""
}

function chk(id){
return document.getElementById(id)?.checked ? "SI":"NO"
}

function datos(){

return{

nombre:val("nombre"),
codigo:val("codigo"),
edad:val("edad"),
fecha:val("fecha"),
telefono:val("telefono"),
emergencia:val("emergencia"),
genero:val("genero"),
enfermedad:val("enfermedad"),
detalle_enf:val("detalle_enf"),
zurdo:val("zurdo"),
grado:val("grado"),
etnia:val("etnia"),
direccion:val("direccion"),
aldea:val("aldea"),

padre:val("padre"),
dpi_padre:val("dpi_padre"),
tel_padre:val("tel_padre"),

madre:val("madre"),
dpi_madre:val("dpi_madre"),
tel_madre:val("tel_madre"),

enc_padre:chk("enc_padre"),
enc_madre:chk("enc_madre"),

encargado:val("encargado"),
dpi_enc:val("dpi_enc"),
tel_enc:val("tel_enc"),
dir_enc:val("dir_enc"),
aldea_enc:val("aldea_enc"),
relacion:val("relacion"),
tel_extra:val("tel_extra")

}

}

async function guardar(){

const r=await api("guardar",datos())
alert(r.msg)

}

async function buscar(){

const codigo=val("codigo")
const r=await api("buscar",{codigo})

if(!r.data) return

let d=r.data

set("nombre",d[1])
set("codigo",d[2])
set("edad",d[3])
set("fecha",d[4])
set("telefono",d[5])

}

function set(id,v){
const el=document.getElementById(id)
if(el) el.value=v
}

function nuevo(){
document.getElementById("form").reset()
}

function imprimir(){
window.print()
}

function logout(){
localStorage.clear()
location.href="login.html"
}

function exportar(){
api("exportar")
}
