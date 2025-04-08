import {body} from 'express-validator'




export const lowLevelBodySearchSanitizer = () => [
    
    body('nombreSuperHeroe').optional()
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
    .customSanitizer(value => {

        const palabras = value
            .replace(/\D/g, '') //Borra todo caractér que no sea un número del 0 al 9

            return palabras
        }
    ),

    body('planetaOrigen').optional()
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
        `El nombre es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El nombre no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El nombre debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('edad').optional()
    .exists().withMessage(
        `El número es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El número no puede expresarse como un valor vacío.`)
    .isNumeric().withMessage(
        `El valor debe expresarse con números.`)
    .custom(value => parseFloat(value) >= 0).withMessage(
        'El número debe ser mayor o igual a 0.') //OK
    .bail(),

    body('planetaOrigen').optional()
    .exists().withMessage(
        `El nombre es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El nombre no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El nombre debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('debilidad').optional()
    .exists().withMessage(
        `El nombre es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El nombre no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El nombre debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('poderes').optional()
    .exists().withMessage(
        `El nombre es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El nombre no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El nombre debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('aliados').optional()
    .exists().withMessage(
        `El nombre es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El nombre no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El nombre debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('enemigos').optional()
    .exists().withMessage(
        `El nombre es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El nombre no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El nombre debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('creador').optional()
    .exists().withMessage(
        `El nombre es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El nombre no puede expresarse como una cadena vacía.`) //OK
    .isLength({min: 3, max: 60}).withMessage(
        `El nombre debe tener entre 3 y 60 caractéres`) //OK
    .bail(),

    body('_id').optional()
    .exists().withMessage(
        `El id es obligatorio.`)
    .trim()
    .notEmpty().withMessage(
        `El id no puede expresarse como un valor vacío.`)
    .isMongoId().withMessage(
        `El valor debe expresarse con una _id de MongoDB.`) //OK
    .bail(),

]