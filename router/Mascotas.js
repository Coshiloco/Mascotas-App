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

        const NombreMascota = mascotaDB.nombre

        console.log(mascotaDB)
        console.log(NombreMascota)

        res.render('detalle', {
            mascota : mascotaDB,
            //Para que el usuario no ponga una id inexistente ponemos el error a falso
            error : false,
        })

    } catch (error) {
        console.log(error)
        //Si salata al catch por el usuario haber introducido una id mal que le renderize error
        res.render('detalle', {
            error : true,
            mensaje : "No se encuentra el id del objeto que usted selecciono",
            id : id
        })
    }
})

module.exports = router;