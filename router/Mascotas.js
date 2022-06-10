const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {
    
    try {
        const uri = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.gt8orbz.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

        mongoose.connect(uri,
        { useNewUrlParser: true, useUnifiedTopology: true }
        )
            .then(() => console.log('Base de datos conectada'))
            .catch(e => console.log(e))
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