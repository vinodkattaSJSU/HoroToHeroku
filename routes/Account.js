var ejs 		= require("ejs");

exports.land = function(req, res) {

    ejs.renderFile('./views/Account.ejs', function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
            console.log("successfully rendered the courseAdd module.");
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
};

exports.sessionland = function(req, res) {

    ejs.renderFile('./views/sessionAdd.ejs', function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
            console.log("successfully rendered the sessionAdd module.");
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
};





