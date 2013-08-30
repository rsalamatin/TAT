var BaseDal = require('./DalBase');

CommonDal = function(app, collectionName) {
    this.db = app.db;
    this.collectionName = collectionName;
};

CommonDal.prototype = new BaseDal();

//CommonDal.prototype.getEntityByParams = function(params, callback){
//    var self = this;
//    self.db.collection(self.collectionName)
//        .findOne(params, function (err, doc) {
//            if(err) callback(err);
//            else callback(doc);
//        });
//};
//
//CommonDal.prototype.getEntityListByParams = function(params, callback){
//    var self = this;
//    self.db.collection(self.collectionName)
//        .find()
//        .toArray(function (err, docs) {
//            if(err) callback(err);
//            else callback(docs);
//        });
//};
//
//CommonDal.prototype.insertEntity = function(params, callback){
//    var self = this;
//    self.db.collection(self.collectionName)
//        .insert(params, function(err, result) {
//            if(err) callback(err);
//            else callback(result);
//        });
//};
//
//CommonDal.prototype.updateEntity = function(params, callback){
//    var self = this;
//    self.db.collection(self.collectionName)
//        .insert(params, function(err, result) {
//            if(err) callback(err);
//            else callback(result);
//        });
//};


module.exports = function(app, collectionName){
    return new CommonDal(app, collectionName);
};