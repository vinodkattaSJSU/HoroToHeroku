/**
 * Module dependencies.
 **/

var express = require('express')
    , routes = require('./routes')
    , http = require('http')
    , path = require('path')
    , session = require('client-sessions')
   


var index = require('./routes/index');
var attendee = require('./routes/attendeeProfile');
var home = require('./routes/home');
var gallery = require('./routes/gallery');
var course =  require('./routes/caurse');
var app = express();

//configure the sessions with our application
app.use(session({

    cookieName: 'session',
    secret: 'cmpe273_test_string',
    duration: 30 * 60 * 1000,    //setting the time for active session
    activeDuration: 5 * 60 * 1000  })); // setting time for the session to be active when the window is open // 5 minutes set currently





// all environments
app.set('port', process.env.PORT || 5000);

//__dirname is the name of the directory that the currently executing script resides in.
app.set('views', __dirname + '/views');

//Setting View Engine
app.set('view engine', 'ejs');

//add middleware
//app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(express.favicon());


//app.use(express.logger('dev'));

//parse json
app.use(express.bodyParser());

//app.use(express.methodOverride());

//sets router folder
app.use(app.router);

//To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
//http://localhost:3000/stylesheets/style.css
app.use(express.static(path.join(__dirname, 'public')));

// development only // default error handler
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
//front-end

app.get('/Index', index.index);
app.get('/attendeeProfile',attendee.land); // DONE
app.get('/attendeeCourseStatus',attendee.attendeeCourseStatus);
app.get('/', home.redirectToHome);
app.get('/Gallery',gallery.redirectToGallery);
app.get('/course',course.redirectToCourse);

//gourang
app.get('/NGOProfile',NGOProfile.NGOProfile); //DO// admin
app.get('/NGOCoursesInArea',NGOProfile.NGOCoursesInArea); //admin
app.get('/NGOAttendeesInArea',NGOProfile.NGOAttendeesInArea); //admin
app.get('/Profile',profile.land); //DONE
app.get('/HostCourseStatus', profile.HostCourseStatus);

//vinod
app.get('/contact',contact.redirectToContact);
app.get('/Account',courseadd.land);
app.get('/sessionland',courseadd.sessionland);
app.get('/EditProfile',editprofile.land);
app.get('/courseDetail',courseDetail.redirectToCoursedetail);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
