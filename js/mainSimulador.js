/*
//
JS aplicado a la hoja SIMULADOR
//
*/

//Declaración de Constantes
const imcIdealMin=20;
const imcIdealMax=25;

//Obtener los Botones
let botonImc= document.getElementById("botonImc");
console.log(botonImc);

let botonIca= document.getElementById("botonIca");
console.log(botonIca);

let botonPesoIdeal= document.getElementById("botonPesoIdeal");
console.log(botonPesoIdeal);

let botonAceptarImc= document.getElementsByClassName("main-calculoImc__botonAceptar");
botonAceptarImc=botonAceptarImc[0];

let botonAceptarIca= document.getElementsByClassName("main-calculoIca__botonAceptar");
botonAceptarIca=botonAceptarIca[0];

let botonAceptarPesoIdeal= document.getElementsByClassName("main-calculoPesoIdeal__botonAceptar");
botonAceptarPesoIdeal=botonAceptarPesoIdeal[0];

//Creación de elementos para llenar la sección
const ingresePeso = document.createElement("p");
ingresePeso.innerText="Ingrese Peso en kg: " 
ingresePeso.id="texto3"
console.log(ingresePeso);      

const inputPeso = document.createElement("input");
inputPeso.type="text";
inputPeso.className="form-control";
inputPeso.id="inputPeso";

const ingreseAltura = document.createElement("p");
ingreseAltura.innerText="Ingrese Altura en cm: ";
ingreseAltura.id="texto3"
console.log(ingreseAltura);   

const inputAltura = document.createElement("input");
inputAltura.type="text";
inputAltura.className="form-control";
inputAltura.id="inputAltura"; 

const ingreseCintura = document.createElement("p");
ingreseCintura.innerText="Ingrese Cintura en cm: "  
ingreseCintura.id="texto3"
console.log(ingreseAltura);      
const inputCintura = document.createElement("input");
inputCintura.type="text";
inputCintura.className="form-control";
inputCintura.id="inputCintura"; 

const botonAceptar = document.createElement("button");
botonAceptar.type="button";
botonAceptar.className= "btn btn-primary";
botonAceptar.id="botonAceptar";
botonAceptar.innerText = "Calcular";

//Obtener las Secciones
let mainCalculo=document.getElementsByClassName("main__calculo");
mainCalculo= mainCalculo[0];
console.log(mainCalculo);

let mainBotonera=document.getElementsByClassName("main__botonera")[0];
console.log(mainBotonera);

//Obtener el texto
let maintexto=document.getElementById("texto1");
console.log(maintexto);


//Ingreso al simulador. Aparece la sección sólo si el usuario está LOGUEADO
if(sessionStorage.getItem("ingresoValidado")=="true")
    {
    maintexto.innerText="Bienvenido al Simulador OH MY NUTRI !!!"
    mainCalculo.style.visibility="visible";
    mainBotonera.style.visibility="visible";
    }    


//Acciones al cliquear los Botones
botonImc.addEventListener("click",()=>{
    mainCalculo.append(ingresePeso);
    mainCalculo.append(inputPeso);    
    mainCalculo.append(ingreseAltura);
    mainCalculo.append(inputAltura);
    mainCalculo.append(botonAceptar);
    inputAltura.id="inputAltura"
    ingreseAltura.id="texto1"
    inputPeso.id="inputPeso"
    ingresePeso.id="texto1"
    inputCintura.id="invisibilizar"
    ingreseCintura.id="invisibilizar"
    
   sessionStorage.setItem("opcion",1)

})

botonIca.addEventListener("click",()=>{
    mainCalculo.append(ingreseCintura);
    mainCalculo.append(inputCintura);    
    mainCalculo.append(ingreseAltura);
    mainCalculo.append(inputAltura);
    mainCalculo.append(botonAceptar);
    inputAltura.id="inputAltura"
    ingreseAltura.id="texto1"
    inputPeso.id="invisibilizar"
    ingresePeso.id="invisibilizar"
    inputCintura.id="inputCintura"
    ingreseCintura.id="texto1"
    sessionStorage.setItem("opcion",2)
    
})

botonPesoIdeal.addEventListener("click",()=>{  
    mainCalculo.append(ingreseAltura);
    mainCalculo.append(inputAltura);
    mainCalculo.append(botonAceptar);
    inputAltura.id="inputAltura"
    ingreseAltura.id="texto1"
    inputPeso.id="invisibilizar"
    ingresePeso.id="invisibilizar"
    inputCintura.id="invisibilizar"
    ingreseCintura.id="invisibilizar"
    sessionStorage.setItem("opcion",3)
    
})

botonAceptar.addEventListener("click",()=>{
    switch (sessionStorage.getItem("opcion")) {

        case "1":
            imc=calculoImc(inputPeso.value,inputAltura.value);
            sessionStorage.setItem("imc",imc)
            console.log(imc);
                if(imc>=0 && imc<20){
                    Swal.fire({
                        title: "Su IMC es de: " + imc,
                        text: "Usted se encuentra Desnutrido",
                        icon: "warning"
                      })
                } else if(imc>=20 && imc<25){
                    Swal.fire({
                        title: "Su IMC es de: " + imc,
                        text: "Usted se encuentra normal",
                        icon: "success"
                      })
                        } else if (imc>=25 & imc<30){
                            Swal.fire({
                                title: "Su IMC es de: " + imc,
                                text: "Usted se encuentra con Sobrepeso",
                                icon: "warning"
                              })
                                } else {
                                    Swal.fire({
                                        title: "Su IMC es de: " + imc,
                                        text: "Usted se encuentra con Obesidad Mórbida",
                                        icon: "warning"
                                      })
                                          
                                }
            inputPeso.value="";
            inputAltura.value="";
            break;

        case "2":                             
                ica=calculoIca(inputCintura.value,inputAltura.value);
                sessionStorage.setItem("ica",ica)
                console.log(ica);
                    if(ica<=0.5){
                        Swal.fire({
                            title: "Su ICA es de: " + ica,
                            text: "Usted se encuentra normal",
                            icon: "success"
                          })
                    }   else{
                        Swal.fire({
                            title: "Su ICA es de: " + ica,
                            text: "Usted necesita hacerse chequeos en detalle",
                            icon: "warning"
                          }) 
                        }  
                inputCintura.value="";
                inputAltura.value=""; 
            break;

        case "3":
            pesoMin= calculoPesoIdeal(inputAltura.value,imcIdealMin);
            sessionStorage.setItem("pesoMin",pesoMin)
            pesoMax= calculoPesoIdeal(inputAltura.value,imcIdealMax); 
            sessionStorage.setItem("pesoMax",pesoMax);
            Swal.fire({
                title: "Su Peso ideal está entre " + pesoMin + " kg y " + pesoMax +" kg",
                text: "",
                icon: "info"
              })   
            inputAltura.value="";
            break;




    }
})

//Funciones

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












