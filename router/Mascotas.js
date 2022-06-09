const ExpressAPI = require('express');

const RouterExp = ExpressAPI.Router();

RouterExp.get('/', (req, res) => {
    res.render("mascotas", {
        arrayMascotas : [
            {id : 'sdfsdfsd', nombre : 'rex', descripcion : 'descriptiva'},
            {id : 'dsfdsf', nombre : 'gatuno', descripcion : 'gatis'}
        ]
    });
});


module.exports = RouterExp;