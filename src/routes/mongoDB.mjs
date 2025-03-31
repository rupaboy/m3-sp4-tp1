import express from 'express'
import { siteNav, webModule, collectionsMenu } from '../views/renderElement.mjs';
import superhero from '../models/hero.mjs'

const app = express;
const mongoDBRouter = app.Router()

mongoDBRouter.get('/', (req, res) => {
    res.render('mongodb', {currentNav: siteNav[2], webModule, collectionsMenu})
})

//Collection Heroes
const collectionHeroes = app.Router()

mongoDBRouter.get('/heroes', async (req, res) => {
    try {
        
        const arrayHeroes = await superhero.find()
        res.render('heroes', { currentNav: siteNav[2], collectionsMenu, webModule, arrayHeroes })

    } catch (error) {
        console.log(error);
    }
})


export { mongoDBRouter };
export { collectionHeroes };