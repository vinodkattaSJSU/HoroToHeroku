var ejs 		= require("ejs");




exports.land = function(req, res) {
	console.log("********************************here ********************************");
    ejs.renderFile('./views/Profile.ejs', function(err, result) {
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

exports.HostCourseStatus = function(req,res)
{
    //console.log("********************************here ********************************");
    ejs.renderFile('./views/HostCourseStatus.ejs', function(err, result) {
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
}











