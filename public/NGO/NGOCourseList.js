
//change this code
var NGO = angular.module('NGO', ['ui.router']);
NGO.controller('NGOCourseList', function($scope, $http,$state) {


    $http({
        method: "POST",
        url: 'ec2-54-186-158-202.us-west-2.compute.amazonaws.com:3000/getAllCoursesWithHostsInArea',
    }).success(function (data) {

        if (data.statusCode === 200) {
            console.log("Success");
            $scope.hostList = data.result;


        } else {
            console.log("Failure");
        }

    });


    $scope.Account = function () {
        window.location.assign("/Account");
    }

    $scope.EditProfile = function () {
        window.location.assign("/EditProfile");
    }

});