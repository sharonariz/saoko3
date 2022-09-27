console.log("Sesión JS02 funciones")

//+++++++++Función declarada ++++++++++++++++++
//llamadado de la función declarada
console.log("Multiplica 5 * 6 =" + multiplicar(5,6))

/**
 * Este es un ejemplo de funcion declarada 
 * (function declaration, function statement).
 * Una caracterísitca de las funciones declaradas
 * es qe tiene un hoisting (elevanción).
 * 
 * Realiza la multiplicación de 2 números
 * @param {number} a multiplicando 1
 * @param {number} b multiplicando 2
 * @returns resultado de la multiplicación a*b
 */
function multiplicar( a,b){
    return a*b
}

//+++++++++Función declarada ++++++++++++++++++
/**
 * Las funciones expresadas (fuction expressions) 
 * son declaradas dentro de la asignación de una variable.
 * 
 * Estas funciones pueden ser anónimas (no tener nombre).
 * Las funciones expresadas no tienen hoisting.
 */

/**
 * Sumatoria de 2 numeros
 * @param {number} a 
 * @param {number} b 
 * @returns resultado de a+b
 */

const suma = function( a,b) { return a +b;}

console.log("El resultado de 56 + 4 = " + suma(56,4));

//+++++++++FUNCIONES AUTOINVOCADAS ++++++++++++++

/**
 * Las funciones autoinvocadas (self-invoking functions)
 * pueden ser anónimas y se autoejecutan() en su ejecución.
 */
(function (){
    console.log("-----------------");
    console.log("Hola mundo");
    console.log("-----------------");
})();

//+++++++++FUNCIÓN FLECHA +++++++++++++++++++++++

/**
 * Las funciones flecha (arrow functions), son funciones similares a las
 * funciones declaradas, pero no requieren la 
 * palabra "function" y si tienen una sola instrucción
 * y es el retorno, no requieren la instrucción "return".
 */

/**
 * Realiza la operación de 2 numeros
 * @param {number} a 
 * @param {number} b 
 * @returns La resta de a-b
 */
const resta = (a,b) => a-b;

console.log("La resta de 10 - 5 = " + resta(10,5));

// ++++++++++++ PARAMETROS DEFAULT ++++++++++
/** 
 * Funcion con parámetros inicializados
 */
function divide(a,b){
    return a/b
}

console.log("La división de a/b = " + divide (4,2));

//+++++++++++ Funciones recursivas +++++++++++++++

function factorial(num){
    if(num<=0) return 1;
    return (num* factorial(num-1));
}
console.log("Factorial de 5 = " + factorial(5));

//+++++++++++REST PARAMETROS+++++++++++++++++++++++

// parameters => operation;
// (param1, param2) => {

// return data
// };

function sum( a,b, ... resto){
    let suma = a+b;
    resto.forEach(element => {
        suma+= element; 
    });
    return suma;
}
console.log("El resultado de sumar varios números es: " + sum(2,3,5,7,3));