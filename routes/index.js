var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller')

router.post('/',user.insert)
router.get('/',user.get_data)
router.post('/update/:id',user.update_data)
router.get('/delete/:id',user.delete_data)
router.get('/get_single/:id',user.get_single)
router.post('/get',user.get_column)

module.exports = router;