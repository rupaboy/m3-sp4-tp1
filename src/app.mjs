import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cliRouter from './routes/superHeroCliRoutes.mjs';
import router from './routes/superHeroRoutes.mjs';
import { connectDB } from './config/dbConfig.mjs';
import { fileURLToPath } from 'url';

import {
    siteNav,
    webModule
        } from './views/renderElement.mjs';


const app = express();
const PORT = process.env.PORT || 3000;

//Obtener el directorio del módulo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //View Engine


//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('/public'));




//Configuración de rutas
app.use('/api/cli', cliRouter);
app.use('/api/', router);

//Manejo de errores para rutas no encontradas
app.use((req,res,next) => {
    res.render('404', {siteNav})
})




//Conexión a MongoDB
connectDB();


//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
