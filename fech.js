/*Sirve para consultar datos de las APIS 
es decir para leer apis */
import fetch from 'node-fetch';


const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
const body = await response.text();

console.log(body);

// La sintaxis es )

/*Lo que vemos a recibir del fetch es un json 
por lo que con el .then que es una promesa que se convierte
en una funcino felcha obtenemos la respuesta 

La palabra then sirve para lanzar promesas que tendra nsiempre sus funciones flecha
y que literalmente dicen Attaches callbacks for the resolution and/or rejection of the Promise.

Importante una funcion de flecha retorna automaticamente o devuelve
lo que esta al lado derecho*/