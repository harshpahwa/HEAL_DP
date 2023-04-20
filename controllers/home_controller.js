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

// module.exports.actionName = function(req, res){}