// 1)  
//Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).

/* let edad = parseInt(prompt("ingrese su edad : "));
let añoCanino = 7;
function añosPerro(edad,añoCanino){
    return (edad*añoCanino);

}
console.log(añoCanino*edad); */

// 2)
// Crear una función que reciba un nombre y devuelva un saludo.

 /* let nombre=prompt("Ingrese un nombre : ");

function saludar(name){

return  "Hola que tal " +""+ name;
}
console.log(saludar ( nombre )); 
 */
//3) Crear una función que salude.

/* function saludar(){
    return ("Hola compadre");
}
console.log(saludar()); */

//4) 
//Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius),
// y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius,
// si recibe Celsius devolver Farenheit).
/*  let temperatura= parseInt(prompt("ingrese una temperatura: "));
let sistema=prompt("Indique si es celsius o farenheit : ");
function convertor (temp,sis){
if (sis=="farenheit"){
    let resultadoencelsius= (( temp - 32 ) * 5/9);
    return(resultadoencelsius + " su resultado en celsius");

}else  {
    let resultadoenFarenheit = ((temp  * 9/5) + 32)
    return (resultadoenFarenheit + " su resultado en Farenheit")
}
}
console.log(convertor(temperatura,sistema))
 
 */
 // 5 )
 // Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, 
 //que le aplique la función de factorial (ejercicio 12 de bucles),
 // si es menor , aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo),
 // y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
//6 → 6! = 720
//4 → |4| = 4
//-8 → |-8| = 8
//50 → 100
//11 → 22

// 6) 
//Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar. 
//(Ejercicio: Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua).
// Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. 
//Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
//(Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50.
// Si indica que paga con menos de lo que cuesta el producto, indicar un error).)
/* let edad =parseInt(prompt("Ingrese su edad : "));
let bebida=prompt("Ingrese Bebida : jugo cerveza o agua ");
let costo=0;
const cerveza=300;
const jugo=150;
const agua=100;

function validacion (edad,bebida){
    if(edad<18 && bebida==="cerveza") {
        alert("usted no puede realizar la compra!!");
    
    }else{
         if(bebida=== "cerveza"){
         alert(" la cerveza cuesta $ : "+ cerveza);
         costo=cerveza;
         
    }else 
         
        if (bebida ==="jugo") {
           alert( " el jugo cuesta $ : "+ jugo);
           costo=jugo;
           
    }else
            if(bebida==="agua"){
                alert(" el agua cuesta  $ : "+ agua);
                costo=agua;
                
    }

   let importeconelqueabona=parseInt(prompt("ingrese $ con el que abonara : "));
   let cambio = 0;

 
    if (importeconelqueabona<costo){
        alert("el importe con el que abono es $ "+ importeconelqueabona + "y es menor a $" + costo + " que es lo que cuesta tu" + bebida);
        
    } else {
        cambio = importeconelqueabona - costo;
        alert("su vuelto es de $ " + cambio);
        return(cambio)
    }


  }
 }
console.log(validacion(edad,bebida,cambio)); */

//7)//
////Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.//

/* let horas =1;
let minutos=60;
let segundos=60
 function pasar_a_segundos (hour,min,seg){
    let segundos_totales=parseInt((hour* min)*seg);
     return (segundos_totales);
 }
 console.log(pasar_a_segundos(horas, minutos,segundos)); */

 //8) 
 //Realizar una función de carga de notas en un array. 
 //Luego realizar otra función que calcule el promedio de todas y lo devuelva. 
 /* let notas=[ 1,2,3,4,5,7,8,9,10];
 let nota1=parseInt(prompt("ingrese su primera nota  :"));
 let nota2=parseInt(prompt("ingrese su segunda nota  :"));
 let nota3=parseInt(prompt("ingrese su segunda nota  :")); 
 
    function promedio (not1,not2,not3){
        let prom = ((not1+not2+not3)/3);
        return alert("Su promedio es igual a : " + prom);
    }
    console.log(promedio (nota1,nota2,nota3));
  */
 
  //9)
 //Escribir una función para cobrar en caja. Agregando funciones que: 
//* Si no es cliente A, agregue el IVA. 
//* Se solicite un monto de descuento a aplicar, y lo aplique.
//* Finalmente, realice el cobro solicitando al usuario con cuánto desea abonar.//

 /* let cliente= prompt(" ingrese si Ud es cliente A o B: ");
let precio=parseInt(prompt ("ingrese precio del producto"));
let iva= precio*(21/100);

function agregarIva(client){
    if ( client ===  "A"){ 
        alert( precio );
    }else  {
        precio = precio+iva; 
        alert(precio);    
}} 
console.log(agregarIva(cliente));
         
let descuento=parseInt(prompt("Ingrese la cifra de descuento"));
let preciocondescuentoClient=0;

function preciocondescuent (desc){
    preciocondescuentoClient = (precio - (precio*desc)/100);
  alert("Su precio con descuento es de : "+ preciocondescuentoClient);
    } 
    console.log(preciocondescuent(descuento));

    let dineroconelqueabona= parseInt(prompt("Ingrese $ con el que  abona:  "));
    let cambio=0;

function cobro(preciofinal){
    if(preciofinal<dineroconelqueabona){
        cambio= (dineroconelqueabona-preciofinal);
        alert( "Gracias por su compra su vuelto es de : $ "+ cambio);
    }else{
        alert("Lamentablemente No le alcanza para realizar su compra señor/a");
    
    }
} 
console.log(cobro(preciocondescuentoClient)); */

 
//10)
//Vamos a realizar  un conversor de monedas.
// Primero vamos a generar una función que reciba dos parámetros,
// tipo de moneda y monto y la convierta a pesos. (Tipos de moneda aceptados dólares, euros y reales). 
//Luego vamos a realizar una función que llame a esta función dos veces, con parámetros diferentes, sume ambos valores y devuelva el resultado.
//Ejemplo: us$4, €3. Devuelve el total de: $1180.

/* let currency=(prompt("Ingrese el tipo de moneda que va a cambiar a Pesos Argentinos: \n1. Dolar \n2. Real \n3. Euro"));
let cantidad = parseInt(prompt("ingrese la cantidad de Dinero a Ingresar:"));
let unpesoadolar =parseFloat(95.5);
let unpesoareal=parseFloat(18.4);
let unpesoaeuro=parseFloat(111.6)
let pesos = 0;
function conversor(moneda,monto){
    if( moneda =="dolar"){
        pesos = (monto*unpesoadolar);
        alert("La cantidad ingresada de Dolares a Pesos es igual a: $"+pesos+ "Pesos" );
        console.log(pesos)
    }else
    if(moneda=="real") {
        pesos=(monto*unpesoareal);
        alert("La cantidad ingresada de Reales a Pesos es igual a: $"+pesos+ "Pesos" );
        console.log(pesos)
    } else {
        pesos=(monto*unpesoaeuro);
        alert("La cantidad ingresada de Euros a Pesos es igual a: $"+pesos+ "Pesos");
        console.log(pesos)
     }
} console.log(conversor(currency,cantidad));  
 */
/*  currency1=(prompt("Ingrese el primero  tipo de moneda que va a cambiar a Pesos Argentinos: \n1. Dolar \n2. Real \n3. Euro"));
 cantidad1 = parseInt(prompt("ingrese la cantidad de Dinero a Ingresar:"));
 currency2=(prompt("Ingrese el segundo tipo de moneda que va a cambiar a Pesos Argentinos: \n1. Dolar \n2. Real \n3. Euro"));
 cantidad2 = parseInt(prompt("ingrese la cantidad de Dinero a Ingresar:"));
let totalpesos1=0;
let totalpesos2=0;
let totalpesos=0;
function devolviendoPesos(moneda1,moneda2){
   if( moneda1=="dolar"||"real" & moneda2=="real"||"dolar" ){
   totalpesos1=conversor(currency1,cantidad1);
   totalpesos2=conversor(currency2,cantidad2);
   totalpesos= totalpesos1+totalpesos2;
   alert("el total de pesos es de : "+ totalpesos);
    console.log(totalpesos)
   }

}
 */



//11)
//Crear una función con 1 parámetro cantidad de números, que pida iterativamente la cantidad de veces ingresada.
// Ejemplo si por parámetro le paso 5, que pida 5 números. En cada iteración aplicarle a cada número y una función que los triplique. Guardar todos los resultados en un array.
//Ejemplo: Paso por parámetro “4” a la función.
//Luego ingreso 4 números: 30,15,11,14. El array final debe ser: 90,45,33,42.

//12)
//Realizar una función que pida la temperatura máxima y mínima del día, indicando magnitud y medida (Farenheit o Celsius),
// y mostrar la temperatura media (promedio de ambas), en ambos sistemas.


