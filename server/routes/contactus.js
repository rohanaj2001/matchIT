const express =require('express')
const router = express.Router()
const {contactus} = require('../controllers/allRoutesHandler.js')
router.get('/',contactus)

module.exports = router;