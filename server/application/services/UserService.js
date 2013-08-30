
var Dal = require('./../dal/UserDal');

UserService = function(app) {
    this.app = app;
    this.userDal = new Dal(app, 'users');
};

UserService.prototype.getUsers = function(params, callback){
    this.userDal.getEntityListByParams(params, callback);
};

UserService.prototype.loginUser = function(params, callback){
    var userParams = {
        email: params.email,
        password:  params.password
    };
    this.userDal.loginUser(userParams, callback);
};


module.exports = function(app){
    return new UserService(app);
};
