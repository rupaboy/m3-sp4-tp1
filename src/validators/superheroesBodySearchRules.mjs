import {body} from 'express-validator'




export const lowLevelBodySearchSanitizer = () => [
    
    body('nombreSuperHeroe').optional()
    .escape()
    .customSanitizer(value => {

        const palabras = value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜàèìòùÀÈÌÒÙ\s'-]/g, '')
            .replace(/\s*-\s*/g, '-')
            .replace(/\s+/g, ' ')
            .replace(/-+/g, '-')
            .replace(/'+/g, "'")

            return palabras
        }
    ),

    body('nombreReal').optional()
    .escape()
    .customSanitizer(value => {

        const palabras = value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜàèìòùÀÈÌÒÙ\s'-]/g, '')
            .replace(/\s*-\s*/g, '-')
            .replace(/\s+/g, ' ')
            .replace(/-+/g, '-')
            .replace(/'+/g, "'")

            return palabras
        }
    ),

    body('edad').optional()
    .escape()
    .customSanitizer(value => {

        const palabras = value
            .replace(/\D/g, '') //Borra todo caractér que no sea un número del 0 al 9

            return palabras
        }
    ),

    body('planetaOrigen').optional()
    .escape()
    .customSanitizer(value => {

        const palabras = value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜàèìòùÀÈÌÒÙ\s'-]/g, '')
            .replace(/\s*-\s*/g, '-')
            .replace(/\s+/g, ' ')
            .replace(/-+/g, '-')
            .replace(/'+/g, "'")

            return palabras
        }
    ),

    body('debilidad').optional()
    .escape()
    .customSanitizer(value => {

        const palabras = value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜàèìòùÀÈÌÒÙ\s'-]/g, '')
            .replace(/\s*-\s*/g, '-')
            .replace(/\s+/g, ' ')
            .replace(/-+/g, '-')
            .replace(/'+/g, "'")

            return palabras
        }
    ),

    body('poderes').optional()
    .escape()
    .customSanitizer(value => {

        const palabras = value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜàèìòùÀÈÌÒÙ\s'-]/g, '')
            .replace(/\s*-\s*/g, '-')
            .replace(/\s+/g, ' ')
            .replace(/-+/g, '-')
            .replace(/'+/g, "'")

            return palabras
        }
    ),

    body('aliados').optional()
    .escape()
    .customSanitizer(value => {

        const palabras = value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜàèìòùÀÈÌÒÙ\s'-]/g, '')
            .replace(/\s*-\s*/g, '-')
            .replace(/\s+/g, ' ')
            .replace(/-+/g, '-')
            .replace(/'+/g, "'")

            return palabras
        }
    ),

    body('enemigos').optional()
    .escape()
    .customSanitizer(value => {

        const palabras = value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜàèìòùÀÈÌÒÙ\s'-]/g, '')
            .replace(/\s*-\s*/g, '-')
            .replace(/\s+/g, ' ')
            .replace(/-+/g, '-')
            .replace(/'+/g, "'")

            return palabras
        }
    ),

    body('creador').optional()
    .escape()
    .customSanitizer(value => {

        const palabras = value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜàèìòùÀÈÌÒÙ\s'-]/g, '')
            .replace(/\s*-\s*/g, '-')
            .replace(/\s+/g, ' ')
            .replace(/-+/g, '-')
            .replace(/'+/g, "'")

            return palabras
        }
    ),

    body('id').optional()
    .escape()
    .customSanitizer(value => {

        const palabras = value
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑüÜàèìòùÀÈÌÒÙ\s'-]/g, '')
            .replace(/\s*-\s*/g, '-')
            .replace(/\s+/g, ' ')
            .replace(/-+/g, '-')
            .replace(/'+/g, "'")

            return palabras
        }
    ),
]


        // STRING __________________________________________________ VALIDATION
export const lowLevelBodySearchValidations = () => [

    // ¡La string debe existir!
    // ¡La string no debe estar vacía!
    // El largo deberá ser >3 && <60
    // Sanitiza espacios alrededor de la string.

    body('nombreSuperHeroe').optional()
    .exists().withMessage(
        `El nombre es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El nombre no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El nombre debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('nombreReal').optional()
    .exists().withMessage(
        `El nombre real es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El nombre real no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El nombre real debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('edad').optional()
    .exists().withMessage(
        `La edad es obligatoria.`)
    .trim()
    .notEmpty().withMessage(
        `La edad no puede expresarse como un valor vacío.`)
    .isNumeric().withMessage(
        `La edad debe expresarse con números.`)
    .custom(value => parseFloat(value) >= 0).withMessage(
        'La edad debe ser mayor o igual a 0.') //OK
    .bail(),

    body('planetaOrigen').optional()
    .exists().withMessage(
        `El planeta de orígen es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El planeta de orígen no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El planeta de orígen debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('debilidad').optional()
    .exists().withMessage(
        `El campo "debilidad" es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `La debilidad no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `La debilidad debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('poderes').optional()
    .exists().withMessage(
        `El poder es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El poder no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El poder debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('aliados').optional()
    .exists().withMessage(
        `El aliado es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El aliado no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El aliado debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('enemigos').optional()
    .exists().withMessage(
        `El enemigo es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El enemigo no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El enemigo debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('creador').optional()
    .exists().withMessage(
        `El campo de "creador" es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El creador no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El creador debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('_id').optional()
    .exists().withMessage(
        `El campo "id" es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El id no puede expresarse como un valor vacío.`)
    .isMongoId().withMessage(
        `El id debe expresarse con una _id de MongoDB.`) //OK
    .bail(),

]