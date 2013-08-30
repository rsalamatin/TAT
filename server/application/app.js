var Express = require('express');
var MongoClient = require('mongodb').MongoClient;
var UserRouter = require('./routes/UserRouter');
var ShopRouter = require('./routes/ShopRouter');
var Logger = require('./common/Logger');
var EmailClient = require('./common/EmailClient');

var app = Express();
app.use(Express.bodyParser());

//logger
app.logger = new Logger();

//email client
app.emailClient = new EmailClient(app);

// routers
new ShopRouter(app);
new UserRouter(app);

// database
var Server = require('mongodb').Server;
var dbClient =  new MongoClient(new Server("127.0.0.1", 27017, {}), {safe: true});

//open connection (one for the application)
dbClient.open(function(err, dbClient){ if(err) app.logger.log(err); });
app.db = dbClient.db('dba');


// server start
var port = 3000;
app.listen(port, function () {
    console.log('Listening on port ', port)
});