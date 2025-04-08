import {body} from 'express-validator';

export const midLevelBodySanitizer = () => [

    
    body('nombreSuperHeroe')

    .customSanitizer(value => {
        
        const articulos = new Set([ 'de', 'del', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'ante', 'bajo', 'con', 'contra', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sobre', 'tras', 'y', 'o', 'ni', 'que', 'pero', 'aunque', 'porque', 'pues', 'como', 'cuando', 'donde', 'mientras', 'aunque' ]);
    
        const string = value.toLowerCase()
                
            const sanitizedString = string
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
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
            .replace(/^[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+|[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+$/g, '') // Elimina caracteres raros al principio o final
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
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
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
            .replace(/^[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+|[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+$/g, '') // Elimina caracteres raros al principio o final
            .replace(/[-']\s*(\w)/g, (match, p1) => {
              return match[0] + p1.toUpperCase(); // Capitaliza la letra después de un guión o apóstrofe
            });


            return anEvenBetterString
        
    }),


    body('edad')

    .customSanitizer(value => {
        
    
        const number = value.toLowerCase()
                
            const numbersOnly = number
            .replace(/[^0-9]/g, '') //Elimina todo excepto números 0-9

            return numbersOnly
        
    }),



    body('planetaOrigen')

    .customSanitizer(value => {
        
        const articulos = new Set([ 'de', 'del', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'ante', 'bajo', 'con', 'contra', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sobre', 'tras', 'y', 'o', 'ni', 'que', 'pero', 'aunque', 'porque', 'pues', 'como', 'cuando', 'donde', 'mientras', 'aunque' ]);
    
        const string = value.toLowerCase()
                
            const sanitizedString = string
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
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
            .replace(/^[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+|[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+$/g, '') // Elimina caracteres raros al principio o final
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
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚ0-9'\-\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
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
            .replace(/^[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+|[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+$/g, '') // Elimina caracteres raros al principio o final
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
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚ0-9'\-,\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
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
            .replace(/^[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+|[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+$/g, '') // Elimina caracteres raros al principio o final
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
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚ0-9'\-,\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
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
            .replace(/^[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+|[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+$/g, '') // Elimina caracteres raros al principio o final
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
            .replace(/[^a-zA-ZáéíóúÁÉÍÓÚ0-9'\-,\s]/g, '') //Sólo quedan A-Z 0-9, apóstrofe ('), coma (,), guion medio (-) y espacios
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
            .replace(/^[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+|[^a-zA-ZáéíóúÁÉÍÓÚ0-9]+$/g, '') // Elimina caracteres raros al principio o final
            .replace(/[-']\s*(\w)/g, (match, p1) => {
              return match[0] + p1.toUpperCase(); // Capitaliza la letra después de un guión o apóstrofe
            });


            return anEvenBetterString
        })

    return sanitizedArrayOfStrings
})

];


export const lowLevelBodyValidations = () => [


    
]