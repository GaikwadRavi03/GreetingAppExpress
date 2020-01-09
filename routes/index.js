var express = require('express');
var router = express.Router();
let controller = require('../controller/GreetingController')

/* GET home page. */
router.get('/helloworld', controller.sayHello);

module.exports = router;
