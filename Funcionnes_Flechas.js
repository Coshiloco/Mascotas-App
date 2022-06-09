/*FUnciones flecha tan importantes en javascript
vamos a verlas */

const sumarDos = () => {
    console.log(10+10);
}

/*Esa es la funcion flecha mas basica y como vemos 
la declaramos como una constante nombre de la funcion a almacenar  = (parametros) => {
    cuerpo es decir instrucciones que queremos que haga la función 
} */

//LLamamos a la función flecha 

sumarDos();

//Nos imprimio exactamente la funcion flecha que le dijimos es decir 10 + 10

/*Ahora vamos a probar a hacer la comprativa de los parametros
de una funcion flecha y una funcion normal */

function HolaMundo(hola) {
    console.log(hola);
}

//La funcion flecha equivalente

const HolaMundos = (HolaMundillo) => {
    console.log(HolaMundillo);
}

//Primero la funcion normal
HolaMundo("Esta es una funcion normal");

//La funcion flecha

HolaMundos("Esta es una funcion flecha");

/*Ahora bien en la funcino flecha cuando solo recibo un parametro
puedo omitir los parentesis que almacenan esse parametro () */

const UnicoParametroFlecha = unico => {
    console.log(unico);
}

//Imprimimos la funcion flecha con el unico parametro y omitiendo los parentesis

UnicoParametroFlecha("Esta es una funcion flecha a la que le omitimos los parentesis por tener un solo parametro");

/*Si tiene mas de un parametro si que hay que colocar los parentisis */

const SumaDosNumerosDosParametros = (num1, num2) => {
    console.log(num1 + num2);
    return "COn la clausula return retornamos en una funcion flecha";
}

//Imprimimos la funcion flecha con dos parametros

const texto = SumaDosNumerosDosParametros(10, 25);

//Imprimimos el retorno de la funcino flecha
console.log(texto);