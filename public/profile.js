var profile = angular.module('UserProfile', ['ui.router']);
profile.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider.state('UserProfile', {
        url : '/Profile',
        views: {
            'header': {
                templateUrl : 'templates/profileHeader.html',
            },
            'content': {
                templateUrl : 'templates/profileContent.html',

            },
        }
    })
    //$urlRouterProvider.otherwise('/');
});


profile.controller('userprofile', function($scope, $http) {


    $http({
        method: "POST",
        url: 'ec2-54-186-158-202.us-west-2.compute.amazonaws.com:3000/view_profile',
    }).success(function (data) {

        if (data.statusCode === 200) {
            console.log("Success");
            $scope.fname = data.Result[0].user_firstname;
            $scope.lname = data.Result[0].user_lastname;
            $scope.username = data.Result[0].username;
            $scope.city = data.Result[0].user_city;
            $scope.birthdate = data.Result[0].user_birthdate;
            $scope.gender = data.Result[0].user_gender;


        } else {
            console.log("Failure");
        }

    });


    $scope.LoadHostCourecs = function()
    {
        $http({
            method: "POST",
            url: 'ec2-54-186-158-202.us-west-2.compute.amazonaws.com:3000/get_host_added_courses',
        }).success(function (data) {
            $scope.courseList = data.Result;

        });
    }


    $scope.Account = function () {
        window.location.assign("/Account");
    }

    $scope.EditProfile = function () {
        window.location.assign("/EditProfile");
    }

    $scope.GetCourse = function () {

        $http({
            method: "POST",
            url: 'ec2-54-245-178-137.us-west-2.compute.amazonaws.com:3000/get_course_details',
        }).success(function (data) {

            if (data.statusCode === 200) {
                console.log("Success");
                $scope.fname = data.Result[0].user_firstname;
                $scope.lname = data.Result[0].user_lastname;
                $scope.username = data.Result[0].username;



            } else {
                console.log("Failure");
            }

        });
    }

    $scope.addSessions = function()
    {
        window.location.assign("/sessionland")
    }

});