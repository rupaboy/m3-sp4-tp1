import { validationResult } from "express-validator";
import { site } from "../views/renderElement.mjs";
//import { site } from "../views/renderElement.mjs";

export const validationHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        
        const errorMessages = errors.array().map(error => `${error.param}: ${error.msg}`).join(', ');

        site.errorTag = `Error de validación de datos: (${errorMessages})`
        const activeSite = { ...site, isActive: 'error400'}
        return res.render('400', { site: activeSite })
    }
    next()
};
