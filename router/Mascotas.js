const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {
    
    try {
        
    const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.ncdk5.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

    mongoose.connect(uri)
        .then(()=> console.log('conectado a mongodb')) 
        .catch(e => console.log('error de conexión', e))
        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)

        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB
        })

    } catch (error) {
        console.log(error)
    }

})

module.exports = router;