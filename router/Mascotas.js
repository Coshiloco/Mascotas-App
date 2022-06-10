const ExpressAPI = require('express');

const RouterExp = ExpressAPI.Router();

const Mascota = require('../models/mascota');

RouterExp.get('/', async (req, res) => {

    try{

        const arraymascotasdb = await Mascota.find({ nombre
            :"rex", descripcion
            :"rex descripcion" }).exec();
        
        console.log(arraymascotasdb);

    }catch (error) {
        console.log(error);
    }

    res.render("mascotas", {
        arrayMascotas : [
            {id : 'sdfsdfsd', nombre : 'rex', descripcion : 'descriptiva'},
            {id : 'dsfdsf', nombre : 'gatuno', descripcion : 'gatis'}
        ]
    });
});


module.exports = RouterExp;