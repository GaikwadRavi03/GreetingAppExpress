const mongoose = require('mongoose');
const schema = mongoose.Schema;
const Schema = new schema({
    name: String,
    message: String
}, {timestamps: true});

const greetingModel = mongoose.model('greeting', Schema);

class GreetingModel {
    create(req) {
        let response = {success: true}
        return new Promise((resolve, reject) => {
            let user = new greetingModel({
                name: req.name || "unknown",
                message: req.message
            })
            user.save().then(message => {
                response.success = true,
                    response.message = message.message
                resolve(response);
            }).catch((error) => {
                response.success = false,
                    response.message = error
                reject(response);
            })
        })
    }

    read(req) {
        let response = {success: true}
        return new Promise((resolve, reject) => {
            greetingModel.find({_id:req.id}).then(message => {
                response.success = true,
                    response.message = message
                resolve(response);
            }).catch((error) => {
                response.success = false,
                    response.message = error
                reject(response);
            })
        })
    }
}

module.exports = new GreetingModel();