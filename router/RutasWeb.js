const ExpressAPI = require('express');

const RouterExp = ExpressAPI.Router();

RouterExp.get('/', (req, res) => {
    res.render("index", { titulo: "mi titulo dinamico" });
});


RouterExp.get('/servicios', (req, res) => {
    res.render("servicios", { tituloservicios: "Este es un mensaje dinamico de servicios" });
});

module.exports = RouterExp;