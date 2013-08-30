crypto = require('crypto');

CryptoAPI = function(){};

CryptoAPI.prototype.getMD5Hash = function(valueToCrypt, salt){
    return crypto.createHash('md5').update(valueToCrypt + salt).digest('hex')
};

CryptoAPI.prototype.getSalt = function(){
    return Math.round((new Date().valueOf() * Math.random())) + '';
};

module.exports = function(){
    return new CryptoAPI();
};