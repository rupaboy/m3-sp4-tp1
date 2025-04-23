import {body} from 'express-validator';

export const midLevelBodySanitizer = () => [

    
    body('nombreSuperHeroe')

    .customSanitizer(value => {
        
        const articulos = new Set([ 'de', 'del', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'ante', 'bajo', 'con', 'contra', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sobre', 'tras', 'y', 'o', 'ni', 'que', 'pero', 'aunque', 'porque', 'pues', 'como', 'cuando', 'donde', 'mientras', 'aunque' ]);
    
        const string = value.toLowerCase()
                
            const sanitizedString = string
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
            .replace(/-+/g, '-') //Elimina guiones medios repetidos
            .replace(/'+/g, "'") //Elimina apóstrofes repetidos
            .replace(/\s+/g, ' ') //Elimina espacios repetidos

            const wordsInString = sanitizedString.trim().split(' ')
            //Ahora cada string contiene un array de palabras

            const refinedString = wordsInString.map(( word, i ) => {
            
                if (( i === 0) || (!articulos.has(word))) {

                    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
                    return capitalizedWord
                }
                
                return word //capitalizadas selectivamente
            })

            const enhancedString = refinedString.join(' ') //Palabras vueltas a unir
            
            const evenBetterString = enhancedString.charAt(0).toUpperCase() + enhancedString.slice(1)
            //Cada string ahora empieza con mayúscula.

            const anEvenBetterString = evenBetterString
            .replace(/[-']\s*(\w)/g, (match, p1) => {
              return match[0] + p1.toUpperCase(); // Capitaliza la letra después de un guión o apóstrofe
            });


        return anEvenBetterString
        
    }),

    
    body('nombreReal')

    .customSanitizer(value => {
        
        const articulos = new Set([ 'de', 'del', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'ante', 'bajo', 'con', 'contra', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sobre', 'tras', 'y', 'o', 'ni', 'que', 'pero', 'aunque', 'porque', 'pues', 'como', 'cuando', 'donde', 'mientras', 'aunque' ]);
    
        const string = value.toLowerCase()
                
            const sanitizedString = string
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
            .replace(/-+/g, '-') //Elimina guiones medios repetidos
            .replace(/'+/g, "'") //Elimina apóstrofes repetidos
            .replace(/\s+/g, ' ') //Elimina espacios repetidos

            const wordsInString = sanitizedString.trim().split(' ')
            //Ahora cada string contiene un array de palabras

            const refinedString = wordsInString.map(( word, i ) => {
            
                if (( i === 0) || (!articulos.has(word))) {

                    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
                    return capitalizedWord
                }
                
                return word //capitalizadas selectivamente
            })

            const enhancedString = refinedString.join(' ') //Palabras vueltas a unir
            
            const evenBetterString = enhancedString.charAt(0).toUpperCase() + enhancedString.slice(1)
            //Cada string ahora empieza con mayúscula.

            const anEvenBetterString = evenBetterString
            .replace(/[-']\s*(\w)/g, (match, p1) => {
              return match[0] + p1.toUpperCase(); // Capitaliza la letra después de un guión o apóstrofe
            });


        return anEvenBetterString
        
    }),


    body('edad')

    .customSanitizer(value => {
        
    
        const inputString = value
                
            const numbersOnly = inputString
            .replace(/[^0-9]/g, '') //Elimina todo excepto números 0-9

        return numbersOnly
        
    }),



    body('planetaOrigen')

    .customSanitizer(value => {
        
        const articulos = new Set([ 'de', 'del', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'ante', 'bajo', 'con', 'contra', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sobre', 'tras', 'y', 'o', 'ni', 'que', 'pero', 'aunque', 'porque', 'pues', 'como', 'cuando', 'donde', 'mientras', 'aunque' ]);
    
        const string = value.toLowerCase()
                
            const sanitizedString = string
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
            .replace(/-+/g, '-') //Elimina guiones medios repetidos
            .replace(/'+/g, "'") //Elimina apóstrofes repetidos
            .replace(/\s+/g, ' ') //Elimina espacios repetidos

            const wordsInString = sanitizedString.trim().split(' ')
            //Ahora cada string contiene un array de palabras

            const refinedString = wordsInString.map(( word, i ) => {
            
                if (( i === 0) || (!articulos.has(word))) {

                    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
                    return capitalizedWord
                }
                
                return word //capitalizadas selectivamente
            })

            const enhancedString = refinedString.join(' ') //Palabras vueltas a unir
            
            const evenBetterString = enhancedString.charAt(0).toUpperCase() + enhancedString.slice(1)
            //Cada string ahora empieza con mayúscula.

            const anEvenBetterString = evenBetterString
            .replace(/[-']\s*(\w)/g, (match, p1) => {
              return match[0] + p1.toUpperCase(); // Capitaliza la letra después de un guión o apóstrofe
            });


        return anEvenBetterString
        
    }),



    body('debilidad')

    .customSanitizer(value => {
        
        const articulos = new Set([ 'de', 'del', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'ante', 'bajo', 'con', 'contra', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sobre', 'tras', 'y', 'o', 'ni', 'que', 'pero', 'aunque', 'porque', 'pues', 'como', 'cuando', 'donde', 'mientras', 'aunque' ]);
    
        const string = value.toLowerCase()
                
            const sanitizedString = string
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
            .replace(/-+/g, '-') //Elimina guiones medios repetidos
            .replace(/'+/g, "'") //Elimina apóstrofes repetidos
            .replace(/\s+/g, ' ') //Elimina espacios repetidos

            const wordsInString = sanitizedString.trim().split(' ')
            //Ahora cada string contiene un array de palabras

            const refinedString = wordsInString.map(( word, i ) => {
            
                if (( i === 0) || (!articulos.has(word))) {

                    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
                    return capitalizedWord
                }
                
                return word //capitalizadas selectivamente
            })

            const enhancedString = refinedString.join(' ') //Palabras vueltas a unir
            
            const evenBetterString = enhancedString.charAt(0).toUpperCase() + enhancedString.slice(1)
            //Cada string ahora empieza con mayúscula.

            const anEvenBetterString = evenBetterString
            .replace(/[-']\s*(\w)/g, (match, p1) => {
              return match[0] + p1.toUpperCase(); // Capitaliza la letra después de un guión o apóstrofe
            });


        return anEvenBetterString
        
    }),


body('poderes')

.customSanitizer(value => {
    
    const articulos = new Set([ 'de', 'del', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'ante', 'bajo', 'con', 'contra', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sobre', 'tras', 'y', 'o', 'ni', 'que', 'pero', 'aunque', 'porque', 'pues', 'como', 'cuando', 'donde', 'mientras', 'aunque' ]);

    const arrayOfStrings = value.toLowerCase().split(',')
    //Obtenemos un array de strings
    

        const sanitizedArrayOfStrings = arrayOfStrings.map(( string )=>{
            
            const sanitizedString = string
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
            .replace(/-+/g, '-') //Elimina guiones medios repetidos
            .replace(/'+/g, "'") //Elimina apóstrofes repetidos
            .replace(/\s+/g, ' ') //Elimina espacios repetidos

            const wordsInString = sanitizedString.trim().split(' ')
            //Ahora cada string contiene un array de palabras

            const refinedString = wordsInString.map(( word, i ) => {
            
                if (( i === 0) || (!articulos.has(word))) {

                    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
                    return capitalizedWord
                }
                
                return word //capitalizadas selectivamente
            })

            const enhancedString = refinedString.join(' ') //Palabras vueltas a unir
            
            const evenBetterString = enhancedString.charAt(0).toUpperCase() + enhancedString.slice(1)
            //Cada string ahora empieza con mayúscula.

            const anEvenBetterString = evenBetterString
            .replace(/[-']\s*(\w)/g, (match, p1) => {
              return match[0] + p1.toUpperCase(); // Capitaliza la letra después de un guión o apóstrofe
            });


            return anEvenBetterString
        })

    return sanitizedArrayOfStrings
}),

body('aliados')

.customSanitizer(value => {
    
    const articulos = new Set([ 'de', 'del', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'ante', 'bajo', 'con', 'contra', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sobre', 'tras', 'y', 'o', 'ni', 'que', 'pero', 'aunque', 'porque', 'pues', 'como', 'cuando', 'donde', 'mientras', 'aunque' ]);

    const arrayOfStrings = value.toLowerCase().split(',')
    //Obtenemos un array de strings
    

        const sanitizedArrayOfStrings = arrayOfStrings.map(( string )=>{
            
            const sanitizedString = string
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
            .replace(/-+/g, '-') //Elimina guiones medios repetidos
            .replace(/'+/g, "'") //Elimina apóstrofes repetidos
            .replace(/\s+/g, ' ') //Elimina espacios repetidos

            const wordsInString = sanitizedString.trim().split(' ')
            //Ahora cada string contiene un array de palabras

            const refinedString = wordsInString.map(( word, i ) => {
            
                if (( i === 0) || (!articulos.has(word))) {

                    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
                    return capitalizedWord
                }
                
                return word //capitalizadas selectivamente
            })

            const enhancedString = refinedString.join(' ') //Palabras vueltas a unir
            
            const evenBetterString = enhancedString.charAt(0).toUpperCase() + enhancedString.slice(1)
            //Cada string ahora empieza con mayúscula.

            const anEvenBetterString = evenBetterString
            .replace(/[-']\s*(\w)/g, (match, p1) => {
              return match[0] + p1.toUpperCase(); // Capitaliza la letra después de un guión o apóstrofe
            });


            return anEvenBetterString
        })

    return sanitizedArrayOfStrings
}),

body('enemigos')

.customSanitizer(value => {
    
    const articulos = new Set([ 'de', 'del', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'ante', 'bajo', 'con', 'contra', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sobre', 'tras', 'y', 'o', 'ni', 'que', 'pero', 'aunque', 'porque', 'pues', 'como', 'cuando', 'donde', 'mientras', 'aunque' ]);

    const arrayOfStrings = value.toLowerCase().split(',')
    //Obtenemos un array de strings
    

        const sanitizedArrayOfStrings = arrayOfStrings.map(( string )=>{
            
            const sanitizedString = string
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
            .replace(/-+/g, '-') //Elimina guiones medios repetidos
            .replace(/'+/g, "'") //Elimina apóstrofes repetidos
            .replace(/\s+/g, ' ') //Elimina espacios repetidos

            const wordsInString = sanitizedString.trim().split(' ')
            //Ahora cada string contiene un array de palabras

            const refinedString = wordsInString.map(( word, i ) => {
            
                if (( i === 0) || (!articulos.has(word))) {

                    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
                    return capitalizedWord
                }
                
                return word //capitalizadas selectivamente
            })

            const enhancedString = refinedString.join(' ') //Palabras vueltas a unir
            
            const evenBetterString = enhancedString.charAt(0).toUpperCase() + enhancedString.slice(1)
            //Cada string ahora empieza con mayúscula.

            const anEvenBetterString = evenBetterString
            .replace(/[-']\s*(\w)/g, (match, p1) => {
              return match[0] + p1.toUpperCase(); // Capitaliza la letra después de un guión o apóstrofe
            });


            return anEvenBetterString
        })

    return sanitizedArrayOfStrings
}),

body('creador')

.customSanitizer(value => {
    
    const articulos = new Set([ 'de', 'del', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'ante', 'bajo', 'con', 'contra', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sobre', 'tras', 'y', 'o', 'ni', 'que', 'pero', 'aunque', 'porque', 'pues', 'como', 'cuando', 'donde', 'mientras', 'aunque' ]);

    const string = value.toLowerCase()
            
        const sanitizedString = string
        .replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
        .replace(/-+/g, '-') //Elimina guiones medios repetidos
        .replace(/'+/g, "'") //Elimina apóstrofes repetidos
        .replace(/\s+/g, ' ') //Elimina espacios repetidos

        const wordsInString = sanitizedString.trim().split(' ')
        //Ahora cada string contiene un array de palabras

        const refinedString = wordsInString.map(( word, i ) => {
        
            if (( i === 0) || (!articulos.has(word))) {

                const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
                return capitalizedWord
            }
            
            return word //capitalizadas selectivamente
        })

        const enhancedString = refinedString.join(' ') //Palabras vueltas a unir
        
        const evenBetterString = enhancedString.charAt(0).toUpperCase() + enhancedString.slice(1)
        //Cada string ahora empieza con mayúscula.

        const anEvenBetterString = evenBetterString
        .replace(/[-']\s*(\w)/g, (match, p1) => {
          return match[0] + p1.toUpperCase(); // Capitaliza la letra después de un guión o apóstrofe
        });


        return anEvenBetterString
    
    }),

];


export const lowLevelBodyValidations = () => [

    body('nombreSuperHeroe')

        .exists().withMessage('El nombre de héroe es requerido.')
            .bail()

        .trim()

        .notEmpty().withMessage('El nombre de héroe no puede expresarse como una cadena vacía de texto.')
            .bail()

        .isLength({ min: 3, max: 60 }).withMessage('El nombre de héroe admite entre 3 y 60 caractéres.'),
    
    
    body('nombreReal')

        .exists().withMessage('El nombre real es requerido. ("Desconocido" si no es pertinente)')
            .bail()

        .trim()

        .notEmpty().withMessage('El nombre real no puede expresarse como una cadena vacía de texto.')
            .bail()

        .isLength({ min: 3, max: 60 }).withMessage('El nombre real admite entre 3 y 60 caractéres.'),


    body('edad')

        .exists().withMessage('La edad del héroe es requerida.')
            .bail()

        .trim()

        .notEmpty().withMessage('La edad no puede expresarse como un valor vacío')
            .bail()

        .isInt({ min: 0 }).withMessage('La edad sólo admite números enteros de valor positivo'),


    body('planetaOrigen')

        .exists().withMessage('El planeta de Orígen es requerido. ("Desconocido", si no es pertinente)')
            .bail()

        .trim()

        .notEmpty().withMessage('El planeta de orígen no puede expresarse como una cadena vacía de texto.')
            .bail()

        .isLength({ min: 3, max: 60 }).withMessage('El planeta de Orígen admite entre 3 y 60 caractéres.'),


    body('debilidad')

        .exists().withMessage('La debilidad del héroe es requerida. ("Desconocida" si no es pertinente)')
            .bail()

        .trim()

        .notEmpty().withMessage('La debilidad del superhéroe no puede expresarse como una cadena vacía de texto.')
            .bail()

        .isLength({ min: 3, max: 60 }).withMessage('La debilidad debe describirse con un mínimo de 3 y hasta 60 caractéres.'),


    body('poderes')

        .exists().withMessage('El poder es requerido.')
            .bail()

        .isArray().withMessage('Los poderes deben ser un vector.')
            .bail()

        .isLength({ min: 1 }).withMessage('El héroe debe tener al menos un poder.'),


    body('poderes.*')

        .trim()

        .notEmpty().withMessage('Los poderes no pueden expresarse como cadenas vacías de texto.')
            .bail()

        .isString().withMessage('Los poderes deben expresarse como cadenas de texto')
            .bail()

        .isLength({ min: 3, max: 60 }).withMessage('Cada poder admite entre 3 y 60 caractéres.'),


    body('aliados')

        .isArray().withMessage('Los aliados deben ser un vector'),


    body('aliados.*')

        .optional({ checkFalsy: true })

        .trim()

        .notEmpty().withMessage('Los aliados no pueden expresarse como cadenas vacías de texto.')
            .bail()

        .isString().withMessage('Los aliados deben expresarse como cadenas de texto')
            .bail()

        .isLength({ min: 3, max: 60 }).withMessage('Cada nombre de aliado admite entre 3 y 60 caractéres.'),


    body('enemigos')

        .isArray().withMessage('Los enemigos deben ser un vector'),


    body('enemigos.*')

        .optional({ checkFalsy: true })

        .trim()

        .notEmpty().withMessage('Los enemigos no pueden expresarse como cadenas vacías de texto.')
            .bail()

        .isString().withMessage('Los enemigos deben expresarse como cadenas de texto')
            .bail()

        .isLength({ min: 3, max: 60 }).withMessage('Cada nombre de enemigo admite entre 3 y 60 caractéres.'),


    body('creador')

        .optional({ checkFalsy: true })
        
        .trim()

        .notEmpty().withMessage('El nombre del creador no puede expresarse como una cadena vacía de texto.')
            .bail()

        .isLength({ min: 3, max: 60 }).withMessage('El nombre del creador admite entre 3 y 60 caractéres.'),
    
]