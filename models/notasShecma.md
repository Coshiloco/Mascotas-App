Each schema maps to a MongoDB collection and defines the shape of the documents within that collection

Es decir define porque l coleection en Mongo son las bases de
datos es decir define como se van a mostra los datos
en base a como estan en Mongo que es un json

Es decir recibe todos los parametros o la estructura
que tendra nuestra coleccion que es en este caso la base
veterinaria y el siubcampo mascotas
donde los datos estan representados en forma de json

Es decir define el modelo los campos que va atener cada mascota en la base
de datos que tipo de dato va a ser si es obligatorio introducir
el campo en la tabla o no ese tipo de cosas

En el ejemplo de macota
const mascotaSchema = new Schema({
nombre : String,
descripcion : String
})

const Mascota = mongo.model('Mascota', mascotaSchema);

module.exports = Mascota;

Primero guardamos el Schema que es un objeto
en el que definimos primero que tiene que tener el campo
nombre si el usuario introduce un booleano
mal porque le hemos marcado que tiene que ser un String
al igual que en la descripcion

Luego en la variable mascota guardamos el modelo
es decir Una mascota tiene que ser igual al objeto Schema
restrigiendo que toda mascota nueva tiene que
tener un nombre que tiene que ser de tipo
Stirng y una descripcion
igual

Luego exportamos la Mascota para que se comparta entre los archivos
