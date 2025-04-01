import express from 'express';
import { connectDB } from './config/dbConfig.mjs'
import { siteNav, webModule } from './views/renderElement.mjs';
import router from './routes/superHeroRoutes.mjs'
import bodyParser from 'body-parser'
import path from 'path';
import { fileURLToPath } from 'url';


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
app.use(express.static('public'));
//Manejo de errores para rutas no encontradas
app.use((req,res,next) => {
    res.render('404', {siteNav})
})

//, {currentNav: siteNav[0], webModule}})
/*
//Main Route
app.get('/', (req, res) => {    
    res.render('index', {currentNav: siteNav[1], webModule});
});
*/
/*
//Collections
app.get('/api/collections', (req, res) => {
    res.render('collections', {currentNav: siteNav[2], webModule, collectionsMenu})
});
*/



//Conexión a MongoDB
connectDB();


//Configuración de rutas
app.use('/api', router);


//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
