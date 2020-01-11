let services = require('../services/GreetingServices')

class GreetingController {
    sayHello(req, res, next) {
        let data = {
            firstName: req.query.firstName,
            lastName: req.query.lastName
        }
        services.sayHello(data).then(data => {
            res.send(data);
        }).catch((err)=>{
            res.send(err)
        })
    }

    findGreetingMessage(req, res){
        let data = {
            id : req.params.id
        }
        services.findById(data).then(data => {
            res.send(data);
        }).catch((err)=>{
            res.send(err)
        })
    }
}

module.exports = new GreetingController();
