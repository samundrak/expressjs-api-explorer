module.exports = function(app) {

    this.organise = function(req, res, next) {

        return next();
    }

    this.routes = function(req, res, next) {
        var routes = [];
        app._router.stack.forEach(function(element, index) {
            if (element.hasOwnProperty('route')) {
                if (element.route && element.route.hasOwnProperty('path')) {
                    routes.push(app._router.stack[index]);
                }
            }
        });
        res.send(routes);
    }
}