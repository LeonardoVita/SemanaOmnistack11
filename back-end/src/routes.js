const express = require('express')

const OngController = require('./controllers/ongController')
const IncidentController = require('./controllers/incidentController')
const ProfileController = require('./controllers/profileController')
const SessionsController = require('./controllers/sessionsController')


const routes = express.Router()

//LOGIN
routes.post('/sessions', SessionsController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

//all incidents by ong id
routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes