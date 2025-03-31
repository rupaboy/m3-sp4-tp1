import express from 'express';
import { connectDB } from './config/dbConfig.mjs'
import { collectionsMenu, siteNav, webModule } from './views/renderElement.mjs';
import router from './routes/superHeroRoutes.mjs'
import bodyParser from 'body-parser'


const app = express();
const PORT = process.env.PORT || 3000;


//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


//EJS
app.set('views', path.join('./views'));
app.set('view engine', 'ejs'); //View Engine


//Main Route
app.get('/', (req, res) => {    
    res.render('index', {currentNav: siteNav[1], webModule});
});


//Collections
app.get('/collections', (req, res) => {
    res.render('collections', {currentNav: siteNav[2], webModule, collectionsMenu})
});


//Manejo de errores para rutas no encontradas
app.use((req,res) => {
    res.render('404', {currentNav: siteNav[0], webModule});
});


//Conexión a MongoDB
connectDB();


//Configuración de rutas
app.use('/api', router);


//Manejo de errores para rutas no encontradas
app.use((req,res) => {
    res.status(404).send({ mensaje: 'Ruta no encontrada.'});
});


//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
