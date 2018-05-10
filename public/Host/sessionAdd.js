//var session = angular.module('session', ['ui.router']);

account.controller('sessionAdd', function($scope, $http,$state) {


        $scope.SessionAdded = false;

    $http({
        method : "POST",
        url : 'ec2-54-245-178-137.us-west-2.compute.amazonaws.com:3000/getAllCourseList'
    }).success(function(data) {

        $scope.allCourse= data.allCourse;


    });

    $scope.uploadSession= function()
    {
        var courseName= $("#courseName").val();

        $http({
            method : "POST",
            url : 'ec2-54-245-178-137.us-west-2.compute.amazonaws.com:3000/setSessionDetails',
            data: {

                courseId: courseName,
                sessionTitle: $scope.sessionTitle,
                sessionDate: $scope.sessionDate,
                sessionDuration: $scope.sessionDuration,
                sessionLocation:$scope.sessionLocation,
                sessionDetail:$scope.sessionDetails,

            }
        }).success(function(data) {
            if (data.statusCode == 200) {

                console.log("Success while adding new course");
                $scope.SessionAdded = true;


            } else {
                console.log("Failure");

                $scope.SessionAdded = false;

            }
        });


    }

    $scope.Profile = function()
    {
        window.location.assign("/Profile");
    }

    $scope.EditProfile = function()
    {
        window.location.assign("/EditProfile");
    }


    $scope.addSessions = function()
    {
        window.location.assign("/sessionland")
    }

});