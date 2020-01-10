let services = require('../services/GreetingServices')

class GreetingController {
    sayHello(req, res, next) {
        let data = {
            firstName: req.query.firstName,
            lastName: req.query.lastName
        }
        let result = services.sayHello(data);
        res.send(result);
    }
}

module.exports = new GreetingController();
