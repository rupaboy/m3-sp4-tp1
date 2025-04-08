import os from 'os';
import path from 'path';
import express from 'express';
import methodOverride from 'method-override'
import router from './routes/superHeroRoutes.mjs';
import { connectDB } from './config/dbConfig.mjs';
import { fileURLToPath } from 'url';

import {
    site
        } from './views/renderElement.mjs';


const app = express();
const PORT = process.env.PORT || 3000;
const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2)
let freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2)
let localServerIsUp = false;
let localServerUpTime;

//Obtener el directorio del módulo
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); //View Engine

//Middleware
app.use(express.json());
app.use(express.urlencoded())
app.use(methodOverride('_method')); // PUT y DELETE en formularios HTML
//app.use(express.static('/public'));

app.get( '/api/', (req,res) => {
    const activeSite = {...site, isActive: 'home'}
    res.render('index', { site: activeSite, localServerIsUp, totalMemory, freeMemory, localServerUpTime, PORT, os })
})

//Configuración de rutas
app.use('/api/', router);

//Manejo de errores para rutas no encontradas
app.use((req,res,next) => {
    site.errorTag = 'Página no encontrada'
    const activeSite = { ...site, isActive: 'error404'}
    res.render('404', { site: activeSite })
})


//Conexión a MongoDB
connectDB();


//Iniciar el servidor
app.listen(PORT, () => {
    localServerIsUp = true,
    localServerUpTime = 'D: ' + new Date().toLocaleDateString() + ' | T: ' +new Date().toLocaleTimeString()
    console.log(`Servidor escuchando en el puerto ${PORT}`
    );
});
