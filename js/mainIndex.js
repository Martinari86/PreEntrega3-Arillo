//Setencia por si el Usurio se RECUERDA en el inicio de sesión

//Obtener botones del Header
let botonSimulador= document.querySelector("#simulador")
console.log(botonSimulador);

let botonIngresarAlSitio= document.querySelector("#ingresarAlSitio")
console.log(botonIngresarAlSitio);

botonSimulador.addEventListener("click",()=>{
  if(localStorage.getItem("recordar")=="true"){
      sessionStorage.setItem("ingresoValidado",true) 
    } else{
      sessionStorage.setItem("ingresoValidado",false)
    }
})

botonIngresarAlSitio.addEventListener("click",()=>{
    if(localStorage.getItem("recordar")=="true"){
        sessionStorage.setItem("ingresoValidado",true) 
      } else{
        sessionStorage.setItem("ingresoValidado",false)
      }
})
