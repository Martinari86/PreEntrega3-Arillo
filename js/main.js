/*
//
PRE ENTREGA 2 
//
*/

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
users.push(new Usuarios("Usuario", "Usuario", 0, 0, "Usuario", "1234"));
users.push(new Usuarios("Juan", "Martinez", 35, 36521458, "JuanMa", "ingreso.01"));
users.push(new Usuarios("Martin", "Fernandez", 45, 24589789, "MartinFe", "verano.2024"));
users.push(new Usuarios("Facundo", "Urquiza", 30, 30254789, "FacuUr", "lalogia123"));
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
            servicio=prompt("Servicios Disponibles:\nGeneral\nDesnutricion\nDeportiva\nDiabeticos\nObsidad\nIngrese Servicio: ");
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
                prestador=prompt("Prestadores Disponibles:\nGomez\nMartinez\nRodriguez\nIngrese Prestador: ");
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
                servicio=prompt("Servicios Disponibles:\nGeneral\nDesnutricion\nDeportiva\nDiabeticos\nObsidad\nIngrese Servicio: ");
                //console.log(servicio);
                servicio=formatoPalabra(servicio);
                //console.log(servicio);
                }while(servicio!="General" && servicio!="Desnutricion" && servicio!="Deportiva" && servicio!="Diabeticos" && servicio!="Obesidad")
            
            //IDEM case "2"
            do{
                prestador=prompt("Prestadores Disponibles:\nGomez\nMartinez\nRodriguez\nIngrese Prestador: ");
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

/*
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