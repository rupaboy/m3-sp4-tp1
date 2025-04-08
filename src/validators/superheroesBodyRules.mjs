import {body} from 'express-validator';

export const lowLevelBodySanitizer = () => [

body('poderes')
.escape()
.customSanitizer(value => {
    const articulos = new Set([ 'de', 'del', 'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'al', 'a', 'ante', 'bajo', 'con', 'contra', 'desde', 'en', 'entre', 'hacia', 'hasta', 'para', 'por', 'según', 'sobre', 'tras', 'y', 'o', 'ni', 'que', 'pero', 'aunque', 'porque', 'pues', 'como', 'cuando', 'donde', 'mientras', 'aunque' ]);


})
];

//.replace(/[-'](.)/g, (match, p1) => match[0] + p1.toUpperCase())  // Pone en mayúscula la letra después del guion

export const lowLevelBodyValidations = () => [


    
]