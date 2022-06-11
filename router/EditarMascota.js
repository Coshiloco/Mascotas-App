const express = require('express');
const router = express.Router();

const Mascota = require('../models/mascota')


router.get('/:id/editar', async(req, res) => {
    const id = req.params.id
    const mascotaDB = await Mascota.find({_id : id})
    console.log(mascotaDB)
    res.render('editar', {
        mascota : mascotaDB,
        id : id
    })
    console.log(res.mascota)
})


module.exports = router;