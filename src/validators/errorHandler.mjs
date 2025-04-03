import { validationResult } from "express-validator";
//import { site } from "../views/renderElement.mjs";

export const validationHandler = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        /*
        const newTag = errors.array().map(error => ({
            message: error.msg
        }))
        const errorTag = { ...site, mainTag: newTag }
        site.mainTag = errorTag
        */
        return res.status(400).json( {
            status: 'error',
            message: 'validation failed',
            errors: errors.array().map(error => ({
                field: error.param,
                message: error.msg
            }))
        });
    }
    next()
};
