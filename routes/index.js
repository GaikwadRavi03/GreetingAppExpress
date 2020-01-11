var express = require('express');
var router = express.Router();
let controller = require('../controller/GreetingController')

/* GET home page. */
router.post('/greeting', controller.sayHello);
router.get('/greeting/getById/:id', controller.findGreetingMessage);
router.get('/greeting/getAll', controller.findAllGreetingMessage);
module.exports = router;

