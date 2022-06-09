/*Lo que eprmite las exportaciones es ir haciendo archivos pequeños
de javascript que nso permiten modularizar
y hacer archivos que se nutran unos de otros como en este caso con el ejemplo
de frutas */

const frutas = ["platano","manzana","platano","pera"]
const dinero = 1000;

//Exportamos con la palabra reservada module

module.exports = {
    frutas : frutas,
    dinero : dinero 
};

/*Para exportar mas de una variable o constante de javascript
mediante el metodo module.exports de node js
tenemos que meterlo entre llaves de la siguiente forma
module.exports = { mediante un objeto como ejemplificaremos 
mas arriba exportando tambien el dinero} 
El dicciconario en javascript se construye 
con {
    clave : valor,
    clave : valor
    etc.. mas claves valor
} podemos omitir los dos puntos de la clave valor siempre
que la clave y el valor sea lo misma es decir frutas : frutas
se puede omitir y simplemente poner frutas dado que el nombre
de la constante que queremos exportar es la misma */

/*Estamos exportando esa constante para que en el programa de app.js
podamso utilizarla modularizando asi y no haciendo tan largo 
el codigo */