const mongo = require('mongoose');
const Schema = mongo.Schema;

const mascotaSchema = new Schema({
    nombre : String,
    descripcion : String
})

const Mascota = mongo.model('Mascota', mascotaSchema);

module.exports = Mascota;