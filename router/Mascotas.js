const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')

router.get('/', async (req, res) => {
    
    try {
        
        const arrayMascotasDB = await Mascota.find()
        console.log(arrayMascotasDB)

        res.render("mascotas", {
            arrayMascotas: arrayMascotasDB
        })

    } catch (error) {
        console.log(error)
    }

    
})

router.get('/crear', (req, res) =>{
    res.render('crear')
})

router.post('/', async(req,res) =>{
    const body = req.body
    try {
        await Mascota.create(body)
        res.redirect('/mascotas')
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async(req, res) => {
    
    //En  mongo DB guion bajo viene el id la propiedad del Objeto almacenado en nuestra BBDD
    const id = req.params.id 

    try {

        // Para que encuentre el id dentro de findOne {_id : id pasada por nosotros}
        const mascotaDB = await Mascota.findOne({_id : id})

        console.log(mascotaDB)

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;