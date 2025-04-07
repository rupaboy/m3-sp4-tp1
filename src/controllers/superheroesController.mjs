//Implementa el controlador para gestionar solicitudes HTTP, llamando a services
//Y utilizando las vistas para presentar los datos

import {
    obtenerTodosLosSuperheroes,
    buscarSuperheroesPorAtributo,
    obtenerSuperheroesMasPoderosos,
    obtenerSuperheroesMasPoderososPlaneta,
    obtenerSuperheroesMenosPoderosos,
    obtenerSuperheroesMenosPoderososPlaneta,
    obtenerSuperheroesSinPoderes,
    obtenerSuperheroesSinPoderesPlaneta,
    obtenerSuperheroePorId,
    agregarNuevoSuperheroe,
    agregarNuevoTemplateSuperheroe,
    agregarNuevoArraySuperheroes,
    editarSuperheroePorId,
    //
    editarNombreSuperheroePorId,
    editarNombreRealSuperheroePorId,
    editarEdadSuperheroePorId,
    editarPlanetaOrigenSuperheroePorId,
    editarDebilidadSuperheroePorId,
    editarPoderesSuperheroePorId,
    editarAliadosSuperheroePorId,
    editarEnemigosSuperheroePorId,
    //
    editarSuperheroePorIdAtributoValor,
    editarSuperheroePorIdAgregarPoder,
    editarSuperheroePorIdQuitarPoder,
    editarSuperheroePorIdAgregarAliado,
    editarSuperheroePorIdQuitarAliado,
    editarSuperheroePorIdAgregarEnemigo,
    editarSuperheroePorIdQuitarEnemigo,
    borrarSuperheroePorId,
    borrarSuperheroePorNombre,
    


    } from '../services/superheroesService.mjs';

import {
    renderizarSuperheroe,
    renderizarListaSuperheroesPorId,
    renderizarListaSuperheroes,
    renderizarSuperheroePorId} from '../views/responseView.mjs';

import {
    
    site
} from '../views/renderElement.mjs';
    

    
export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const {id} = req.params;
        const superheroes = await obtenerSuperheroePorId(id);
        const activeSite = {...site, isActive: 'result'};
        if (!superheroes) {
            site.errorTag = `No se encontró un superhéroe con ese _id'. (${error.message})`
            const activeSite = { ...site, isActive: 'error404'}
            return res.status(404).render('404', { site: activeSite })
        }
        res.render('result', {superheroes, site: activeSite });
    } catch (error) {
        site.errorTag = `Error al obtener superhéroe por _id'. (${error.message})`
        const activeSite = { ...site, isActive: 'error500'}
        res.status(500).render('500', { site: activeSite })
    }
}
/*

export async function obtenerTodosLosSuperheroesPorIdController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        if (!superheroes) {
            return res.status(404).send({ mensaje: 'No se encontraron _id de superheroes.' });
        }
        const superheroesFormateadosPorId = renderizarListaSuperheroesPorId(superheroes); //Nueva Vista con atributo ID
        res.status(200).json(superheroesFormateadosPorId);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los _id de los Superheroes',
            error: error.message });
    }
}
*/

export async function obtenerTodosLosSuperheroesController(req, res) {

    try {
        const superheroes = await obtenerTodosLosSuperheroes();

        res.status(200).render('heroes', {superheroes, site});
    } catch (error) {
        site.errorTag = `Error al obtener los superhéroes'. (${error.message})`
        const activeSite = { ...site, isActive: 'error500'}
        res.status(500).render('500', { site: activeSite })
    }
}

export async function buscarSuperheroesPorURLController(req, res) {
    
    const {atributo, valor} = req.params
    
    try {

        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor)
        if (superheroes.length === 0) {
            site.errorTag = `No se encontraron superhéroes con ese atributo y/o valor'. (${error.message})`
            const activeSite = { ...site, isActive: 'error404'}
            return res.status(404).render('404', { site: activeSite })
        }

        res.status(200).render('heroes', {superheroes, site});
    } catch (error) {
        site.errorTag = `Error buscando superhéroes por atributo y/o valor'. (${error.message})`
        const activeSite = { ...site, isActive: 'error500'}
        res.status(500).render('500', { site: activeSite })
    }
}


export async function buscarSuperheroesPorAtributoController(req, res) {
    
    try {
        const searchObject = req.body
        const atributo = Object.keys(searchObject)[0]
        const valor = searchObject[atributo];

        //console.log(atributo, valor)
        
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor)
        
        if (superheroes.length === 0) {
            site.errorTag = `No se encontraron superhéroes con ese atributo y/o valor'. (${error.message})`
            const activeSite = { ...site, isActive: 'error404'}
            return res.status(404).render('404', { site: activeSite })
        } 
        // Si solo se encuentra un héroe en el array, pasar sólo el elemento [0].
        if (superheroes.length === 1) {
            const activeSite = { ...site, isActive: 'result'}
            return res.status(200).render('result', {superheroes: superheroes[0], site: activeSite });
        }
        // Si solo se encuentra un héroe (no un array), convertirlo en un array de un solo elemento
        if (!Array.isArray(superheroes)) {
            const activeSite = { ...site, isActive: 'result'}
            return res.status(200).render('result', {superheroes, site: activeSite });
        }
        // Si encuentra un array con más de un héroe
        const activeSite = { ...site, isActive: 'results'}
        res.status(200).render('heroes', {superheroes, site: activeSite });
        
    } catch (error) {
        site.errorTag = `Error buscando superhéroes por atributo y valor'. (${error.message})`
        const activeSite = { ...site, isActive: 'error500'}
        res.status(500).render('500', { site: activeSite })
    }
}


/*
export async function buscarIdSuperheroesPorAtributoController(req, res) {
    try {
        const {atributo, valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontraron _id de superhéroes con ese atributo' });
        }

        const superheroesFormateados = renderizarListaSuperheroesPorId(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar _id de superhéroes con ese atributo',
            error: error.message });
    }
}


export async function obtenerSuperheroesMasPoderososController(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMasPoderosos();
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró a los superhéroes más poderosos.' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send(
            { mensaje: 'Error al obtener los superhéroes más poderosos.',
            error: error.message });
    }
}

export async function obtenerSuperheroesMasPoderososPlanetaController(req, res) {
    try {
        const {valor} = req.params;
        const superheroes = await obtenerSuperheroesMasPoderososPlaneta(valor);
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró a los superhéroes más poderosos de ese planeta.' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send(
            { mensaje: 'Error al obtener los superhéroes más poderosos de ese planeta.',
            error: error.message });
    }
}

export async function obtenerSuperheroesMenosPoderososController(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMenosPoderosos();
        
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró a los superhéroes menos poderosos' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send(
            { mensaje: 'Error al obtener los superhéroes menos poderosos',
            error: error.message });
    }
}

export async function obtenerSuperheroesMenosPoderososPlanetaController(req, res) {
    try {
        const {valor} = req.params;
        const superheroes = await obtenerSuperheroesMenosPoderososPlaneta(valor);
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró a los superhéroes menos poderosos de ese planeta.' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send(
            { mensaje: 'Error al obtener los superhéroes menos poderosos de ese planeta.',
            error: error.message });
    }
}

export async function obtenerSuperheroesSinPoderesController(req, res) {
    try {
        const superheroes = await obtenerSuperheroesSinPoderes();
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontraron superhéroes sin poderes.' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send(
            { mensaje: 'Error al obtener superhéroes sin poderes.',
            error: error.message });
    }
}


export async function obtenerSuperheroesSinPoderesPlanetaController(req, res) {
    try {
        const {valor} = req.params;
        const superheroes = await obtenerSuperheroesSinPoderesPlaneta(valor);
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró a los superhéroes sin poderes de ese planeta.' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send(
            { mensaje: 'Error al obtener los superhéroes sin poderes de ese planeta.',
            error: error.message });
    }
}

(req,res) => {
    const activeSite = {...site, isActive: 'add'}
    res.render('addSuperhero', { site: activeSite } )
}
*/

export async function crearNuevoSuperheroeController(req, res) {
    const activeSite = {...site, isActive: 'add'}
    res.render('addSuperhero', { site: activeSite } )
}

export async function editarSuperheroeController(req, res) {
    const {id} = req.params;
    const superheroe = await obtenerSuperheroePorId(id);
    const activeSite = {...site, isActive: 'edit'}
    res.render('editSuperhero', { site: activeSite , superheroe } )
}

export async function borrarSuperheroeController(req, res) {
    const {id} = req.params;
    const superheroe = await obtenerSuperheroePorId(id);
    const activeSite = {...site, isActive: 'delete'}
    res.render('deleteSuperhero', { site: activeSite , superheroe } )
}


export async function agregarNuevoSuperheroeController(req, res) {
    try {
        const {nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador} = req.body
        //console.log(nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador)
        const superheroe = await agregarNuevoSuperheroe(nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador)
        if (superheroe.length === 0) {
            site.errorTag = `No se encontró un superhéroe creado'. (${error.message})`
            const activeSite = { ...site, isActive: 'error404'}
            return res.status(404).render('404', { site: activeSite })
        }
        res.status(200).redirect(`/api/heroes/id/${superheroe._id}`);

    } catch (error) {
        site.errorTag = `Error al crear el superhéroe'. (${error.message})`
        const activeSite = { ...site, isActive: 'error500'}
        res.status(500).render('500', { site: activeSite })
    }
}

/*

export async function agregarNuevoTemplateSuperheroeController(req, res) {
    try {
        
        const superheroeCreado = await agregarNuevoTemplateSuperheroe()
        if (superheroeCreado.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe creado por template.' });
        }
        const superheroeFormateado = renderizarSuperheroe(superheroeCreado);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send (
            { mensaje: 'Error al crear superhéroe por template.',
            error: error.message });
    }
}

export async function agregarNuevoArraySuperheroesController(req, res) {
    try {
        
        const superheroesCreados = await agregarNuevoArraySuperheroes()
        //console.log(superheroesCreados.length)
        if (superheroesCreados.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontraron superhéroes creados por array.' });
        }
        const superheroesFormateados = renderizarListaSuperheroes(superheroesCreados);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send (
            { mensaje: 'Error al crear superhéroes por array.',
            error: error.message });
    }
}

*/

//METODOS PUT

export async function editarSuperheroePorIdController(req, res) {
    try {
        const {id} = req.params;
        const {nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador} = req.body
        //console.log('en body: ',nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador)
        const superheroe = await editarSuperheroePorId(id, nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador)
        if (superheroe.length === 0) {
            site.errorTag = `Error al crear el superhéroe'. (${error.message})`
            const activeSite = { ...site, isActive: 'error404'}
            return res.status(404).render('404', { site: activeSite })
        }
        res.status(200).redirect(`/api/heroes/id/${superheroe._id}`);

    } catch (error) {
        site.errorTag = `Error al editar el superhéroe'. (${error.message})`
        const activeSite = { ...site, isActive: 'error500'}
        res.status(500).render('500', { site: activeSite })
    }
}
/*
export async function editarSuperheroePorIdAtributoValorController(req, res) {
    try {
        const {id, atributo, valor} = req.params;
        const superheroe = await editarSuperheroePorIdAtributoValor(id, atributo, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontraron superhéroes con ese atributo' });
        }
        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar los superhéroes',
            error: error.message });
    }
}

export async function editarNombreSuperheroePorIdController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarNombreSuperheroePorId(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para editar su nombre' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para editar su nombre',
            error: error.message });
    }
}

export async function editarNombreRealSuperheroePorIdController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarNombreRealSuperheroePorId(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para editar su nombre Real' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para editar su nombre Real',
            error: error.message });
    }
}

export async function editarEdadSuperheroePorIdController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarEdadSuperheroePorId(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para editar su edad' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para editar su edad',
            error: error.message });
    }
}

export async function editarPlanetaOrigenSuperheroePorIdController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarPlanetaOrigenSuperheroePorId(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para editar su planeta de orígen' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para editar su planeta de orígen',
            error: error.message });
    }
}

export async function editarDebilidadSuperheroePorIdController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarDebilidadSuperheroePorId(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para editar su debilidad' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para editar su debilidad',
            error: error.message });
    }
}

export async function editarPoderesSuperheroePorIdController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarPoderesSuperheroePorId(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para editar sus poderes' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para editar sus poderes',
            error: error.message });
    }
}

export async function editarAliadosSuperheroePorIdController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarAliadosSuperheroePorId(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para editar sus aliados' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para editar sus aliados',
            error: error.message });
    }
}

export async function editarEnemigosSuperheroePorIdController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarEnemigosSuperheroePorId(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para editar sus enemigos' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para editar sus enemigos',
            error: error.message });
    }
}
//
export async function editarSuperheroePorIdAgregarPoderController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarSuperheroePorIdAgregarPoder(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para agregarle un poder' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para agregarle un poder',
            error: error.message });
    }
}

export async function editarSuperheroePorIdQuitarPoderController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarSuperheroePorIdQuitarPoder(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para quitarle un poder' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para quitarle un poder',
            error: error.message });
    }
}

export async function editarSuperheroePorIdAgregarAliadoController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarSuperheroePorIdAgregarAliado(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para agregarle un aliado' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para agregarle un aliado',
            error: error.message });
    }
}

export async function editarSuperheroePorIdQuitarAliadoController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarSuperheroePorIdQuitarAliado(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para quitarle un aliado' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para quitarle un aliado',
            error: error.message });
    }
}

export async function editarSuperheroePorIdAgregarEnemigoController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarSuperheroePorIdAgregarEnemigo(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para agregarle un enemigo' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para agregarle un enemigo',
            error: error.message });
    }
}

export async function editarSuperheroePorIdQuitarEnemigoController(req, res) {
    try {
        const {id, valor} = req.params;
        const superheroe = await editarSuperheroePorIdQuitarEnemigo(id, valor);
        if (superheroe.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe para quitarle un enemigo' });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar un superhéroe para quitarle un enemigo',
            error: error.message });
    }
}

*/
export async function borrarSuperheroePorIdController(req, res) {
    try {
        const {id} = req.params;
        const superheroe = await borrarSuperheroePorId(id);
        //console.log(superheroeBorrado)
        if (superheroe.lenght === 0) {
            site.errorTag = `No se encontró un _id para borrar el superhéroe'. (${error.message})`
            const activeSite = { ...site, isActive: 'error404'}
            return res.status(404).render('404', { site: activeSite })
        }
        res.status(200).redirect(`/api/heroes`);

    } catch (error) {
        site.errorTag = `Error al borrar superhéroe por _id'. (${error.message})`
        const activeSite = { ...site, isActive: 'error500'}
        res.status(500).render('500', { site: activeSite })
    }
}

/*
export async function borrarSuperheroePorNombreController(req, res) {
    try {
        const {valor} = req.params;
        const superheroeBorradoPorNombre = await borrarSuperheroePorNombre(valor);
        if (superheroeBorradoPorNombre.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró el nombre del superhéroe a borrar' });
        }
        const superheroeFormateado = renderizarSuperheroe(superheroeBorradoPorNombre)
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al borrar superhéroe con ese nombre',
            error: error.message });
    }
}
    */