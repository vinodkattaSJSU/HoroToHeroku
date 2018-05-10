var ejs 		= require("ejs");
exports.land = function(req, res) {
    console.log("********************************here ********************************");
    ejs.renderFile('./views/AttendeeProfile.ejs', function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
            console.log("successfully rendered the attendee profile module");
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
};

exports.attendeeCourseStatus = function(req, res) {
    console.log("********************************here ********************************");
    ejs.renderFile('./views/AttendeeCourseStatus.ejs', function(err, result) {
        // render on success
        if (!err) {
            res.end(result);
            console.log("successfully rendered the attendee profile module");
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
    });
};
