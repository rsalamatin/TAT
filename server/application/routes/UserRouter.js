var UserService = require('./../services/UserService');

UserRouter = function(app){
    this.app = app;

    this.app.get('/users', function(req, res){
         new UserService(app).getUsers(req.body, function(x){ res.send(x); });
    });


    this.app.post('/login', function(req, res){
        new UserService(app).loginUser(req.body, function(x){ res.send(x); });
    });

};

module.exports = function(app){
    return new UserRouter(app);
};
