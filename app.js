const expressServidor = require('express');

const path = require('path');

const aplicacion = expressServidor();

const pro = require('process');

aplicacion.use(expressServidor.static(__dirname + "/public"));

aplicacion.use('/', require('./router/RutasWeb'));

aplicacion.use('/mascotas', require('./router/Mascotas'));

aplicacion.set('view engine', 'ejs');

aplicacion.set('views', __dirname + '/views');

const port = pro.env.PORT || 3000;

aplicacion.use((req, res, next) => {
    res.status(404).render("404", {
        error: "Este es un mensaje dinamico de error",
        descripcion: "Pagina web de error"
    })
});

aplicacion.listen(port, () => {
    console.log(`Our app is running on port ${ port }`);
});






