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


    
export async function obtenerSuperheroePorIdCliController(req, res) {
    try {
        const {id} = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe por _id no encontrado' });
        }
        //console.log(superheroe)
        const superheroeFormateado = renderizarSuperheroePorId(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener Superheroe por _id',
            error: error.message });
    }
}

export async function obtenerTodosLosSuperheroesPorIdCliController(req, res) {
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

export async function obtenerTodosLosSuperheroesCliController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los Superhéroes',
            error: error.message });
    }
}

export async function buscarSuperheroesPorAtributoCliController(req, res) {
    try {
        const {atributo, valor} = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontraron superhéroes con ese atributo' });
        }

        const superheroesFormateados = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroesFormateados);
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar los superhéroes por atributo',
            error: error.message });
    }
}

export async function buscarIdSuperheroesPorAtributoCliController(req, res) {
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

export async function obtenerSuperheroesMasPoderososCliController(req, res) {
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

export async function obtenerSuperheroesMasPoderososPlanetaCliController(req, res) {
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

export async function obtenerSuperheroesMenosPoderososCliController(req, res) {
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

export async function obtenerSuperheroesMenosPoderososPlanetaCliController(req, res) {
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

export async function obtenerSuperheroesSinPoderesCliController(req, res) {
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


export async function obtenerSuperheroesSinPoderesPlanetaCliController(req, res) {
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

export async function agregarNuevoSuperheroeCliController(req, res) {
    try {
        const {nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador} = req.body
        //console.log(nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador)
        const superheroeCreado = await agregarNuevoSuperheroe(nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador)
        if (superheroeCreado.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró un superhéroe creado' });
        }
        const superheroeFormateado = renderizarSuperheroe(superheroeCreado);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send (
            { mensaje: 'Error al crear superhéroe',
            error: error.message });
    }
}

export async function agregarNuevoTemplateSuperheroeCliController(req, res) {
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

export async function agregarNuevoArraySuperheroesCliController(req, res) {
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

//METODOS PUT

export async function editarSuperheroePorIdCliController(req, res) {
    try {
        const {id} = req.params;
        const superheroeEditado = await editarSuperheroePorId(id)
        //console.log(superheroeEditado)
        if (superheroeEditado.length === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró el superhéroe editado'});
        }
        const superheroeFormateado = renderizarSuperheroe(superheroeEditado)
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send (
            { mensaje: 'Error al editar superhéroe',
            error: error.message });
    }
}

export async function editarSuperheroePorIdAtributoValorCliController(req, res) {
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

export async function editarNombreSuperheroePorIdCliController(req, res) {
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

export async function editarNombreRealSuperheroePorIdCliController(req, res) {
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

export async function editarEdadSuperheroePorIdCliController(req, res) {
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

export async function editarPlanetaOrigenSuperheroePorIdCliController(req, res) {
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

export async function editarDebilidadSuperheroePorIdCliController(req, res) {
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

export async function editarPoderesSuperheroePorIdCliController(req, res) {
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

export async function editarAliadosSuperheroePorIdCliController(req, res) {
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

export async function editarEnemigosSuperheroePorIdCliController(req, res) {
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
export async function editarSuperheroePorIdAgregarPoderCliController(req, res) {
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

export async function editarSuperheroePorIdQuitarPoderCliController(req, res) {
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

export async function editarSuperheroePorIdAgregarAliadoCliController(req, res) {
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

export async function editarSuperheroePorIdQuitarAliadoCliController(req, res) {
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

export async function editarSuperheroePorIdAgregarEnemigoCliController(req, res) {
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

export async function editarSuperheroePorIdQuitarEnemigoCliController(req, res) {
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


export async function borrarSuperheroePorIdCliController(req, res) {
    try {
        const {id} = req.params;
        const superheroeBorradoPorId = await borrarSuperheroePorId(id);
        //console.log(superheroeBorrado)
        if (superheroeBorradoPorId.lenght === 0) {
            return res.status(404).send(
                { mensaje: 'No se encontró una _id para borrar superhéroe'});
        }
        const superheroeFormateado = renderizarSuperheroePorId(superheroeBorradoPorId)
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send (
            {mensaje: 'Error al borrar superhéroe por Id',
            error: error.message });
        
    }
}

export async function borrarSuperheroePorNombreCliController(req, res) {
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
