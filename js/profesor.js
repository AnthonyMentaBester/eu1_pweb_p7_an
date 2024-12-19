var obj = {
    cedula: "",
    nombre: "",
    apellido: "",
}

const agregar = (idcedula,idnombre,idapellido,idrespuesta)=>{
    
    document.getElementById(idcedula)
    document.getElementById(idapellido)
    document.getElementById(idrespuesta)
    document.getElementById(idnombre)
    
    console.log(obj)
    obj = {
        cedula: idcedula,
        nombre: idnombre,
        apellido: idapellido,

    }
    
    if (idapellido === "" ) {
        document.getElementById(idrespuesta).innerText = "Datos incompletos";  
    }
    if (idnombre === "" ) {
        document.getElementById(idrespuesta).innerText = "Datos incompletos";  
    }
    if (idcedula === "" ) {
        document.getElementById(idrespuesta).innerText = "Datos incompletos";  
    }


console.log(obj)
}

const agregarjson = (idcedula,idnombre,idapellido,idrespuesta)=>{

    document.getElementById(idcedula).innerText = obj.cedula; 
    document.getElementById(idapellido).innerText = obj.apellido; 
    document.getElementById(idnombre).innerText = obj.nombre; 



}