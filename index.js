var path = require('path');
var org = require('./controllers/index');

module.exports = function(app, express) {
    var api = express();
    org = new org(app);

    api.use(express.static(path.join(__dirname, 'public')));
    api.set('views', path.join(__dirname, 'views'));
    api.set('view engine', 'jade');

    api.get('/',org.organise, function(req, res) {
        res.render('index', {
            routes: app._router.stack
        });
    });
    api.get('/routes',org.routes);
    app.use('/api', api);
}