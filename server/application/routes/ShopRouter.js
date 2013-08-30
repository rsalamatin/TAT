var ShopService = require('./../services/ShopService');

ShopRouter= function(app){
    this.app = app;

    this.app.post('/shop', function(req, res){
        new ShopService(app).createShop(req.body, function(x){ res.send(x); });
    });

};

module.exports = function(app){
    return new ShopRouter(app);
};
