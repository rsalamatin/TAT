var BaseDal = require('./DalBase'),
Crypto = require('./../common/CryptoAPI');


UserDal = function(app, collectionName) {
    this.db = app.db;
    this.logger = app.logger;
    this.collectionName = collectionName;
    this.cryptoAPI = new Crypto();
};

UserDal.prototype = new BaseDal();

UserDal.prototype.createUser = function(params, callback){
    var self = this;
    var salt = self.cryptoAPI.getSalt();

    var shopAdminToStore = {
        email: params.email,
        role: params.role,
        encryptedPassword : self.cryptoAPI.getMD5Hash(params.password, salt),
        salt: salt
    };

    self.db.collection(self.collectionName)
        .insert(shopAdminToStore, function(err, result) {
            if(err) self.logger.log(err);
            else callback(result[0]);
        });
};

UserDal.prototype.loginUser = function(params, callback){
    var self = this;

    self.db.collection(self.collectionName).find({email:params.email}).toArray(function(err, users){
       if(err) self.logger.log(err);
       for(var i = 0; i < users.length; i++){
           var user = users[i];
           if(user.encryptedPassword === self.cryptoAPI.getMD5Hash(params.password, user.salt)){
                callback(user.role);
           }
       }
       callback('user not found');
    });
};


module.exports = function(app, collectionName){
    return new UserDal(app, collectionName);
};