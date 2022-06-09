//exportamos con una constantes con la palabra frutas

//const {frutas, dinero} = require('./frutas')

/*Para importar mas de una constante o varuable
de este archivo que en este caso del archivo frutas.js
en el cual queremos importar la lista de als frutas
y el dinero se tiene que hacer con ls siguiente
sintaxis const {variable o constante a importar, variable a importar} = 
require(./Nombre del archivo de donde queremos importar las avribales o cosntantes)*/


/*Vale si con ponerle el ./ nombre del archivo
sin la extension solo si el archivo es de tipo 
javascript que su abreviatura es js */


/*Con el comando require y dentro de los parentesis entre comas
le pasamos la ruta del archivo donde se encuentra nuestra constante
que es la lista de frutas y la guardamos en la constante 
furtero para que asi la pueda utilizar este programa */

// Aprendiendo a improtar varias variables dle archivo frutas.js vamos a volver a imprimirlo todo

/*frutas.forEach(item => {
    //console.log(item)
    console.count(item)
})*/

/*Ese codigo se ejecuta con node en el lado del servidor
 */

/*Al ejecutar de neuvo vemos que funciona perfectamente 
y se han exportado los archivos tal cual la constante de frutero contiene
la lista de frutas que tiene nuestro archivo frutas */

//Hacemos la prueba de impresion de la variabel dinero del archivo frutas.js

//console.log(dinero)

//Hacemos la prueba con un paquetito que se llama cowsay

//const cowsay = require('cowsay');

/*Nos imprimira por consola un textito
que viene como parte del paquete sin el no podriamos imprimir
esto por consola */

/*console.log(cowsay.say({
    text : "Aprendiendo a fondo NodeJS",
    e : "oO",
    T : "U "
}));*/

/*Nos imprime por consola el texto que nosotros le decimos
y una vaca dibujada bien graciosa por consola
y como estamos viendo el require funciona
ya que guardamos la informacion del paquete en nuestra constante
cowsay y la utilizamos con la sintaxis apropiada que es 
para lo que sirve esta prueba */

/*Si isntalamos con el paquete npm install -g cowsay
lo que hacemos e sinstaalrlo en el equipo de forma que 
no es necesario estar en el directorio de nuestro proyecto
si no que se nos ha instaldo en nuestro ordenador 
para utilizarlo de manera global porque ejemplo en la terminal
con la ruta global de nuestro quipo
que es C:\Users\pablo tenemos que ejecutar el comando
cowsay JavaScript FTW! y se nos imprime
la vaca efectivamente por el terminal*/

/*Sin embargo si queremos utilizar por ejemplo el paquete cowsay
de forma que no tengamos que instalarlo de manera local en nuestro proyecto
con el comando npm i cowsay o de manera global en nuestro equipo
con el comando npm install -g cowsay
podemos utilizar el comando npx cowsay "Hola mundo" el texto de hola
mundo puede ser el que nosotros queramos */

//Servidor HTTP

//const ServidorHTTP = require('http');

//Cremaos el servidor

//const NuestroPrimerServidor = ServidorHTTP.createServer((req, res) => {
/*Esta funcion de flecha y siempre es una funcion 
flecha que es un callback que va a recibir
siempre un request una peticion que es un metodo GET
por ejemplo obetner la informacion que nos pide
el cliente como un fichero
para visualizar y una respuesta */

//res.end('Estoy respondiendo a tu solicitud y soy un cambio con nodemon')
/*El end finaliza de tal manera que ya no se puede escribir mas informacion
lo que dice el metodo es : Calling the writable.end() method signals that no more data will 
be written to the Writable. The optional chunk and encoding arguments allow 
one final additional chunk of data to be written immediately before closing the stream. */

/*Como hemos comprado si en nuestro navegador accdemos a nuestra ip local
que es la 127.0.0.1:3000 del puerto el codigo se mete en este metodo y coge el parametro
de la funcion flecha res que representa la respuesta que da el servidor es decir la
inofrmacion que le va ha dar al cliente y nos imprime el texto estoy respondiendo
a tu solicitud */
//});

/*Tenemos que geenrar un puerto por donde se trnasmite 
la informacion y el mas comun es el puerto 3000
que se añade al final de la ruta cin nuestra ip con dos 
puntos :3000 asi lo hacemos con la funcion listen
que recibe como parametros un puerto este y nuevamente como es muy comun
una funcion flecha*/

//const PuertoServidor = 3000;

/*NuestroPrimerServidor.listen(PuertoServidor, () => {
    /*Como podemos comprobar
    como va aser muy comun con este tipo de metodos de servidor
    van a llevar siempre una funcion flecha que es con
    () => {

    } asi*/
//console.log('A la escucha de solicitudes por parte del cliente');

/*COmo vemos funciona porque nos imprime por consola
y entra dentro de este metodo del servidor imprimiendonos el console.log()
esto sirve como comprobacion de que efectivamente el servidor esta a la escucha
de posibles solicitudes por parte del cliente */
//});




/*El metodo listen
dice literalmente Inicia un servidor a la escucha de conexiones. Un net.Server puede 
ser un servidor TCP o un servidor IPC dependiendo de lo que escuche. */

/*El paquete Nodemon sirve para :
Esta herramienta se instala a través de npm y 
nos sirve para estar escuchando cambios en nuestra configuración de node.js 
para utilizarlo hay que poner el comando nodemon y el archivo que representa 
nuestro servidor con nodejs en javascript que es app.js*/

/*Servidor con express que nos simplifica el paquete
http */

//requerimos como siempre
const expressServidor = require('express');
const path = require('path');

//Creamos la aplicacion de express guardandola en la constante aplicacion
const aplicacion = expressServidor();

aplicacion.use(expressServidor.static(path.join(__dirname + '/public')));

/*Vamos ha hacer el motor de la plantilla es
decir poner de manera dinamica el html con el javascript */
aplicacion.set('view engine', 'ejs');
/*Ahora hay que poner la ruta de las carpeta
donde vamos a almacenar los propios archivos
ejs que es nuestra plantilla que es html combinado con javascript
y que express los puede procesar */
aplicacion.set('views', __dirname + '/views');

/*COn la linea 159 le estamos diciendo a express que estamos utilizando un motor de plantilla
con EJS es decir que nos cargue los archivos EJS */

/*Como dice en la propia descripcion 
Creates an Express application.
crea una aplicacion de express */

//COnfiguramos el puerto por el que pasa la información 
const PuertoExpress = 3000;

/*Si cambiamos de ubicacion esta linea
aplicacion.use(expressServidor.static(__dirname + "/public"));
lo que va ha hacer es que nos lo va a cargar antes 
los archivos alojado en la carpeta public y en consecuente
la que tiene el indice alfabetico antes como es el archivo
index.html */

/*Ahora bien podemos hacer un middleware en el que le digamos
que si no se encuentra tal pagina nos lleve a otra pagina
que nos muestre que el archivo no se encuentra que es nuestro
404.html esto se hace con una funcion flecha con los dos parametros ya 
conocimos de req o peticion del cliente al servidor res de la respuesta que le 
manda el servidor al cliente y un next para mostrar la siguiente pagina que en este
caso como es muy simple no la vamos ha utilizar */

/* Y efectivamente al hacer a una url http://127.0.0.1:3000/fdfgd
que no esta contemplada en el servidor como es /ffggf nos manda
el archivo 404.html que nos imprime que la ruta no ha sido encontrada 
a atraves del middleware codificado en la ruta 176
tenemos que ponerlp apabajo de todas las rutas para que 
funcione correctamente */

/*Hacemos el primer metodo HTTP el cual va a ser un get y como siempre
tendra una funcion flecha */

/*Tendra dos parametros en la funcino flecha que sera la request o peticino del cliente
y req o respuesta que le manda el servidor y aparte un parametro
que va a ser el path es decir la ruta que tenemos que seguir para que el servidor entre
en el metodo y nos proporcione la informacion como marca el metodo get
que en el primero va a ser / pero podemos poner lo que queramos para hacer la prueba
de recibir al informacion en la ruta de 127.0.0.1:3000 de puerto 3000 */

aplicacion.get('/', (req, res) => {
    //res.send('Estoy mandando una respuesta con el paquete de Express cambios v2.0');
    /*El metodo send lo que hace como dice la descripcion
    es mandar la repsuesta Send a response.*/
    /*AHora vamos a cargar la pagina con el fichero
    EJS con el comando render que es el que se encuentra
    en nuestra carpeta views y el archivo ejs  
    Tiene dos parametros uno que es el archivo
    al que nos queremos referir es decir al index.ejs
    simplemente como index y otro que son parametros
    que le podemos pasar que son objetos de javascript
    la ventaja es que los parametros que le pasamos 
    va a viajar al archivo en la carpeta views de index.js*/
    res.render("index", { titulo: "mi titulo dinamico" });
    /*Como vemos el segundo titulo mas pequeño el h2
    lo que ha hecho es cojernos la variable osea el objeto y nos ha cogido
    el valor de la clave titulo y nos la ha mostrador porque ha viajado
    al archivo ejs y ha cargado las views de la carpeta views impriendolo por pantalla */
});

/*Podemos configurar tantas rutas y llamadas a metodos como
nosotros queramos por ejemplo le cambiamos el path 
y llamamos a un get qque como path tenga servicios
pero siempre tiene que tner su funcino flecha con la req o peticion del cliente
al servidor y res con la respuesta del servidor al cliente */

aplicacion.get('/servicios', (req, res) => {
    /*Vamos a ajustar para cargar la pagina con el archivo ejs 
    en vistas de la carpeta vistas que se llama servicios */
    res.render("servicios", { tituloservicios: "Este es un mensaje dinamico de servicios" });
    /*Como vimos efectivamente accede a este metodo get del codigo y nos imprime
    el texto o string con diferente url de HTTP estas en la pagina de servicios */
});

/*Luego como siempre tenemso que llamar a la funcion listen
otra vez con esa informacion de la variabel aplicacion que nos crea
una palicacion con express para que el servidor este a la escucha */

/*TIene dos parametro el listen como siempre el puerto por donde escucha la informacion
y el otro es una funcino flecha */

/*Vamos a comenzar ahora con los middleware y vamos a codificar
el primer middleware que sirven para proveer a express
de Para el servicio de archivos estáticos como, por ejemplo, 
imágenes, archivos CSS y archivos JavaScript, 
utilice la función de middleware incorporado express.static de Express.*/

//Primer middleware
/*Despues del static hay que poner la caprtea
con la ruta donde se encintraran estos archivos
el dirname hace alusion a la ruta donde nosotrso tengamos 
los archisvos staticos tipo CSS html etc... es decir
en la carpeta donde s eencutra nuestro proyecto almacenado nuestro
equipo que en nuestro caso es C:\Users\pablo\Desktop\Fundamentos_Node_JS
con el mas donde este la carpeta con nuestros archivos
y ya podemos cargar nuestra pagina podemos cargar mas 
de un archivo mientras se encuentre dentro de la carpeta public*/

//aplicacion.use(expressServidor.static(__dirname + "/public"));

/*Como hemos comprobado efectivamente se nos carga en la ruta 
localhost o 127.0.0.1:3000/404.html se nos carga la pagina web
con nuestro archivo html que esta en nuestra carpeta del proyecto y en la subcarpeta
public, como hemos podido comprobar podemos cargar los archivos
que quereamos con el middleware la funcion use y la funcion static
de express mientras esta en nuestra carpeta public que es donde le hemos indicado
que busque

El atajo __dirname nos saca la ruta donde esta nuestro poryecto almacenado en el equipo
que es C:\Users\pablo\Desktop\Fundamentos_Node_JS*/

aplicacion.use((req, res, next) => {
    /*En el sendFile le especificmaos otra vez
    donde esta el archivo html de error o pagina 
    de error que le queremos mandar al cliente */
    res.status(404).render("404", {
        error: "Este es un mensaje dinamico de error",
        descripcion: "Pagina web de error"
    })
    /*Hemos comprbado que si ponemos en el navegador
    la url con el localhost o ip local 127.0.0.1:3000 que es el puerto 
    a la escucha de nuestro servidor efectivamente se envia la clave
    con el objeto de la sentencia dle render al archivo ejs donde
    se pasa la variable y se imprime en la etiqueta h1 con lo que le da
    dinamismo al html y ya no pasa a ser esatico sino que pasa a ser dinamico  
    res.status(404).render("404", {error : "Este es un mensaje dinamico de error"})
    tambien podemos pasar mas de un parametro al ejs añadiendole un campo
    mas al objeto en si de la respuesta del servidor
    con el comando render
    y efectivamente se pasa el otr parametro al 
    fichero de ejs*/
});

/*Efectivamente hecha la prueba si ponemos el middlware 
de la pagina de erro abajo de todo los metodos del servidor
de express funciona correctamente si no imprimira solo la pagina de inicio
pero no las peticiones de /servicios que le hemps indicado
con las rutas de express en los metodos GET */

aplicacion.listen(PuertoExpress, () => {
    console.log(`Express servidor escuchando en el puerto ${PuertoExpress}`);
    console.log(`Estamos concatenando con el puerto en escucha 3000 : variable ${PuertoExpress}
    concatenada y bajando de linea en javascript `);
    /*He imprimimso por consola paar comprobar 
    que efectivamente esta escuchando las peticiones del cliente 
    por el puerto que nosotros le dijimos con la ip local
    que es 127.0.0.1:3000 siendo 3000 el puerto */
    /*En javascript con ` ${variable a concantenar}` concatenamos variables */
});


