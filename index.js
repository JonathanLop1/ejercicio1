const agrega = document.getElementById("nombre").value
const agrega1 = document.getElementById("apellido").value
const agrega2 = document.getElementById("contenedor")
function agregar(){
    if(agrega.value === "" || apellido.value === "" ){
        alert("Por favor ingresa un nombre y/o apellido valido")
    }else{
        const agrega = document.getElementById("nombre").value
        const agrega1 = document.getElementById("apellido").value
        agrega2.innerHTML += agrega + " " +agrega1;
    }
}