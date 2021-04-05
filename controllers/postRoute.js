const postController = require('../controllers/postController')
const express = required('express')
const postRoute = express.Router()

postRoute.get('/', postController.getAll)
postRoute.get('/:id', postController.find)
postRoute.post('/', postController.create)
postRoute.put('/', postController.update)
postRoute.delete('/', postController.delete)

module.exports = postRoute
