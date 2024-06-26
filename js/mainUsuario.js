/*
//
JS aplicado a la hoja USUARIO
//
*/

//Declaración de Clases
class Usuarios{
    constructor (nombre,apellido,usuario,contrasena){
        this.nombre=nombre;
        this.apellido=apellido;
        this.usuario=usuario;
        this.contrasena=contrasena;
    }
}

class Servicios{
    constructor (profesional,servicio,precio,qTurnosSemanales){
        this.profesional=profesional
        this.servicio=servicio;
        this.precio=precio;
        this.qTurnosSemanales=qTurnosSemanales;
    }
}

//Declaración e Inicialización de variables
let usersArray=[];
let users=[];
let arrayTestigo=[];
let opcion="";
let turns=0;
let usuarioIngreso="";
let verifUsuario=undefined;
let verifContrasena="";
let url="";

//Generación de Array e Instanciamiento de Objetos
//Hay un usuario DUMMY creado Es "usuario: Usuario" "contraseña:1234"

usersArray=[
    {
        nombre:"Usuario",
        apellido:"Usuario",
        usuario:"Usuario",
        contrasena:"1234",
    },
    {
        nombre:"Juan",
        apellido:"Martinez",
        usuario:"JuanMa",
        contrasena:"Ingreso.01",
    },
    {
        nombre:"Martin",
        apellido:"Fernandez",
        usuario:"MartinFernandez",
        contrasena:"invierno.2024",
    },
    {
        nombre:"Facundo",
        apellido:"Urquiza",
        usuario:"FaqUrq",
        contrasena:"lalogia",
    },
    {
        nombre:"Manuel",
        apellido:"Perez",
        usuario:"ManuPerez1980",
        contrasena:"auto.1980",
    }
]
console.log(usersArray);

//Obtener los Botones
let botonIngresar= document.getElementById("botonIngresar")
console.log(botonIngresar.innerHTML);

let botonPrimeraVez = document.getElementById("botonPrimeraVez")
console.log(botonPrimeraVez.innerText);

let botonRegistrar = document.getElementById("botonRegistrar")
console.log(botonRegistrar.innerHTML);

let checkIngresar= document.getElementById("gridCheck")
console.log(checkIngresar.value);

//Obtener las Secciones
let seccionIngreso = document.getElementsByClassName("main__ingresoUsuario")
seccionIngreso=seccionIngreso[0];
console.log(seccionIngreso.innerText);

let seccionRegistro = document.getElementsByClassName("main__nuevoUsuario")
seccionRegistro=seccionRegistro[0];
console.log(seccionRegistro.innerText);

//Obtener los INPUTS
let inputIngresoUsuario = document.getElementById("inputIngresoUsuario")
console.log(inputIngresoUsuario);

let inputIngresoContrasena = document.getElementById("inputIngresoContrasena")
console.log(inputIngresoContrasena);

let inputRegistroUsuario = document.getElementById("inputRegistroUsuario")
console.log(inputRegistroUsuario);

let inputRegistroContrasena = document.getElementById("inputRegistroContrasena")
console.log(inputRegistroContrasena);

let inputRegistroNombre= document.getElementById("inputRegistroNombre")
console.log(inputRegistroNombre);

let inputRegistroApellido= document.getElementById("inputRegistroApellido")
console.log(inputRegistroApellido);

//Texto bievenida al loguearse OK
let textoTitulo1 = document.querySelector("#texto1")
console.log(textoTitulo1.innerText);

let textoTitulo2 = document.querySelector("#texto2")
console.log(textoTitulo2.innerText);

let textoTitulo3 = document.querySelector("#texto3")
console.log(textoTitulo3.innerText);

textoTitulo1.style.display="inline-block";
textoTitulo2.style.display="none";
textoTitulo3.style.display="none";

//Acciones al cliquear en PRIMERA VEZ
botonPrimeraVez.addEventListener("click",()=>{
        textoTitulo1.style.display="none";
        textoTitulo2.style.display="none";
        textoTitulo3.style.display="inline-block";
        seccionIngreso.style.display="none";
        seccionRegistro.style.display="flex";
    }
)

//Instacio PROMISE para obtener los datos de mi ARRAY DE USUARIOS
const getUsers = (array)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(array){
                resolve (array);
            }   else {
                reject ("Error en la carga de datos");
              }
        },5000)  
    })      
}

//Llama a una API "falsa" de usuarios y la PUSHEO con el array de Usuarios que tengo creado al principio. Luego todo el arreglo se considera para la validacion de usuario

//IMPORTANTE: El API "falso" trae usuario JSON donde los atributos lo llaman de manera diferente, la validación del usuario lo haria con los atributos usuario y contraseña del objeto USUARIOS. A pesar de no tener sentido en la aplicación, es para demostrar el uso de la funcion FETCH.

url="https://jsonplaceholder.typicode.com/users"
fetch(url)
    .then(respuesta=>respuesta.json())
    .then(data=>{console.log(data),
                 arrayTestigo=data
                 console.log(arrayTestigo);
                 arrayTestigo.forEach(element => {
                 usersArray.push(element)   
                 });
                 log(usersArray)
                })
    .catch(error=>console.log(error));

//Se llama a al ARRAY DE USUARIOS, y ejecuta las acciones en caso favorable, en caso contrario, marca error por consola.
getUsers(usersArray)
.then((respuesta)=> {
    users=respuesta;
    console.log(users);
    //Acciones al hacer click en INGRESAR
    botonIngresar.addEventListener("click",()=>{
        let validacion=validacionUsuario(users);
        console.log(validacion);
        if(validacion==undefined){
            //alert("Usuario No Encontrado");
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Usuario No Encontrado",
                showConfirmButton: false,
                timer: 1500
            });
            sessionStorage.setItem("ingresoValidado",false)
        
        }else{
            //alert("Usuario encontrado")
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Usuario Encontrado",
                showConfirmButton: false,
                timer: 1500
            });
            textoTitulo1.style.display="none";
            textoTitulo2.style.display="inline-block";
            textoTitulo3.style.display="none";
            inputIngresoUsuario.style.pointerEvents="none";
            inputIngresoContrasena.style.pointerEvents="none";
            sessionStorage.setItem("ingresoValidado",true)
        }   

        if(checkIngresar.checked==true){
            localStorage.setItem("recordar",true);
            localStorage.setItem("usuarioIngreso",inputIngresoUsuario.value);
            localStorage.setItem("usuarioContrasena",inputIngresoContrasena.value);
            inputIngresoUsuario.value="";
            inputIngresoContrasena.value=""

        }else{
            localStorage.setItem("recordar",false),
            sessionStorage.setItem("usuarioIngreso",inputIngresoUsuario.value);
            sessionStorage.setItem("usuarioContrasena",inputIngresoContrasena.value);
            inputIngresoUsuario.value="";
            inputIngresoContrasena.value=""
        }
            
    }    
    );
    //Acciones al REGISTRAR USUARIO
    botonRegistrar.addEventListener("click",()=>{
        usersArray.push(new Usuarios(inputRegistroNombre.value,inputRegistroApellido.value, inputRegistroUsuario.value, inputRegistroContrasena.value));
        console.log(usersArray);
        console.log(users);
        sessionStorage.setItem("inputRegistroNombre",inputRegistroNombre.value);
        sessionStorage.setItem("inputRegistroApellido",inputRegistroApellido.value);
        sessionStorage.setItem("inputRegistroUsuario",inputRegistroUsuario.value);
        sessionStorage.setItem("inputRegistroContrasena",inputRegistroContrasena.value);
        inputRegistroUsuario.value="";
        inputRegistroContrasena.value="";
        inputRegistroNombre.value="";
        inputRegistroApellido.value="";
        //alert("Usuario Guardado Correctamente");
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario Guardado Corrctamente",
        showConfirmButton: false,
        timer: 1500
        });

        textoTitulo1.style.display="inline-block";
        textoTitulo2.style.display="none";
        textoTitulo3.style.display="none";
        seccionIngreso.style.display="flex";
        seccionRegistro.style.display="none";
        sessionStorage.setItem("ingresoValidado",false);
    })    
})
.catch((error) => console.log("Hay errores"));

//Funcion para validar usuario

function validacionUsuario(users){
    usuarioIngreso=inputIngresoUsuario.value;
    console.log(usuarioIngreso);
    usuarioContrasena=inputIngresoContrasena.value;
    console.log(usuarioContrasena);
    verifUsuario=users.find((elemento)=>(elemento.usuario===usuarioIngreso && elemento.contrasena===usuarioContrasena))
    console.log(verifUsuario);
    return verifUsuario    
}
