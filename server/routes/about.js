const express =require('express')
const router = express.Router()
const {about} = require('../controllers/allRoutesHandler.js')
router.get('/',about)

module.exports = router;