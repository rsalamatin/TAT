var Dal = require('./../dal/CommonDal');
var UserDal = require('./../dal/UserDal');
var EmailClient = require('./../common/EmailClient');

ShopService = function(app) {
    this.app = app;
    this.shopDal = new Dal(app, 'shops');
    this.userDal = new UserDal(app, 'users');
};

ShopService.prototype.createShop = function(message, callback){
    var self = this;
    //request validation
//    if(!message.hasOwnProperty('shopName')
//        || !message.hasOwnProperty('address1')
//        || !message.hasOwnProperty('city')
//        || !message.hasOwnProperty('state')
//        || !message.hasOwnProperty('zip')
//        || !message.hasOwnProperty('phoneNumber')
//        || !message.hasOwnProperty('email')
//        || !message.hasOwnProperty('password')) {
//
//        return res.send('Error 400: Post syntax incorrect.');
//    }
    var userParams = {
        email: message.email,
        password:  message.password,
        role: message.role
    };

    var shopParams = {
        shopName: message.shopName,
        address1: message.address1,
        address2: (message.hasOwnProperty('address2') ? message.address2 : ''),
        address3: (message.hasOwnProperty('address3') ? message.address3 : ''),
        city: message.city,
        state: message.state,
        zip: message.zip,
        phoneNumber: message.phoneNumber,
        subscriptionPlan: (message.hasOwnProperty('subscriptionPlan') ? message.subscriptionPlan : ''),
        nameOnCard: (message.hasOwnProperty('nameOnCard') ? message.nameOnCard : ''),
        cardNumber: (message.hasOwnProperty('cardNumber') ? message.cardNumber : ''),
        expDate: (message.hasOwnProperty('expDate') ? message.expDate : ''),
        billingAddress: (message.hasOwnProperty('billingAddress') ? message.billingAddress : ''),
        apartmentSuite: (message.hasOwnProperty('apartmentSuite') ? message.apartmentSuite : ''),
        billingCity: (message.hasOwnProperty('billingCity') ? message.billingCity : ''),
        billingState: (message.hasOwnProperty('billingState') ? message.billingState : ''),
        billingZip: (message.hasOwnProperty('billingZip') ? message.billingZip : ''),
        userId: ''
    };

    //email existence validation
    self.userDal.getEntityByParams({email:userParams.email}, function(existingUser){
        if(existingUser) callback("please select other email");
        else{
            //user creation
            self.userDal.createUser(userParams, function(user){
                if(user)
                {
                    //shop attachment to user
                    shopParams.userId = user._id;
                    self.shopDal.insertEntity(shopParams, function(shopData){
                        callback(shopData);
                        //new EmailClient().sentEmail('salamatinr@gmail.com');
                    })
                }
            });
        }
    });






};


module.exports = function(app){
    return new ShopService(app);
};
