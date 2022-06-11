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

        const DescripcionMascota = mascotaDB.descripcion

        console.log(mascotaDB)

        res.render('detalle', {
            mascotaDB : mascotaDB,
            //Para que el usuario no ponga una id inexistente ponemos el error a falso
            error : false,
            id : id,
            NombreMascota : NombreMascota,
            DescripcionMascota : DescripcionMascota
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


router.delete('/:id', async(req, res) => {
    //leemos el id del objeto
    const id = req.params.id
    try {
        const mascotaDB = await Mascota.findByIdAndDelete({_id : id})
        if (mascotaDB) {
            res.json({
                estado : true,
                id : `${id}`,
                mensaje : `La mascota con el ID : ${id} y con el NombreMascota: ${mascotaDB.nombre}
                ha sido elminada de la BBDD con exito` 
            })
        } else {
            res.json({
                estado : false,
                id : `${id}`,
                mensaje : `La mascota con el ID: ${id} no ha sido eliminada
                con exito porque no existe en la BBDD`
            })
        }
    }catch(error){
        console.log(error)
    }
})

module.exports = router;