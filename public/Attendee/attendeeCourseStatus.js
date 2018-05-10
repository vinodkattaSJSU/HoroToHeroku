//change this code



AttendeeProfile.controller('attendeeCourseStatus', function($scope, $http,$state) {


    $http({
        method: "POST",
        url: 'ec2-50-112-219-13.us-west-2.compute.amazonaws.com:3000/getCourseStatus',
    }).success(function (data) {

        if (data.statusCode === 200) {
            console.log("Success"+ data);
            $scope.courseList = data.result;

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