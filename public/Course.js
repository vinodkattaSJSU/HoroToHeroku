var course = angular.module('course', ['ui.router']);
-course.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider.state('course', {
        url : '/course',
        views: {
            'header': {
                templateUrl : 'templates/profileHeader.html',
            },
            'content': {
                templateUrl : 'templates/Account.html',

            },
        }
    })
    //$urlRouterProvider.otherwise('/');
});



course.controller('CourseDetails', function($scope, $http,$state) {


    $scope.categories = "";
    var selectedCourse;
    $scope.sessionNotConnected = true;
    $scope.sessionActive = false;
    $http({
        method : "POST",
        url : 'ec2-50-112-219-13.us-west-2.compute.amazonaws.com:3000/getSessiondata',
    }).success(function(data) {

        if (data.username != undefined) {

            $scope.sessionUserName = data.username;
            $scope.sessionNotConnected = false;
            $scope.sessionActive = true;

        } else {
            $scope.sessionNotConnected = true;
            $scope.sessionActive = false;
        }

    });
    $scope.GetCourse = function()
    {
        $http({
            method: "POST",
            url: 'ec2-50-112-219-13.us-west-2.compute.amazonaws.com:3000/get_course_details',
        }).success(function (data) {
            if (data.statusCode === 200) {
                console.log("Success");

                /*for(var i = 0; i< data.Result.length; i++)
                {
                    $scope.categories += data.Result[i].category_name;
                }*/

                $scope.course_details = data.Result;


            } else {

                console.log("Failure");
            }

        });


    }

    $scope.getCourseDetails = function(vals)
    {
        console.log(vals);
        selectedCourse = vals;


        $http({
            method: "POST",
            url: 'ec2-54-245-178-137.us-west-2.compute.amazonaws.com:3000/get_course_page',
            data : {
                'vals' : vals
            }
        }).success(function (data) {
            if (data.statusCode === 200) {
                console.log("Success");

                /*for(var i = 0; i< data.Result.length; i++)
                 {
                 $scope.categories += data.Result[i].category_name;
                 }*/

                $scope.course_details = data.Result;
                window.location.assign("/courseDetail");

            } else {

                console.log("Failure");
            }

        });


    }


    $scope.courseDetailPage = function () {

        console.log($scope);

        $http({
            method: "POST",
            url: 'ec2-54-245-178-137.us-west-2.compute.amazonaws.com:3000/viewCoursePage',

        }).success(function (data) {
            if (data.statusCode === 200) {
                console.log("Success");

                /*for(var i = 0; i< data.Result.length; i++)
                 {
                 $scope.categories += data.Result[i].category_name;
                 }*/

                $scope.course_details = data.Result;
                $scope.course_id = data.Course.course_id;
                $scope.course_title = data.Course.course_name;
                $scope.description = data.Course.course_details;

                $scope.sessions = data.Sessions;

                $scope.isSubscribed = data.isSubscribed;
                //window.location.assign("/courseDetail");

            } else {

                console.log("Failure");
            }

        });
    }


    $scope.Subscribe = function ()
    {
        console.log("In SUBSCRIBE");
        console.log($scope.course_id);

        $http({
            method: "POST",
            url: 'ec2-54-245-178-137.us-west-2.compute.amazonaws.com:3000/subscribeSubject',
            data: {
                "course_id" : $scope.course_id,
                "course_title": $scope.course_title,
                "progress" : 0
            }
        }).success(function (data) {

            if (data.statusCode === 200) {
                console.log("Success");
                window.location.assign("/courseDetail");
                /* $scope.fname = data.Result[0].user_firstname;
                 $scope.lname = data.Result[0].user_lastname;
                 $scope.username = data.Result[0].username;
                 */

            } else {
                console.log("Failure");
            }

        });

    }


    /*get course by its corresponding category selection */
    $scope.GetCourseByCategory = function(categorySelection)
    {
        console.log("Category selection",categorySelection);
        $http({
            method: "POST",
            url: 'ec2-50-112-219-13.us-west-2.compute.amazonaws.com:3000/get_courseby_category',
        }).success(function (data) {
            if (data.statusCode === 200) {
                //console.log("Success");
                // console.log(data);
                var selectedCategory = [];
                //console.log("Category selection",categorySelection);

                for(var i = 0; i< data.Result.length; i++)
                {
                    // console.log("category name",data.Result[i].category_name)
                    if(data.Result[i].category_name == categorySelection)
                        selectedCategory.push(data.Result[i]);
                }
                //console.log("In my function",selectedCategory);

                $scope.course_details = selectedCategory;


            } else {

                console.log("Failure");
            }

        });


    }

});
