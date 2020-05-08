const express = require('express')

const familyController = require('./controllers/familyController')

const routes = express.Router()

routes.get('/read', familyController.index)
routes.post('/create', familyController.create)
routes.put('/update', familyController.update)
routes.delete('/delete', familyController.delete)


module.exports = routes