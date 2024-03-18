/*
//
PRE ENTREGA 3 
//
*/

const imcIdealMin=20;
const imcIdealMax=25;

//Declaración de Clases
class Usuarios{
    constructor (nombre,apellido,edad,dni,usuario,contrasena){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.dni=dni;
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
let users=[];
let services=[];
let opcion="";
let turns=0;
let usuarioIngreso="";
let verifUsuario=undefined;
let verifContrasena=""

//Generación de Array e Instanciamiento de Objetos
//Hay un usuario DUMMY creado Es "usuario: Usuario" "contraseña:1234"
users.push(new Usuarios("Usuario", "Usuario", 0, 0, "Usuario", "1234"));
users.push(new Usuarios("Juan", "Martinez", 35, 36521458, "JuanMa", "ingreso.01"));
users.push(new Usuarios("Martin", "Fernandez", 45, 24589789, "MartinFe", "verano.2024"));
users.push(new Usuarios("Facundo", "Urquiza", 30, 30254789, "FacuUr", "lgalogia123"));
users.push(new Usuarios("Manuel", "Perez", 23, 42658742, "ManuPe", "2024.auto"));

console.log(users);

//Obtener los Botones
let botonUsuario= document.getElementsByClassName("main__bienvenida__botonUsuario");
botonUsuario=botonUsuario[0];

let botonUsuarioNuevo= document.getElementsByClassName("main__bienvenida__botonNuevoUsuario");
botonUsuarioNuevo=botonUsuarioNuevo[0];

let botonAceptarUsuario= document.getElementsByClassName("main-ingresoUsuario__botonAceptar");
botonAceptarUsuario=botonAceptarUsuario[0];

let botonAceptarNuevoUsuario= document.getElementsByClassName("main-ingresoNuevoUsuario__botonAceptar");
botonAceptarNuevoUsuario=botonAceptarNuevoUsuario[0];

let botonImc= document.getElementsByClassName("main-simuladorPeso__botonImc");
botonImc=botonImc[0];

let botonIca= document.getElementsByClassName("main-simuladorPeso__botonIca");
botonIca=botonIca[0];

let botonPesoIdeal= document.getElementsByClassName("main-simuladorPeso__botonPesoIdeal");
botonPesoIdeal=botonPesoIdeal[0];

let botonAceptarImc= document.getElementsByClassName("main-calculoImc__botonAceptar");
botonAceptarImc=botonAceptarImc[0];

let botonAceptarIca= document.getElementsByClassName("main-calculoIca__botonAceptar");
botonAceptarIca=botonAceptarIca[0];

let botonAceptarPesoIdeal= document.getElementsByClassName("main-calculoPesoIdeal__botonAceptar");
botonAceptarPesoIdeal=botonAceptarPesoIdeal[0];

let botonAceptarIngresoUsuario = document.getElementsByClassName("main-ingresoUsuario__botonAceptar");
botonAceptarIngresoUsuario=botonAceptarIngresoUsuario[0];

//Obtener las Secciones
let mainIngresoUsuario=document.getElementsByClassName("main__ingresoUsuario");
mainIngresoUsuario=mainIngresoUsuario[0];

let mainIngresoNuevoUsuario=document.getElementsByClassName("main__nuevoUsuario");
mainIngresoNuevoUsuario=mainIngresoNuevoUsuario[0];

let mainSimuladorPeso=document.getElementsByClassName("main__simuladorPeso");
mainSimuladorPeso=mainSimuladorPeso[0];

let mainCalculoImc=document.getElementsByClassName("main__calculoImc");
mainCalculoImc= mainCalculoImc[0];

let mainCalculoIca=document.getElementsByClassName("main__calculoIca");
mainCalculoIca=mainCalculoIca[0];

let mainCalculoPesoIdeal=document.getElementsByClassName("main__calculoPesoIdeal");
mainCalculoPesoIdeal=mainCalculoPesoIdeal[0];

//Obtener los INPUTS

let inputUsuario = document.getElementsByClassName("main-ingresoUsuario__inputUsuario")
inputUsuario=inputUsuario[0];
console.log(inputUsuario);

let inputContrasena = document.getElementsByClassName("main-ingresoUsuario__inputContraseña")
inputContrasena=inputContrasena[0];

let inputNombre= document.getElementsByClassName("main-nuevoUsuario__inputNombre")
inputNombre=inputNombre[0];

let inputApellido= document.getElementsByClassName("main-nuevoUsuario__inputApellido")
inputApellido=inputApellido[0];

let inputNuevoUsuario= document.getElementsByClassName("main-nuevoUsuario__inputUsuario")
inputNuevoUsuario=inputNuevoUsuario[0];

let inputNuevoContrasena= document.getElementsByClassName("main-nuevoUsuario__inputContraseña")
inputNuevoContrasena=inputNuevoContrasena[0];

let inputPeso= document.getElementsByClassName("main-calculoImc__inputPeso")
inputPeso=inputPeso[0];

let inputAlturaImc= document.getElementsByClassName("main-calculoImc__inputAltura")
inputAlturaImc=inputAlturaImc[0];

let inputCintura= document.getElementsByClassName("main-calculoIca__inputCintura")
inputCintura=inputCintura[0];

let inputAlturaIca= document.getElementsByClassName("main-calculoIca__inputAltura")
inputAlturaIca=inputAlturaIca[0];

let inputAlturaPesoIdeal= document.getElementsByClassName("main-calculoPesoIdeal__inputAltura")
inputAlturaPesoIdeal=inputAlturaPesoIdeal[0];

//Obetener las etiquetas para mostrar resultados

let resultadoIMC= document.getElementsByClassName("resultadoIMC")
resultadoIMC=resultadoIMC[0];

let resultadoICA= document.getElementsByClassName("resultadoICA")
resultadoICA=resultadoICA[0];

let resultadoPesoIdeal= document.getElementsByClassName("resultadoPesoIdeal")
resultadoPesoIdeal=resultadoPesoIdeal[0];

//Texto bievenida al loguearse OK

let textoBienvenida = document.getElementsByClassName("textoBienvenida")
textoBienvenida=textoBienvenida[0];

let textoRechazo= document.getElementsByClassName("textoRechazo")
textoRechazo=textoRechazo[0];

let textoConfirmacion= document.getElementsByClassName("textoConfirmacion")
textoConfirmacion=textoConfirmacion[0];

//console.log(inputNombre);
//console.log(inputApellido);
//console.log(inputNuevoUsuario);
//console.log(inputNuevoContrasena);
//console.log(mainIngresoUsuario)

//Acciones al hacer click en INGRESAR CON USUARIO
botonUsuario.addEventListener("click", ()=>{
    if(mainIngresoUsuario.style.visibility == "hidden"){
        mainIngresoUsuario.style.visibility = "visible";
        botonUsuario.style.pointerEvents = "none";
        botonUsuarioNuevo.style.visibility = "hidden";
        botonAceptarUsuario.style.visibility ="visible";
    }else{
        mainIngresoUsuario.style.visibility = "hidden"   
    };

})

//Acciones al hacer click en ACEPTAR dentro de INGRESAR CON USUARIO
botonAceptarUsuario.addEventListener("click",()=>{
    if(mainIngresoUsuario.style.visibility == "visible"){
        validacion=validacionUsuario();
        console.log(validacion);
        if(validacion==undefined){
            //alert("Usuario No Encontrado");
            mainIngresoUsuario.style.visibility = "visible";
            botonUsuario.style.pointerEvents = "visible";
            botonUsuarioNuevo.style.visibility = "hidden";
            botonAceptarUsuario.style.visibility ="visible";
            inputUsuario.value="";
            inputContrasena.value="";
            textoRechazo.innerText="Usuario no encontrado"
        }else{
            //alert("Usuario encontrado")
            mainIngresoUsuario.style.visibility = "hidden";
            botonUsuario.style.pointerEvents = "visible";
            botonUsuarioNuevo.style.visibility = "visible";
            botonAceptarUsuario.style.visibility ="hidden";
            inputUsuario.value="";
            inputContrasena.value="";
            botonImc.style.visibility="visible";
            botonIca.style.visibility="visible";
            botonPesoIdeal.style.visibility="visible";
            botonUsuario.style.visibility = "hidden";
            botonUsuarioNuevo.style.visibility = "hidden";
            textoBienvenida.innerText="Se ha logueado Correctamente\nElija una opcion:\n"
            textoRechazo.innerText=""
        }
    }else{
        mainIngresoUsuario.style.visibility = "hidden"   
    };    
})

//Acciones al hacer click en NUEVO USUARIO
botonUsuarioNuevo.addEventListener("click", ()=>{
    if(mainIngresoNuevoUsuario.style.visibility == "hidden"){
        mainIngresoNuevoUsuario.style.visibility = "visible";
        botonUsuarioNuevo.style.pointerEvents = "none";
        botonUsuario.style.visibility = "hidden";
        botonAceptarNuevoUsuario.style.visibility ="visible";
    }else{
        mainIngresoNuevoUsuario.style.visibility = "hidden"   
    };

})

//Acciones al hacer click en Aceptar de NUEVO USUARIO
botonAceptarNuevoUsuario.addEventListener("click", ()=>{
    if(mainIngresoNuevoUsuario.style.visibility == "visible"){
        mainIngresoNuevoUsuario.style.visibility = "hidden";
        botonUsuarioNuevo.style.pointerEvents = "visible";
        botonUsuario.style.visibility = "visible";
        botonAceptarNuevoUsuario.style.visibility ="hidden";
        users.push(new Usuarios(inputNombre.value, inputApellido.value, 0, 0, inputNuevoUsuario.value, inputNuevoContrasena.value));
        localStorage.setItem("inputNombre",inputNombre.value);
        localStorage.setItem("inputApellido",inputApellido.value);
        localStorage.setItem("inputNuevoUsuario",inputNuevoUsuario.value);
        localStorage.setItem("inputNuevoContrasena",inputNuevoContrasena.value);
        console.log(users);
        inputNuevoUsuario.value="";
        inputNuevoContrasena.value="";
        inputNombre.value="";
        inputApellido.value="";
        textoRechazo.innerText="Usuario Guardado Correctamente"
    }else{
        mainIngresoNuevoUsuario.style.visibility = "hidden"   
    };
})


//Acciones al hacer Click en CALCULO IMC
botonImc.addEventListener("click", ()=>{
    if(mainCalculoImc.style.visibility == "hidden"){
        mainCalculoImc.style.visibility = "visible";
        mainCalculoIca.style.visibility = "hidden";
        mainCalculoPesoIdeal.style.visibility = "hidden";
        botonAceptarImc.style.visibility = "visible";
        botonAceptarIca.style.visibility = "hidden";
        botonAceptarPesoIdeal.style.visibility = "hidden";
        botonAceptarImc.style.pointerEvents = "visible";
        resultadoIMC.innerText="";
    }else{
        mainCalculoImc.style.visibility = "hidden"   
        botonAceptarImc.style.visibility = "hidden";
        mainCalculoIca.style.visibility = "hidden"   
        botonAceptarIca.style.visibility = "hidden";
        mainCalculoPesoIdeal.style.visibility = "hidden"   
        botonAceptarPesoIdeal.style.visibility = "hidden";
    };
})

//Acciones al hacer Click en ACEPTAR CALCULO IMC
botonAceptarImc.addEventListener("click", ()=>{
    if(mainCalculoImc.style.visibility == "visible"){
        mainCalculoImc.style.visibility = "visible";
        botonAceptarImc.style.pointerEvents = "none";
        imc=calculoImc(inputPeso.value,inputAlturaImc.value);
        sessionStorage.setItem("imc",imc)
        console.log(imc);
        if(imc>=0 && imc<20){
            resultadoIMC.innerText="Su IMC es de: " + imc + "\nUsted se encuentra Desnutrido";
        } else if(imc>=20 && imc<25){
            resultadoIMC.innerText="Su IMC es de: " + imc + "\nUsted se encuentra Normal";
                } else if (imc>=25 & imc<30){
                    resultadoIMC.innerText="Su IMC es de: " + imc + "\nUsted se encuentra con Sobrepreso";
                        } else {
                            resultadoIMC.innerText="Su IMC es de: " + imc + "\nUsted se encuentra con Obesidad Mórbida";       
                        }
        inputPeso.value="";
        inputAlturaImc.value="";
        console.log(resultadoIMC);
    }else{
        mainCalculoImc.style.visibility = "hidden"   
        botonAceptarImc.style.visibility = "hidden";
        mainCalculoIca.style.visibility = "hidden"   
        botonAceptarIca.style.visibility = "hidden";
        mainCalculoPesoIdeal.style.visibility = "hidden"   
        botonAceptarPesoIdeal.style.visibility = "hidden";
        inputPeso.value="";
        inputAlturaImc.value="";
        
    };
})


//Acciones al hacer Click en CALCULO ICA
botonIca.addEventListener("click", ()=>{
    if(mainCalculoIca.style.visibility == "hidden"){
        mainCalculoImc.style.visibility = "hidden";
        mainCalculoIca.style.visibility = "visible";
        mainCalculoPesoIdeal.style.visibility = "hidden";
        botonAceptarIca.style.visibility = "visible";
        botonAceptarImc.style.visibility = "hidden";
        botonAceptarPesoIdeal.style.visibility = "hidden";
        botonAceptarIca.style.pointerEvents = "visible";
        resultadoICA.innerText="";
    }else{
        mainCalculoImc.style.visibility = "hidden"   
        botonAceptarImc.style.visibility = "hidden";
        mainCalculoIca.style.visibility = "hidden"   
        botonAceptarIca.style.visibility = "hidden";
        mainCalculoPesoIdeal.style.visibility = "hidden"   
        botonAceptarPesoIdeal.style.visibility = "hidden";
    };
})

//Acciones al hacer Click en ACEPTAR CALCULO ICA
botonAceptarIca.addEventListener("click", ()=>{
    if(mainCalculoIca.style.visibility == "visible"){
        mainCalculoIca.style.visibility = "visible";
        botonAceptarIca.style.pointerEvents = "none";
        ica=calculoIca(inputCintura.value,inputAlturaIca.value);
        sessionStorage.setItem("ica",ica)
        console.log(ica);
        if(ica<=0.5){
            resultadoICA.innerText="Su ICA es de: " + ica + "\nUsted se encuentra normal";
        }   else{
            resultadoICA.innerText="Su ICA es de: " + ica + "\nUsted necesita hacerse chequeos en detalle";   
            }  
        inputCintura.value="";
        inputAlturaIca.value=""; 
        console.log(resultadoICA);
    }else{
        mainCalculoImc.style.visibility = "hidden"   
        botonAceptarImc.style.visibility = "hidden";
        mainCalculoIca.style.visibility = "hidden"   
        botonAceptarIca.style.visibility = "hidden";
        mainCalculoPesoIdeal.style.visibility = "hidden"   
        botonAceptarPesoIdeal.style.visibility = "hidden";
        inputCintura.value="";
        inputAlturaIca.value=""; 
       
    };
})


//Acciones al hacer Click en CALCULO PESO IDEAL
botonPesoIdeal.addEventListener("click", ()=>{
    if(mainCalculoPesoIdeal.style.visibility == "hidden"){
        mainCalculoImc.style.visibility = "hidden";
        mainCalculoIca.style.visibility = "hidden";
        mainCalculoPesoIdeal.style.visibility = "visible";
        botonAceptarIca.style.visibility = "hidden";
        botonAceptarImc.style.visibility = "hidden";
        botonAceptarPesoIdeal.style.visibility = "visible";
        botonAceptarPesoIdeal.style.pointerEvents = "visible";
        resultadoPesoIdeal.innerText="";
    }else{
        mainCalculoImc.style.visibility = "hidden"   
        botonAceptarImc.style.visibility = "hidden";
        mainCalculoIca.style.visibility = "hidden"   
        botonAceptarIca.style.visibility = "hidden";
        mainCalculoPesoIdeal.style.visibility = "hidden"   
        botonAceptarPesoIdeal.style.visibility = "hidden";
    };
})

//Acciones al hacer Click en ACEPTAR CALCULO PESO IDEAL
botonAceptarPesoIdeal.addEventListener("click", ()=>{
    if(mainCalculoPesoIdeal.style.visibility == "visible"){
        mainCalculoPesoIdeal.style.visibility = "visible";
        botonAceptarPesoIdeal.style.pointerEvents = "none";
        pesoMin= calculoPesoIdeal(inputAlturaPesoIdeal.value,imcIdealMin);
        sessionStorage.setItem("pesoMin",pesoMin)
        pesoMax= calculoPesoIdeal(inputAlturaPesoIdeal.value,imcIdealMax); 
        sessionStorage.setItem("pesoMax",pesoMax)
        resultadoPesoIdeal.innerText="Su Peso ideal está entre " + pesoMin + "kg y " + pesoMax +"kg";    
        console.log(resultadoIMC);
        inputAlturaPesoIdeal.value=""; 
    }else{
        mainCalculoImc.style.visibility = "hidden"   
        botonAceptarImc.style.visibility = "hidden";
        mainCalculoIca.style.visibility = "hidden"   
        botonAceptarIca.style.visibility = "hidden";
        mainCalculoPesoIdeal.style.visibility = "hidden"   
        botonAceptarPesoIdeal.style.visibility = "hidden";
        inputAlturaPesoIdeal.value=""; 
        
    };
})













//Funcion para validar usuario

function validacionUsuario(){
    usuarioIngreso=inputUsuario.value;
    localStorage.setItem("usuarioIngreso",inputUsuario.value)
    console.log(usuarioIngreso);
    usuarioContrasena=inputContrasena.value;
    localStorage.setItem("usuarioContrasena",inputContrasena.value)
    console.log(usuarioContrasena);
    verifUsuario=users.find((elemento)=>(elemento.usuario===usuarioIngreso && elemento.contrasena===usuarioContrasena))
    console.log(verifUsuario);
    return verifUsuario    
}

//Calculo IMC
function calculoImc(peso,altura){
    imc=peso/((altura/100)*(altura/100));
    imc=imc.toFixed(2);
    return imc;
}

//Calculo ICA
function calculoIca(cintura,altura){
    ica=cintura/altura;
    ica=ica.toFixed(2);
    return ica;
}

//Calculo Peso Ideal
function calculoPesoIdeal(altura,imc){
    peso=imc*((altura/100)*(altura/100));
    peso=peso.toFixed(2);
    return peso;
}











/*


//
PRE ENTREGA 2 
//


//Declaración de Clases
class Usuarios{
    constructor (nombre,apellido,edad,dni,usuario,contrasena){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.dni=dni;
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
let users=[];
let services=[];
let opcion="";
let turns=0;
let usuarioIngreso="";
let verifUsuario=undefined;
let verifContrasena=""

//Generación de Array e Instanciamiento de Objetos
//Hay un usuario DUMMY creado Es "usuario: Usuario" "contraseña:1234"
users.push(new Usuarios("Usuario", "Usuario", 0, 0, "Usuario", "1234"));
users.push(new Usuarios("Juan", "Martinez", 35, 36521458, "JuanMa", "ingreso.01"));
users.push(new Usuarios("Martin", "Fernandez", 45, 24589789, "MartinFe", "verano.2024"));
users.push(new Usuarios("Facundo", "Urquiza", 30, 30254789, "FacuUr", "lgalogia123"));
users.push(new Usuarios("Manuel", "Perez", 23, 42658742, "ManuPe", "2024.auto"));

//console.log(users);

//Mensaje de Alerta
alert("Bievenido a OH MY NUTRI");

//Primera Parte - VERIFICACION DE USUARIO

//Bucle - Hasta que no se detecte un usuario que este dentro de ARRAY de Users, no sale.
do{

        opcion=prompt("Ingrese Opción:\n1 Ingresar con Usuario\n2 Nuevo Usuario");
    
        switch(opcion){
            //Usuario Existente. Se deja que el usuario escriba usuario y contraseña. Distingue MAYUSCULAS DE MINUSCULAS. Debe ser exacto.
            case "1":
                usuarioIngreso=prompt("Ingrese Usuario: ");
                console.log(usuarioIngreso);
                usuarioContrasena=prompt("Ingrese Contraseña: ");
                console.log(usuarioContrasena);
                verifUsuario=users.find((elemento)=>(elemento.usuario===usuarioIngreso && elemento.contrasena===usuarioContrasena))
                console.log(verifUsuario);
                if(verifUsuario===undefined){
                    alert("Usuario No Encontrado");
                    verifOpcion=false;
                    break;
                }else{
                    break;
                }
            //Usuario Nuevo. Se da lugar a completar con los datos de usuario. Se instancia un nuevo objeto usuario y se pushea en el array existentes de usuario. Luego puede Iniciar sesión con los datos nuevos cargados    
            case "2":
                alert("Complete Sus Datos");
                nuevoUsuario = new Usuarios(prompt("Ingrese Nombre: "),prompt("Ingrese Apellido: "), parseInt(prompt("Ingrese Edad: ")),prompt("Ingrese DNI: "),prompt("Ingrese Usuario: "),prompt("Ingrese Contraseña: "));
                users.push(nuevoUsuario);
                console.log(nuevoUsuario);
                console.log(users);
                verifOpcion=false;
                break;

            default:
                alert("Opcion Inválida");

        }
    

    }while(verifUsuario===undefined)

//Segunda Parte - ELECCION DEL SERVICIO 

//Creación del Array services y se instancian los objetos de la clase servicios
services.push(new Servicios("Rodriguez", "Desnutricion", 2000, 5));
services.push(new Servicios("Rodriguez", "General", 1000, 0));
services.push(new Servicios("Rodriguez", "Deportiva", 2000, 2));
services.push(new Servicios("Rodriguez", "Diabeticos", 2000, 1));
services.push(new Servicios("Rodriguez", "Obesidad", 1000, 0));
services.push(new Servicios("Martinez", "General", 1500, 0));
services.push(new Servicios("Martinez", "Desnutricion", 2500, 0));
services.push(new Servicios("Martinez", "Deportiva", 2500, 5));
services.push(new Servicios("Martinez", "Diabeticos", 2500, 2));
services.push(new Servicios("Martinez", "Obesidad", 1500, 3));
services.push(new Servicios("Gomez", "General", 1000, 4));
services.push(new Servicios("Gomez", "Desnutricion", 2500, 0));
services.push(new Servicios("Gomez", "Deportiva", 2200, 2));
services.push(new Servicios("Gomez", "Diabeticos", 2700, 1));
services.push(new Servicios("Gomez", "Obesidad", 2100, 1));

    

//Declaración e Inicializacion de variables
let verifServicio="";
let verifPrestador="";
let verifTurnos="";
let servicio=""

//Menú de opciones, hay 4 opciones. Se entra en un bucle donde se sale con "4".
opcion=""; 
    do{
        opcion=prompt("Ingrese Opción:\n1 Buscar Servicios\n2 Buscar por Prestador\n3 Turnos Disponibles\n4 Salir");
        
        switch (opcion){
        //Existen 5 servicios "General" "Desnutricion" "Deportiva" "Diabeticos" "Obsidad"
        case "1":
            //Validación de dato ingresado. No importa como lo escriba el usuario, el servicio ingresado entra en una funcion que devuelve la palabra con la primera letra en mayuscula y el resto en minuscula. El servicio ingresado debe ser exacto
            do{
            servicio=prompt("Servicios Disponibles:\n- General\n- Desnutricion\n- Deportiva\n- Diabeticos\n- Obesidad\n\nIngrese Servicio: ");
            //console.log(servicio);
            servicio=formatoPalabra(servicio);
            //console.log(servicio);
            }while(servicio!="General" && servicio!="Desnutricion" && servicio!="Deportiva" && servicio!="Diabeticos" && servicio!="Obesidad")
              
            //Filtra en el array de servicios aquellos que contengan lo guardado en servicio 
            verifServicio=services.filter((elemento)=>(elemento.servicio.includes(servicio)))
            console.log(verifServicio);
            //Concatena mensajes para mostralos en un ALERT
            const mensajesConcatenados = verifServicio.map(concatenarInformacion);
            //console.log(mensajesConcatenados);
            alert(mensajesConcatenados);
            break;
        
        //Existen 3 prestadores "Rodriguez" "Martinez" "Gomez"
        case "2":
            //Validación de dato ingresado. No importa como lo escriba el usuario, el prestador ingresado entra en una funcion que devuelve la palabra con la primera letra en mayuscula y el resto en minuscula. El prestado ingresado debe ser exacto
            do{
                prestador=prompt("Prestadores Disponibles:\n- Gomez\n- Martinez\n- Rodriguez\n\nIngrese Prestador: ");
                prestador=formatoPalabra(prestador);
            }while(prestador!="Rodriguez" && prestador!="Martinez" && prestador!="Gomez")
            
            //Filtra en el array de servicios aquellos que contengan lo guardado en servicio
            verifPrestador=services.filter((elemento)=>(elemento.profesional.includes(prestador)))
            console.log(verifPrestador);
            //Concatena mensajes para mostralos en un ALERT
            const mensajesConcatenados2 = verifPrestador.map(concatenarInformacion);
            //console.log(mensajesConcatenados2);
            alert(mensajesConcatenados2);
            break;
        
        case "3":
            //IDEM case "1"
            do{
                servicio=prompt("Servicios Disponibles:\n- General\n- Desnutricion\n- Deportiva\n- Diabeticos\n- Obesidad\n\nIngrese Servicio: ");
                //console.log(servicio);
                servicio=formatoPalabra(servicio);
                //console.log(servicio);
                }while(servicio!="General" && servicio!="Desnutricion" && servicio!="Deportiva" && servicio!="Diabeticos" && servicio!="Obesidad")
            
            //IDEM case "2"
            do{
                prestador=prompt("Prestadores Disponibles:\n- Gomez\n- Martinez\n- Rodriguez\n\nIngrese Prestador: ");
                prestador=formatoPalabra(prestador);
            }while(prestador!="Rodriguez" && prestador!="Martinez" && prestador!="Gomez")    
            
            prestador=prompt("Prestadores Disponibles:\nGomez\nMartinez\nRodriguez\nIngrese Prestador: ");
            verifTurnos=services.filter((elemento)=>(elemento.servicio.includes(servicio)) && (elemento.profesional.includes(prestador)))
            //Concatena mensajes para mostralos en un ALERT
            const mensajesConcatenados3 = verifTurnos.map(concatenarInformacionTurnos);
            //console.log(mensajesConcatenados3);
            alert(mensajesConcatenados3);
            break;
        
        case "4":
            break;

            default:
            alert("Opción Inválida")
        }
}while(opcion!="4")

alert("Gracias por usar la APP")

//Funciones

//Funcion que le entra un string y devuelve ese mismo string pero con la primera letra en mayuscula y el resto en minucula
function formatoPalabra(texto){
     texto=texto.toLowerCase();
     primeraLetra=texto[0].toUpperCase();
     restoPalabra=texto.slice(1);
     palabraFinal=primeraLetra+restoPalabra;

    return palabraFinal
}

//Funcion que recorre el array y forma textos de salida
function concatenarInformacion(elemento) {
    if(elemento.qTurnosSemanales>0){
        textoTurnos="Hay turnos disponibles"
    }else{
        textoTurnos="No Hay turnos disponibles"
    }
    
    return "El servicio de Nutrición " + elemento.servicio + " lo provee el Dr " + elemento.profesional + "\nLa consulta cuesta $" + elemento.precio + "\n" + textoTurnos +"\n\n";
}

//Funcion que recorre el array y forma textos de salida
function concatenarInformacionTurnos(elemento) {
    return "El servicio de Nutrición " + elemento.servicio + " lo provee el Dr " + elemento.profesional + "\nTiene " + elemento.qTurnosSemanales + " Turno/s disponibles\n\n";
}





//
PRE ENTREGA 1 
//
let peso;
let altura;
let sexo;
let opcion;

//Validación de Peso
function ingresoPeso(){  
    do{
        peso=parseInt(prompt("Ingrese Peso en Kg: "));

    }while(peso<=0);
    console.log(peso);
    return peso;
}
    

//Validación de Altura
function ingresoAltura(){  
    do{
    altura=parseInt(prompt("Ingrese Altura en Cm: "));
    }while(altura<=0);
    return altura;
}

//Validación de Cintura
function ingresoCintura(){  
    do{
    cintura=parseFloat(prompt("Ingrese Circunferencia de Cintura en Cm: "));
    }while(cintura<=0);
    return cintura;
}

// //Validacion de Sexo
// function ingresoSexo(){
//     do{
//         sexo=prompt("Ingrese Sexo: ");
//     }while(sexo!="m" && sexo!="M" && sexo!="h" && sexo!="H");
//     return sexo;
// }

//Calculo IMC
function calculoImc(peso,altura){
    imc=peso/((altura/100)*(altura/100));
    imc=imc.toFixed(2);
    return imc;
}

//Calculo ICA
function calculoIca(cintura,altura){
    ica=cintura/altura;
    ica=ica.toFixed(2);
    return ica;
}

//Calculo Peso Ideal
function calculoPesoIdeal(altura,imc){
    peso=imc*((altura/100)*(altura/100));
    peso=peso.toFixed(2);
    return peso;
}

const imcIdealMin=20;
const imcIdealMax=25;

alert("Bienvenido a OH MY NUTRI");
do{
opcion=parseInt(prompt("Seleccione Opción: \n 1) Cálculo de IMC (Índice de Masa Corporal) \n 2) Cálculo de ICA (Índice Cintura Altura) \n 3) Peso Ideal \n 4) Salir"));

    switch (opcion){
        case 1:
            peso=ingresoPeso();
            altura=ingresoAltura();
            imc=calculoImc(peso,altura);
            if(imc>=0 && imc<20){
                alert("Su IMC es de: " + imc + "\nUsted se encuentra Desnutrido");
            } else if(imc>=20 && imc<25){
                    alert("Su IMC es de: " + imc + "\nUsted se encuentra Normal");
                    } else if (imc>=25 & imc<30){
                            alert("Su IMC es de: " + imc + "\nUsted se encuentra con Sobrepreso");
                            } else {
                            alert("Su IMC es de: " + imc + "\nUsted se encuentra con Obesidad Mórbida");       
                            }
            break;
        
        case 2: 
            cintura=ingresoCintura();
            altura=ingresoAltura();
            ica=calculoIca(cintura,altura);
            if(ica<=0.5){
                alert("Su ICA es de: " + ica + "\nUsted se encuentra normal");
            }   else{
                alert("Su ICA es de: " + ica + "\nUsted necesita hacerse chequeos en detalle");   
                }                
            break;    

        case 3:
            altura=ingresoAltura();
            pesoMin= calculoPesoIdeal(altura,imcIdealMin);
            pesoMax= calculoPesoIdeal(altura,imcIdealMax); 
            alert("Su Peso ideal está entre " + pesoMin + "kg y " + pesoMax +"kg");   
            break;   

        case 4:
            alert("Gracias por usar la APP");   
            break;         

        default:
            alert("Ingreso Incorrecto");
            break;    

    }

}while(opcion!=4);

*/