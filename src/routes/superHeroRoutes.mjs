//Define las rutas necesarias para cada operación del controlador.

import express from 'express';

    //Express-Validator
import { validationHandler } from '../validators/errorHandler.mjs';

import {
    //Validators for Search Bar
    lowLevelBodySearchValidations,
    lowLevelBodySearchSanitizer,
} from '../validators/superheroesBodySearchRules.mjs';

import {
    //Validators for Search Bar
    midLevelBodySanitizer,
    lowLevelBodyValidations,
} from '../validators/superheroesBodyRules.mjs';


    //Controllers 
import { 
    
    obtenerTodosLosSuperheroesController,
    obtenerSuperheroePorIdController,
    //obtenerSuperheroesMasPoderososController,
    //obtenerSuperheroesMenosPoderososController,
    //obtenerSuperheroesSinPoderesController,
    //obtenerSuperheroesMasPoderososPlanetaController,
    //obtenerSuperheroesMenosPoderososPlanetaController,
    //obtenerSuperheroesSinPoderesPlanetaController,
    buscarSuperheroesPorURLController,
    buscarSuperheroesPorAtributoController,
    //agregarNuevoSuperheroeController,
    crearNuevoSuperheroeController,
    //agregarNuevoTemplateSuperheroeController,
    //agregarNuevoArraySuperheroesController,
    //editarSuperheroePorIdAtributoValorController,
    editarSuperheroeController,
    borrarSuperheroeController,
    editarSuperheroePorIdController,
    //editarNombreSuperheroePorIdController,
    //editarNombreRealSuperheroePorIdController,
    //editarEdadSuperheroePorIdController,
    //editarPlanetaOrigenSuperheroePorIdController,
    //editarDebilidadSuperheroePorIdController,
    //editarPoderesSuperheroePorIdController,
    //editarAliadosSuperheroePorIdController,
    //editarEnemigosSuperheroePorIdController,
    //editarSuperheroePorIdAgregarPoderController,
    //editarSuperheroePorIdQuitarPoderController,
    //editarSuperheroePorIdAgregarAliadoController,
    //editarSuperheroePorIdQuitarAliadoController,
    //editarSuperheroePorIdAgregarEnemigoController,
    //editarSuperheroePorIdQuitarEnemigoController,
    borrarSuperheroePorIdController,
    agregarNuevoSuperheroeController,
    
} from '../controllers/superheroesController.mjs';


// Router
const router = express.Router();

//GET
//Collection

/*
router.get('/heroes/mas-poderosos',
    obtenerSuperheroesMasPoderososController);

router.get('/heroes/menos-poderosos',
    obtenerSuperheroesMenosPoderososController);

router.get('/heroes/sin-poderes',
    obtenerSuperheroesSinPoderesController);
        
router.get('/heroes/mas-poderosos/:valor', //Valor debe ser un planeta
    validationHandler,
    obtenerSuperheroesMasPoderososPlanetaController);

router.get('/heroes/menos-poderosos/:valor', //Valor debe ser un planeta
    validationHandler,
    obtenerSuperheroesMenosPoderososPlanetaController);

router.get('/heroes/sin-poderes/:valor', //Valor debe ser un planeta
    validationHandler,
    obtenerSuperheroesSinPoderesPlanetaController);
*/

router.get('/heroes', obtenerTodosLosSuperheroesController); //Listar todos los heroes

router.get('/heroes/nuevo', crearNuevoSuperheroeController);

router.get('/heroes/editar/id/:id', editarSuperheroeController);

router.get('/heroes/borrar/id/:id', borrarSuperheroeController);

router.get('/heroes/id/:id', //Buscar héroe por Id
    
    
    validationHandler,
    obtenerSuperheroePorIdController);

router.get('/heroes/_id/:id', //Buscar héroe por Id
    
    
    validationHandler,
    obtenerSuperheroePorIdController);

/*
router.get('/heroes/comparar', (req,res) => {
    res.send('comparar API')
})
*/

router.get('/heroes/:atributo/:valor',
    buscarSuperheroesPorURLController)
    

//POST

router.post('/heroes/buscar/',
    lowLevelBodySearchSanitizer(),
    lowLevelBodySearchValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoController)


router.post('/heroes/nuevo/',
    midLevelBodySanitizer(),
    lowLevelBodyValidations(),
    validationHandler,
    agregarNuevoSuperheroeController)


/*
router.post('/heroes/nuevo/array', 
    agregarNuevoArraySuperheroesController) //Array ../helper/templateHeroeNuevo.mjs
*/

//PUT

router.put('/heroes/id/:id',
    midLevelBodySanitizer(),
    lowLevelBodyValidations(),
    validationHandler,
    editarSuperheroePorIdController) //..Pasa un id para editar.
/*
router.put('/heroes/:id/nombreSuperHeroe/:valor', //Valor: nuevo nombre

    validationHandler,
    editarNombreSuperheroePorIdController);

router.put('/heroes/:id/nombreReal/:valor', //Valor: nuevo nombre real
    
    validationHandler,
    editarNombreRealSuperheroePorIdController);

router.put('/heroes/:id/edad/:valor', //Valor: nueva edad
    
    validationHandler,
    editarEdadSuperheroePorIdController);

router.put('/heroes/:id/planetaOrigen/:valor', //Valor: nuevo planeta
                        
    validationHandler,
    editarPlanetaOrigenSuperheroePorIdController);

router.put('/heroes/:id/debilidad/:valor', //Valor: nueva debilidad
    
    validationHandler,
    editarDebilidadSuperheroePorIdController);

router.put('/heroes/:id/poderes/:valor', //Valor: nuevo Array de poderes (separar con ,)
        
    validationHandler,
    editarPoderesSuperheroePorIdController);

router.put('/heroes/:id/aliados/:valor', //Valor: nuevo Array de aliados (separar con ,)
        
    validationHandler,
    editarAliadosSuperheroePorIdController);

router.put('/heroes/:id/enemigos/:valor', //Valor: nuevo Array de enemigos (separar con ,)
    
    validationHandler,
    editarEnemigosSuperheroePorIdController);

router.put('/heroes/:id/agregar/poder/:valor', //Valor: nuevo Poder
    
    validationHandler,
    editarSuperheroePorIdAgregarPoderController);

router.put('/heroes/:id/quitar/poder/:valor', //Valor: quitar un poder
    
    validationHandler,
    editarSuperheroePorIdQuitarPoderController)


router.put('/heroes/:id/agregar/aliado/:valor', //Valor: nuevo aliado

    validationHandler,
    editarSuperheroePorIdAgregarAliadoController)


router.put('/heroes/:id/quitar/aliado/:valor', //Valor: quitar un aliado
    
    validationHandler,
    editarSuperheroePorIdQuitarAliadoController)


router.put('/heroes/:id/agregar/enemigo/:valor', //Valor: nuevo enemigo
    
    validationHandler,
    editarSuperheroePorIdAgregarEnemigoController)


router.put('/heroes/:id/quitar/enemigo/:valor', //Valor: quitar un enemigo
    
    validationHandler,
    editarSuperheroePorIdQuitarEnemigoController)
*/
//DELETE

router.delete('/heroes/id/:id', //Borrar por Id
    
    
    borrarSuperheroePorIdController)
/*
router.delete('/heroes/nombre/:valor', //Valor: Nombre de héroe a borrar

    borrarSuperheroePorNombreController)
*/
export default router;