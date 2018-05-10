var ejs 		= require("ejs");



exports.NGOProfile = function(req, res) {
    console.log("********************************here ********************************");
    ejs.renderFile('./views/NGOProfile.ejs', function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
            console.log("successfully rendered the NGO profile module");
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
};
exports.NGOCoursesInArea = function(req, res) {
    console.log("********************************here ********************************");
    ejs.renderFile('./views/NGOCoursesInArea.ejs', function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
            console.log("successfully rendered the NGO course module");
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
};
exports.NGOAttendeesInArea = function(req, res) {
    console.log("********************************here ********************************");
    ejs.renderFile('./views/NGOAttendeesInArea.ejs', function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
            console.log("successfully rendered the NGO  attendee module");
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
};








