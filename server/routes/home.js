const express =require('express')
const router = express.Router()
const {homeget,shirtPost,pantPost} = require('../controllers/allRoutesHandler.js')
router.get('/',homeget)
router.post('/shirtapi',shirtPost)
router.post('/pantapi', pantPost)

module.exports = router;