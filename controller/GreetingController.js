let services = require('../services/GreetingServices')

class GreetingController {
    sayHello(req, res, next) {
        let data = {
            firstName: req.query.firstName,
            lastName: req.query.lastName
        }
        services.sayHello(data).then(data => {
            res.send(data);
        }).catch((err) => {
            res.send(err)
        })
    }

    findGreetingMessage(req, res) {
        let data = {
            id: req.params.id
        }
        services.findById(data).then(data => {
            res.send(data);
        }).catch((err) => {
            res.send(err)
        })
    }

    findAllGreetingMessage(req, res) {
        services.findAllData().then(data => {
            res.send(data);
        }).catch((err) => {
            res.send(err)
        })
    }

    editGreetingMessage(req, res) {
        let data = {
            id: req.params.id,
            message: req.body.message
        }
        services.editById(data).then(data => {
            res.send(data);
        }).catch((err) => {
            res.send(err)
        })
    }
}

module.exports = new GreetingController();
