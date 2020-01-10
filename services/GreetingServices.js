class GreetingServices {
    sayHello(require) {
        if (require.firstName == undefined && require.lastName == undefined) {
            return `Hello Welcome in Greeting application.`
        } else if (require.lastName == undefined) {
            return `Hello ${require.firstName} Welcome in Greeting application.`
        } else {
            return `Hello ${require.firstName} ${require.lastName} Welcome in Greeting application.`
        }
    }
}

module.exports = new GreetingServices();