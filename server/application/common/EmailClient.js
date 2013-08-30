var nodeMailer = require('nodemailer');

EmailClient = function(app){
    this.logger = app.logger;
    this.transport = 'SMTP';
    this.host = "smtp.gmail.com";
    this.user = 'salamatinr@gmail.com';
    this.pass = '1111';
    this.port = 465;

    this.from = "foo@blurdybloop.com"; // sender address
    this.subject = "Hello"; // Subject line
    this.text = "Hello world"; // plaintext body
};

EmailClient.prototype.sentEmail = function(to, pattern){

    var transport = nodeMailer.createTransport(this.transport, {
        host: this.host, // hostname
        secureConnection: true, // use SSL
        port: this.port, // port for secure SMTP
        auth: {
            user: this.user,
            pass: this.pass
        }
    });

    var mailOptions = {
        from: this.from,
        to: to,
        subject: this.subject,
        text: this.text
    };

    // send mail with defined transport object
    var self = this;
    transport.sendMail(mailOptions, function(err, response){
        if(err) self.logger.log(err);
    });
};


module.exports = function(app){
    return new EmailClient(app);
};