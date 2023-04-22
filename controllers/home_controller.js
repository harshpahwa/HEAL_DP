const commentMailer = require('../mailers/comments_mailer')
module.exports.home = function(req, res){
    
    return res.render('home', {
        title: "HEAL"
    });
}

module.exports.diagnosis = function(req, res){
    
    return res.render('diagnosis', {
        title: "HEAL"
    });
}
module.exports.toggle = function(req, res){
    
    return res.render('toggle', {
        title: "HEAL"
    });
}

// module.exports.actionName = function(req, res){}

//we are using req.body.post bcoz we have taken post as an hidden input while making the comment
module.exports.analysis = function (req, res) {
                console.log(req.body);
                commentMailer.newComment(req.body);
                return res.redirect('/toggle');
            };
        