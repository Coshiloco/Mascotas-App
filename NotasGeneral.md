//exportamos con una constantes con la palabra frutas

//const {frutas, dinero} = require('./frutas')

/_Para importar mas de una constante o varuable
de este archivo que en este caso del archivo frutas.js
en el cual queremos importar la lista de als frutas
y el dinero se tiene que hacer con ls siguiente
sintaxis const {variable o constante a importar, variable a importar} =
require(./Nombre del archivo de donde queremos importar las avribales o cosntantes)_/

/_Vale si con ponerle el ./ nombre del archivo
sin la extension solo si el archivo es de tipo
javascript que su abreviatura es js _/

/_Con el comando require y dentro de los parentesis entre comas
le pasamos la ruta del archivo donde se encuentra nuestra constante
que es la lista de frutas y la guardamos en la constante
furtero para que asi la pueda utilizar este programa _/

// Aprendiendo a improtar varias variables dle archivo frutas.js vamos a volver a imprimirlo todo

/_frutas.forEach(item => {
//console.log(item)
console.count(item)
})_/

/_Ese codigo se ejecuta con node en el lado del servidor
_/

/_Al ejecutar de neuvo vemos que funciona perfectamente
y se han exportado los archivos tal cual la constante de frutero contiene
la lista de frutas que tiene nuestro archivo frutas _/

//Hacemos la prueba de impresion de la variabel dinero del archivo frutas.js

//console.log(dinero)

//Hacemos la prueba con un paquetito que se llama cowsay

//const cowsay = require('cowsay');

/_Nos imprimira por consola un textito
que viene como parte del paquete sin el no podriamos imprimir
esto por consola _/

/_console.log(cowsay.say({
text : "Aprendiendo a fondo NodeJS",
e : "oO",
T : "U "
}));_/

/_Nos imprime por consola el texto que nosotros le decimos
y una vaca dibujada bien graciosa por consola
y como estamos viendo el require funciona
ya que guardamos la informacion del paquete en nuestra constante
cowsay y la utilizamos con la sintaxis apropiada que es
para lo que sirve esta prueba _/

/_Si isntalamos con el paquete npm install -g cowsay
lo que hacemos e sinstaalrlo en el equipo de forma que
no es necesario estar en el directorio de nuestro proyecto
si no que se nos ha instaldo en nuestro ordenador
para utilizarlo de manera global porque ejemplo en la terminal
con la ruta global de nuestro quipo
que es C:\Users\pablo tenemos que ejecutar el comando
cowsay JavaScript FTW! y se nos imprime
la vaca efectivamente por el terminal_/

/_Sin embargo si queremos utilizar por ejemplo el paquete cowsay
de forma que no tengamos que instalarlo de manera local en nuestro proyecto
con el comando npm i cowsay o de manera global en nuestro equipo
con el comando npm install -g cowsay
podemos utilizar el comando npx cowsay "Hola mundo" el texto de hola
mundo puede ser el que nosotros queramos _/

//Servidor HTTP

//const ServidorHTTP = require('http');

//Cremaos el servidor

//const NuestroPrimerServidor = ServidorHTTP.createServer((req, res) => {
/_Esta funcion de flecha y siempre es una funcion
flecha que es un callback que va a recibir
siempre un request una peticion que es un metodo GET
por ejemplo obetner la informacion que nos pide
el cliente como un fichero
para visualizar y una respuesta _/

//res.end('Estoy respondiendo a tu solicitud y soy un cambio con nodemon')
/_El end finaliza de tal manera que ya no se puede escribir mas informacion
lo que dice el metodo es : Calling the writable.end() method signals that no more data will
be written to the Writable. The optional chunk and encoding arguments allow
one final additional chunk of data to be written immediately before closing the stream. _/

/_Como hemos comprado si en nuestro navegador accdemos a nuestra ip local
que es la 127.0.0.1:3000 del puerto el codigo se mete en este metodo y coge el parametro
de la funcion flecha res que representa la respuesta que da el servidor es decir la
inofrmacion que le va ha dar al cliente y nos imprime el texto estoy respondiendo
a tu solicitud _/
//});

/_Tenemos que geenrar un puerto por donde se trnasmite
la informacion y el mas comun es el puerto 3000
que se añade al final de la ruta cin nuestra ip con dos
puntos :3000 asi lo hacemos con la funcion listen
que recibe como parametros un puerto este y nuevamente como es muy comun
una funcion flecha_/

//const PuertoServidor = 3000;

/*NuestroPrimerServidor.listen(PuertoServidor, () => {
/*Como podemos comprobar
como va aser muy comun con este tipo de metodos de servidor
van a llevar siempre una funcion flecha que es con
() => {

    } asi*/

//console.log('A la escucha de solicitudes por parte del cliente');

/_COmo vemos funciona porque nos imprime por consola
y entra dentro de este metodo del servidor imprimiendonos el console.log()
esto sirve como comprobacion de que efectivamente el servidor esta a la escucha
de posibles solicitudes por parte del cliente _/
//});

/_El metodo listen
dice literalmente Inicia un servidor a la escucha de conexiones. Un net.Server puede
ser un servidor TCP o un servidor IPC dependiendo de lo que escuche. _/

/_El paquete Nodemon sirve para :
Esta herramienta se instala a través de npm y
nos sirve para estar escuchando cambios en nuestra configuración de node.js
para utilizarlo hay que poner el comando nodemon y el archivo que representa
nuestro servidor con nodejs en javascript que es app.js_/

/_Servidor con express que nos simplifica el paquete
http _/

//requerimos como siempre

/_Si cambiamos de ubicacion esta linea
aplicacion.use(expressServidor.static(\_\_dirname + "/public"));
lo que va ha hacer es que nos lo va a cargar antes
los archivos alojado en la carpeta public y en consecuente
la que tiene el indice alfabetico antes como es el archivo
index.html _/

/_Ahora bien podemos hacer un middleware en el que le digamos
que si no se encuentra tal pagina nos lleve a otra pagina
que nos muestre que el archivo no se encuentra que es nuestro
404.html esto se hace con una funcion flecha con los dos parametros ya
conocimos de req o peticion del cliente al servidor res de la respuesta que le
manda el servidor al cliente y un next para mostrar la siguiente pagina que en este
caso como es muy simple no la vamos ha utilizar _/

/_ Y efectivamente al hacer a una url http://127.0.0.1:3000/fdfgd
que no esta contemplada en el servidor como es /ffggf nos manda
el archivo 404.html que nos imprime que la ruta no ha sido encontrada
a atraves del middleware codificado en la ruta 176
tenemos que ponerlp apabajo de todas las rutas para que
funcione correctamente _/

/_Hacemos el primer metodo HTTP el cual va a ser un get y como siempre
tendra una funcion flecha _/

/_Tendra dos parametros en la funcino flecha que sera la request o peticino del cliente
y req o respuesta que le manda el servidor y aparte un parametro
que va a ser el path es decir la ruta que tenemos que seguir para que el servidor entre
en el metodo y nos proporcione la informacion como marca el metodo get
que en el primero va a ser / pero podemos poner lo que queramos para hacer la prueba
de recibir al informacion en la ruta de 127.0.0.1:3000 de puerto 3000 _/

/_Luego como siempre tenemso que llamar a la funcion listen
otra vez con esa informacion de la variabel aplicacion que nos crea
una palicacion con express para que el servidor este a la escucha _/

/_TIene dos parametro el listen como siempre el puerto por donde escucha la informacion
y el otro es una funcino flecha _/

/_Vamos a comenzar ahora con los middleware y vamos a codificar
el primer middleware que sirven para proveer a express
de Para el servicio de archivos estáticos como, por ejemplo,
imágenes, archivos CSS y archivos JavaScript,
utilice la función de middleware incorporado express.static de Express._/

//Primer middleware
/_Despues del static hay que poner la caprtea
con la ruta donde se encintraran estos archivos
el dirname hace alusion a la ruta donde nosotrso tengamos
los archisvos staticos tipo CSS html etc... es decir
en la carpeta donde s eencutra nuestro proyecto almacenado nuestro
equipo que en nuestro caso es C:\Users\pablo\Desktop\Fundamentos_Node_JS
con el mas donde este la carpeta con nuestros archivos
y ya podemos cargar nuestra pagina podemos cargar mas
de un archivo mientras se encuentre dentro de la carpeta public_/

//aplicacion.use(expressServidor.static(\_\_dirname + "/public"));

/\*Como hemos comprobado efectivamente se nos carga en la ruta
localhost o 127.0.0.1:3000/404.html se nos carga la pagina web
con nuestro archivo html que esta en nuestra carpeta del proyecto y en la subcarpeta
public, como hemos podido comprobar podemos cargar los archivos
que quereamos con el middleware la funcion use y la funcion static
de express mientras esta en nuestra carpeta public que es donde le hemos indicado
que busque

El atajo \_\_dirname nos saca la ruta donde esta nuestro poryecto almacenado en el equipo
que es C:\Users\pablo\Desktop\Fundamentos_Node_JS\*/

/_Hemos comprbado que si ponemos en el navegador
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
fichero de ejs_/

/_Dado que en el package.json en la parte de scripts
le hemos puesto
el comando dev y le hemos dicho que jecute app jss
si hacemos el comando npm run dev
lo que estamos haciendo es utilizar un atajo
que nos ejecuta el server en local
y asi podemos hacer las pruebas en local como desarrolladores_/

/_He imprimimso por consola paar comprobar
que efectivamente esta escuchando las peticiones del cliente
por el puerto que nosotros le dijimos con la ip local
que es 127.0.0.1:3000 siendo 3000 el puerto _/
/_En javascript con ` ${variable a concantenar}` concatenamos variables _/

/_Efectivamente hecha la prueba si ponemos el middlware
de la pagina de erro abajo de todo los metodos del servidor
de express funciona correctamente si no imprimira solo la pagina de inicio
pero no las peticiones de /servicios que le hemps indicado
con las rutas de express en los metodos GET _/

/_En el sendFile le especificmaos otra vez
donde esta el archivo html de error o pagina
de error que le queremos mandar al cliente _/
/_Como vimos efectivamente accede a este metodo get del codigo y nos imprime
el texto o string con diferente url de HTTP estas en la pagina de servicios _/

       /*Vamos a ajustar para cargar la pagina con el archivo ejs
    en vistas de la carpeta vistas que se llama servicios */

    /*Podemos configurar tantas rutas y llamadas a metodos como

nosotros queramos por ejemplo le cambiamos el path
y llamamos a un get qque como path tenga servicios
pero siempre tiene que tner su funcino flecha con la req o peticion del cliente
al servidor y res con la respuesta del servidor al cliente \*/

    /*Como vemos el segundo titulo mas pequeño el h2
    lo que ha hecho es cojernos la variable osea el objeto y nos ha cogido
    el valor de la clave titulo y nos la ha mostrador porque ha viajado
    al archivo ejs y ha cargado las views de la carpeta views impriendolo por pantalla */

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

/_COn la linea 159 le estamos diciendo a express que estamos utilizando un motor de plantilla
con EJS es decir que nos cargue los archivos EJS _/

/_Ahora hay que poner la ruta de las carpeta
donde vamos a almacenar los propios archivos
ejs que es nuestra plantilla que es html combinado con javascript
y que express los puede procesar _/

/_Como dice en la propia descripcion
Creates an Express application.
crea una aplicacion de express _/

//COnfiguramos el puerto por el que pasa la información

/_Vamos ha hacer el motor de la plantilla es
decir poner de manera dinamica el html con el javascript _/

//Creamos la aplicacion de express guardandola en la constante aplicacion

Debajo de la linea en la app.js aplicacion.use(expressServidor.static(path.join(\_\_dirname + '/public')));
Tenemos que llamar con el use a las rutas del Archivo RutasWeb centralizando la informacion
asi aplicacion.use('/', require('./router/RutasWeb'));
Donde la / es la ruta global de la carpeta es decir que se aplique
a todo y el require() nos importa el archivo de RutasWeb que queremos
Lo que conseguimos es modularizar el programa
que las rutas esten en un archivo aparte con lo que
se ve todo mas claro

Como hemos comprobado ahora hemos modularizado ya nos es necesario
poner todas la rutas en la carpeta de app.js sino que ahora dentro de la carpeta
router y dentro el archivo RutasWeb.js tiene centralizada las rutas
de manera que incluso las podemos agrupar por metodos
y con el comando aplicacion.use('/', require('./router/RutasWeb'));
con esa linea de codigo en javascript en el archivo
de nuestra aplicacion le decimos que utilize el Router
en ese archivo recordemos que / es la carpeta raiz del proyecto

El archivo de mascotas vamos ha hacer peticiones
de otro tipo como put delete
y otro tipo de verbos HTTP

Moongose es el driver que nos permite conectarnos
con la base de datos hay que instalar el npm
con npm install mongoose --save

Lo basico para hacer la conexion es
const user = '';

const password = '';

const url = '';

MongoDBConexion.connect('mongodb://localhost:27017/test',
{ useNewUrlParser: true, useUnifiedTopology: true }
);

.env nos genera variables de ntorno añadiendo en app.js
la linea de require('dotenv').config(); y el archivo .env
lo tenemos que crear en la ruta del proyecto
en la ruta raiz del proyecto
probando a estableceer una variable de entorno que es utilizada
por todo el proyecto hemos porbado con PORT = 3001
con lo que nos geenra el proyecto local con el puerto de comunicacion 3001
en nuestra maquina nos lee la variable de entrono que es global
y se lee con la sintaxis de process.env. variabel de entrono que nosotros
pusismo en el archivo .env ubicado en la caprtea raiz d enuestro
proyecto
