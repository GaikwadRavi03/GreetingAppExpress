var express = require('express');
var router = express.Router();
let controller = require('../controller/GreetingController')

/* GET home page. */
router.get('/greeting', controller.sayHello);
module.exports = router;
