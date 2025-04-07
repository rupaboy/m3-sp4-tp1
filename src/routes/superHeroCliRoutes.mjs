//Define las rutas necesarias para cada operación del controlador.

import express from 'express';

    //Express-Validator
import { validationHandler } from '../validators/errorHandler.mjs';
import {
    //Validators for Param
    lowLevelParamStringValidations,
    midLevelParamStringValidations,
    lowLevelParamNumberValidations,
    lowLevelParamArrayValidations,
    mongoIdParamValidator,
    byAttributeParamValidations,
    //Sanitizers for Param
    attributeParamSanitizer,
    lowLevelParamStringSanitizer,
    midLevelParamStringSanitizer,
    highLevelParamStringSanitizer,
    lowLevelParamArraySanitizer,
    midLevelParamArraySanitizer,
    highLevelParamArraySanitizer,

} from '../validators/superheroesParamRules.mjs';

import {
    //Validators for Body
    lowLevelBodyStringValidations,
    midLevelBodyStringValidations,
    lowLevelBodyNumberValidations,
    lowLevelBodyArrayValidations,
    mongoIdBodyValidator,
    //Sanitizers for Body
    lowLevelBodyStringSanitizer,
    midLevelBodyStringSanitizer,
    highLevelBodyStringSanitizer,
    lowLevelBodyArraySanitizer,
    midLevelBodyArraySanitizer,
    highLevelBodyArraySanitizer,

} from '../validators/superheroesBodyRules.mjs';

    //CliControllers
import { 
    obtenerTodosLosSuperheroesPorIdCliController,
    obtenerTodosLosSuperheroesCliController,
    obtenerSuperheroePorIdCliController,
    obtenerSuperheroesMasPoderososCliController,
    obtenerSuperheroesMenosPoderososCliController,
    obtenerSuperheroesSinPoderesCliController,
    obtenerSuperheroesMasPoderososPlanetaCliController,
    obtenerSuperheroesMenosPoderososPlanetaCliController,
    obtenerSuperheroesSinPoderesPlanetaCliController,
    buscarSuperheroesPorAtributoCliController,
    buscarIdSuperheroesPorAtributoCliController,
    //agregarNuevoSuperheroeCliController,
    agregarNuevoTemplateSuperheroeCliController,
    agregarNuevoArraySuperheroesCliController,
    //editarSuperheroePorIdAtributoValorCliController,
    editarNombreSuperheroePorIdCliController,
    editarNombreRealSuperheroePorIdCliController,
    editarEdadSuperheroePorIdCliController,
    editarPlanetaOrigenSuperheroePorIdCliController,
    editarDebilidadSuperheroePorIdCliController,
    editarPoderesSuperheroePorIdCliController,
    editarAliadosSuperheroePorIdCliController,
    editarEnemigosSuperheroePorIdCliController,
    editarSuperheroePorIdAgregarPoderCliController,
    editarSuperheroePorIdQuitarPoderCliController,
    editarSuperheroePorIdAgregarAliadoCliController,
    editarSuperheroePorIdQuitarAliadoCliController,
    editarSuperheroePorIdAgregarEnemigoCliController,
    editarSuperheroePorIdQuitarEnemigoCliController,
    //editarSuperheroePorIdCliController,
    borrarSuperheroePorIdCliController,
    borrarSuperheroePorNombreCliController,
    agregarNuevoSuperheroeCliController,
    
} from '../controllers/superheroesCliController.mjs';


// Router
const cliRouter = express.Router();


//GET
//Collection

cliRouter.get('/heroes/mas-poderosos',
    obtenerSuperheroesMasPoderososCliController);

cliRouter.get('/heroes/menos-poderosos',
    obtenerSuperheroesMenosPoderososCliController);

cliRouter.get('/heroes/sin-poderes',
    obtenerSuperheroesSinPoderesCliController);
        
cliRouter.get('/heroes/mas-poderosos/:valor', //Valor debe ser un planeta
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    validationHandler,
    obtenerSuperheroesMasPoderososPlanetaCliController);

cliRouter.get('/heroes/menos-poderosos/:valor', //Valor debe ser un planeta
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    validationHandler,
    obtenerSuperheroesMenosPoderososPlanetaCliController);

cliRouter.get('/heroes/sin-poderes/:valor', //Valor debe ser un planeta
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    validationHandler,
    obtenerSuperheroesSinPoderesPlanetaCliController);

cliRouter.get('/heroes', obtenerTodosLosSuperheroesCliController); //Listar todos los heroes

cliRouter.get('/heroes/id', obtenerTodosLosSuperheroesPorIdCliController); //Listar todos con Id

cliRouter.get('/heroes/id/:id', //Buscar héroe por Id
    mongoIdParamValidator(),
    validationHandler,
    obtenerSuperheroePorIdCliController);

cliRouter.get('/heroes/:atributo/:valor', //Búscar por atributo valor,funcionamiento sub-optimo
    attributeParamSanitizer(),
    byAttributeParamValidations(),
    validationHandler,
    buscarSuperheroesPorAtributoCliController);

cliRouter.get('/heroes/id/:atributo/:valor', //Búscar Id por atributo valor, funcionamiento sub-optimo
    attributeParamSanitizer(),
    byAttributeParamValidations(),
    validationHandler,
    buscarIdSuperheroesPorAtributoCliController)

//POST

cliRouter.post('/heroes/nuevo/',
    highLevelBodyArraySanitizer(),
    highLevelBodyStringSanitizer(),
    lowLevelBodyStringValidations(),
    lowLevelBodyArrayValidations(),
    lowLevelBodyNumberValidations(),
    validationHandler,
    agregarNuevoSuperheroeCliController)


cliRouter.post('/heroes/nuevo/template',
    agregarNuevoTemplateSuperheroeCliController) //Template ../helper/templateHeroeNuevo.mjs

cliRouter.post('/heroes/nuevo/array', 
    agregarNuevoArraySuperheroesCliController) //Array ../helper/templateHeroeNuevo.mjs


//PUT
/*
cliRouter.put('heroes/:id/:atributo/:valor', (req, res) => {   // Funcionamiento suboptimo.
    const { id, atributo, valor } = req.params              // Deprecated.
        putValorValidation(id, atributo, valor),
        editarSuperheroePorIdAtributoValorCliController})      // Abajo nuevas funcionalidades.
*/

cliRouter.put('/heroes/:id/nombreSuperHeroe/:valor', //Valor: nuevo nombre
    mongoIdParamValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    validationHandler,
    editarNombreSuperheroePorIdCliController);

cliRouter.put('/heroes/:id/nombreReal/:valor', //Valor: nuevo nombre real
    mongoIdParamValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    validationHandler,
    editarNombreRealSuperheroePorIdCliController);

cliRouter.put('/heroes/:id/edad/:valor', //Valor: nueva edad
    mongoIdParamValidator(),
    lowLevelParamNumberValidations(),
    validationHandler,
    editarEdadSuperheroePorIdCliController);

cliRouter.put('/heroes/:id/planetaOrigen/:valor', //Valor: nuevo planeta
    mongoIdParamValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    validationHandler,
    editarPlanetaOrigenSuperheroePorIdCliController);

cliRouter.put('/heroes/:id/debilidad/:valor', //Valor: nueva debilidad
    mongoIdParamValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    validationHandler,
    editarDebilidadSuperheroePorIdCliController);

cliRouter.put('/heroes/:id/poderes/:valor', //Valor: nuevo Array de poderes (separar con ,)
    mongoIdParamValidator(),
    highLevelParamArraySanitizer(),
    lowLevelParamArrayValidations(),
    validationHandler,
    editarPoderesSuperheroePorIdCliController);

cliRouter.put('/heroes/:id/aliados/:valor', //Valor: nuevo Array de aliados (separar con ,)
    mongoIdParamValidator(),
    highLevelParamArraySanitizer(),
    lowLevelParamArrayValidations(),
    validationHandler,
    editarAliadosSuperheroePorIdCliController);

cliRouter.put('/heroes/:id/enemigos/:valor', //Valor: nuevo Array de enemigos (separar con ,)
    mongoIdParamValidator(),
    highLevelParamArraySanitizer(),
    lowLevelParamArrayValidations(),
    validationHandler,
    editarEnemigosSuperheroePorIdCliController);

cliRouter.put('/heroes/:id/agregar/poder/:valor', //Valor: nuevo Poder
    mongoIdParamValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    validationHandler,
    editarSuperheroePorIdAgregarPoderCliController);

cliRouter.put('/heroes/:id/quitar/poder/:valor', //Valor: quitar un poder
    mongoIdParamValidator(),
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    validationHandler,
    editarSuperheroePorIdQuitarPoderCliController)


cliRouter.put('/heroes/:id/agregar/aliado/:valor', //Valor: nuevo aliado
    mongoIdParamValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    validationHandler,
    editarSuperheroePorIdAgregarAliadoCliController)


cliRouter.put('/heroes/:id/quitar/aliado/:valor', //Valor: quitar un aliado
    mongoIdParamValidator(),
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    validationHandler,
    editarSuperheroePorIdQuitarAliadoCliController)


cliRouter.put('/heroes/:id/agregar/enemigo/:valor', //Valor: nuevo enemigo
    mongoIdParamValidator(),
    highLevelParamStringSanitizer(),
    midLevelParamStringValidations(),
    validationHandler,
    editarSuperheroePorIdAgregarEnemigoCliController)


cliRouter.put('/heroes/:id/quitar/enemigo/:valor', //Valor: quitar un enemigo
    mongoIdParamValidator(),
    lowLevelParamStringSanitizer(),
    lowLevelParamStringValidations(),
    validationHandler,
    editarSuperheroePorIdQuitarEnemigoCliController)

    /*
cliRouter.post('/heroes/:id/editar', //Subóptimo. Nuevas funcionalidades arriba.
    validationHandler,
    agregarNuevoSuperheroeCliController)
*/

//cliRouter.put('/heroes/editar/:id'
// ], editarSuperheroePorIdCliController) //..Pasa un id para editar. Deprecated.

//DELETE

cliRouter.delete('/heroes/id/:id', //Borrar por Id
    mongoIdParamValidator(),
    borrarSuperheroePorIdCliController)

cliRouter.delete('/heroes/nombre/:valor', //Valor: Nombre de héroe a borrar
    lowLevelParamStringValidations(),
    borrarSuperheroePorNombreCliController)

export default cliRouter;