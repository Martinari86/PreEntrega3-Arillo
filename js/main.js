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
                alert("Su IMC es de: " + imc + "\nUsted se encuentra desnutrido");
            } else if(imc>=20 && imc<25){
                    alert("Su IMC es de: " + imc + "\nUsted se encuentra normal");
                    } else if (imc>=25 & imc<30){
                            alert("Su IMC es de: " + imc + "\nUsted se encuentra con sobrepreso");
                            } else {
                            alert("Su IMC es de: " + imc + "\nUsted se encuentra con obesidad mórbida");       
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
            alert("Su Peso ideal está entre " + pesoMin + " y " + pesoMax);   
            break;   

        case 4:
            alert("Gracias por usar la APP");   
            break;         

        default:
            alert("Ingreso incorrecto");
            break;    

    }

}while(opcion!=4);
