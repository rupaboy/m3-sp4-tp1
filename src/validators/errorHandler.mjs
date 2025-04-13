import { validationResult } from "express-validator";
import { site } from "../views/renderElement.mjs";
//import { site } from "../views/renderElement.mjs";

export const validationHandler = (req, res, next) => {
    const errors = validationResult(req);
    //console.log('Validation handler: Log of errors: ', errors)
    if (!errors.isEmpty()) {
        
        const errorMessages = errors.array().map(error => `${error.msg} (${errors.path})`).join(', ');


        site.errorTag = `Error de validación de datos: (${errorMessages})`
        const activeSite = { ...site, isActive: 'error400'}
        return res.render('400', { site: activeSite })
    }
    next()
};
