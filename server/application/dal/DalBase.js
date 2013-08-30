DalBase = function() {};

DalBase.prototype.getEntityByParams = function(params, callback){
    var self = this;
    self.db.collection(self.collectionName)
        .findOne(params, function (err, doc) {
            if(err) self.logger.log(err);
            else callback(doc);
        });
};

DalBase.prototype.getEntityListByParams = function(params, callback){
    var self = this;
    self.db.collection(self.collectionName)
        .find(params)
        .toArray(function (err, docs) {
            if(err) self.logger.log(err);
            else callback(docs);
        });
};

DalBase.prototype.insertEntity = function(params, callback){
    var self = this;
    self.db.collection(self.collectionName)
        .insert(params, function(err, result) {
            if(err) self.logger.log(err);
            else callback(result);
        });
};

DalBase.prototype.updateEntity = function(params, callback){
};

module.exports = DalBase;
