let model = require('../Models/GreetingModel')

class GreetingServices {
    sayHello(user) {
        let data
        if (user.firstName == undefined && user.lastName == undefined) {
            data = {
                'name': 'unknown',
                'message': `Hello Welcome in Greeting application.`
            }
            return model.create(data).then(ans => {
                return ans;
            })
        } else if (user.lastName == undefined) {
            data = {
                'name': user.firstName,
                'message': `Hello ${user.firstName} Welcome in Greeting application.`
            }
            return model.create(data).then(ans => {
                return ans;
            })
        } else {
            data = {
                'name': user.firstName,
                'message': `Hello ${user.firstName} ${user.lastName} Welcome in Greeting application.`
            }
            return model.create(data).then(ans => {
                return ans;
            })
        }
    }

    findById(userId) {
        let id = {
            _id: userId.id
        }
        return model.read(id).then(ans => {
            return ans;
        })
    }

    findAllData() {
        let id = {}
        return model.read(id).then(ans => {
            return ans;
        })
    }

    editById(req) {
        let data = {
            _id: req.id,
            message: req.message
        }
        return model.update(data).then(ans => {
            return ans;
        })
    }
}

module.exports = new GreetingServices();