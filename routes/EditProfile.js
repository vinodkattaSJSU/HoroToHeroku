var ejs 		= require("ejs");

exports.land = function(req, res) {

    ejs.renderFile('./views/EditProfile.ejs', function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
            console.log("successfully rendered the signin module");
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
};


