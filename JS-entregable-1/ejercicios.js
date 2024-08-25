// EJERCICIO 1:  Loop de pares//

// function loopDePares(num){

//     for (i = 0; i <= 100; i++){
//         console.log(i)
    
//     if ((i + num) % 2 === 0) {
//         console.log(`El numero ${i} es par`);
// }
// }
// }



// ______________________________________________________________________________________________
// EJERCICIO 2: Loop de impares con palabra//


// function LoopDeImpares(num, palabra){
//     palabra = "impar";
    
//     for (i = 0; i <= 100; i ++){
//         console.log(i)

//         if ((num +i) % 2 !==0){
//             console.log(`El numero ${i} es ${palabra}`)

            
//         }
//     }
    
// }


// ______________________________________________________________________________________________
//EJERCICIO 3: Sumatoria//

// function sumatoria(num){
//     let suma = 0;
//     for(i = 0; i <= num; i++){
//         suma +=i;
//     }

//     return suma;
    
    
//     }

// ______________________________________________________________________________________________
//EJERCICIO 4: Nuevo arreglo//

// function NuevoArreglo(num){
//     let arreglo =[];

//     for(i = 1; i <= num; i ++){
//         arreglo.push(i);

//     }

//     return arreglo;

// }


// ______________________________________________________________________________________________
//EJERCICIO 5: Similar String.split()//

// let saludo = "hola";
// function Split(saludo){

//     return saludo.split("");
//         }




//EJERCICIO 5: SIN USAR METODO .split()//

// let text = "hola";

// function split(text){
    
//     let result = [];
   

//     for (i = 0; i < text.length; i ++){
        
//             result.push(text[i]);
//         }
    
//     return result;
// }




// ______________________________________________________________________________________________

//EJERCICIO 6: Manejando dos arreglos//

// let arreglo1 = ["A", "l", "f", "r", "e", "d"];
// let arreglo2 = [1 , 2, 3, 4, 5, 6];

// function arrayHandler(arreglo2, arreglo1){


//     if (arreglo2.length !== arreglo1.length){
//         console.log("deben tener la misma cantidad de caracteres");

//         return;

       
//     }

//     for(let i = 0; i < arreglo2.length; i ++){
//         console.log(`Soy ${arreglo2[i]} y yo soy ${arreglo1[i]}`);
//     }

// }






// ______________________________________________________________________________________________

//EJERCICIO 7: Palíndromo//





// function palindromo(texto){


//     let palabraTotal = texto.toLowerCase(); //que cada palabra no tenga problemas de mayus y minus, se convierte todo a minusculas

//     let inicio = 0;
//     let final = palabraTotal.length - 1;

//     while(inicio < final){

//         if(palabraTotal[inicio] !== palabraTotal[final]){
           
//             return false;
//         }
//         inicio ++;
//         final --;

//     }

//     return true;

// }   
// let texto = prompt("ingrese palabra y si es true, sera palindroma");
// console.log(`la palabra ingresada es:"${(palindromo(texto))}"`);

