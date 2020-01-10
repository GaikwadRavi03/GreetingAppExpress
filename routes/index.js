var express = require('express');
var router = express.Router();
let controller = require('../controller/GreetingController')

/* GET home page. */
router.get('/helloWorldServices', controller.sayHello);
module.exports = router;
