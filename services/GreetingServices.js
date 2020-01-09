class GreetingServices {
    sayHello(req, res, next) {
        return "Welcome in Greeting application from services"
    }
}

module.exports = new GreetingServices();