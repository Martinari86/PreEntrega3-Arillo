let peso;
let altura;
let sexo;
let opcion;

//Validación de Peso
function ingresoPeso(){  
    do{
        peso=parseInt(prompt("Ingrese Peso: "));

    }while(peso<=0);
    console.log(peso);
    return peso;
}
    

//Validación de Altura
function ingresoAltura(){  
    do{
    altura=parseInt(prompt("Ingrese Altura en Centimetros: "));
    }while(altura<=0);
    return altura;
}

//Validación de Cintura
function ingresoCintura(){  
    do{
    cintura=parseFloat(prompt("Ingrese Circunferencia de Cintura en Centimetros: "));
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
opcion=parseInt(prompt("Seleccione Opción: \n 1) Calculo de IMC \n 2) Calculo de ICA \n 3) Peso Ideal \n 4) Salir"));

    switch (opcion){
        case 1:
            peso=ingresoPeso();
            altura=ingresoAltura();
            imc=calculoImc(peso,altura);
            if(imc<20){
                alert("El imc es de: " + imc + "\nSe encuentra desnutrido");
            } else if(imc>=20 && imc<25){
                    alert("El imc es de: " + imc + "\nSe encuentra todo normal");
                    } else if (imc>=25 & imc<30){
                            alert("El imc es de: " + imc + "\nSe encuentra con sobrepreso");
                            } else {
                            alert("El imc es de: " + imc + "\nSe encuentra es obeso");       
                            }
            break;
        
        case 2: 
            cintura=ingresoCintura();
            altura=ingresoAltura();
            ica=calculoIca(cintura,altura);
            if(ica<=0.5){
                alert("El ICA es de: " + ica + "\nSe encuentra todo normal");
            }   else{
                alert("El ICA es de: " + ica + "\nRevisar chequeos más en detalle");   
                }                
            break;    

        case 3:
            altura=ingresoAltura();
            pesoMin= calculoPesoIdeal(altura,imcIdealMin);
            pesoMax= calculoPesoIdeal(altura,imcIdealMax); 
            alert("Su peso ideal esta entre " + pesoMin + " y " + pesoMax);   
            break;   

        case 4:
            alert("Gracias por usar la APP");   
            break;         

        default:
            alert("Ingreso incorrecto");
            break;    

    }

}while(opcion!=4);
