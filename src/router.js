const express = require('express')
const userController = require('./controllers/UserController')

const router = express.Router()

router.get('/list', userController.List)
router.get('/getone', userController.GetOne)
router.post('/create', userController.Create)
router.post('/update', userController.Update)
router.post('/delete', userController.Delete)

module.exports = router
