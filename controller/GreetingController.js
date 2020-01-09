class GreetingController {
    sayHello(req, res, next) {
        res.send("Welcome in Greeting application");
    }
}

module.exports = new GreetingController();
