const ExpressAPI = require('express');

const RouterExp = ExpressAPI.Router();

RouterExp.get('/', (req, res) => {
    res.render();
});


module.exports = RouterExp;