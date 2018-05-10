
//change this code
var NGO = angular.module('NGO', ['ui.router']);
NGO.controller('NGOAttendeePeopleList', function($scope, $http,$state,$filter) {

    $scope.AttendeeRegister= false;
    $scope.AttendeeAlreadyRegister= false;

    $http({
        method: "POST",
        url: 'ec2-54-186-158-202.us-west-2.compute.amazonaws.com:3000/getAllAttendeesInArea',
    }).success(function (data) {

        if (data.statusCode === 200) {
            console.log("Success");
            $scope.attendeeListParent =data.result;
            $scope.attendeeList = data.result;
            /* $scope.fname = data.Result[0].user_firstname;
             $scope.lname = data.Result[0].user_lastname;
             $scope.username = data.Result[0].username;
             */

        } else {
            console.log("Failure");
        }

    });

    $http({
        method: "POST",
        url: 'ec2-54-186-158-202.us-west-2.compute.amazonaws.com:3000/getAllCoursesInArea',
    }).success(function (data) {

        if (data.statusCode === 200) {
            console.log("Success");

            $scope.coursesInArea = data.result;
            /* $scope.fname = data.Result[0].user_firstname;
             $scope.lname = data.Result[0].user_lastname;
             $scope.username = data.Result[0].username;
             */

        } else {
            console.log("Failure");
        }

    });

    $scope.Account = function () {
        window.location.assign("/Account");
    }

    $scope.register = function(user){
        var user_id = user.user_id;
        var selectedcourse_id = $scope.selectedcourse_id;

        var SelectedcoursebyName =  document.getElementById("course").value;

        var Selectedcourse = $filter('filter')($scope.coursesInArea, function (d) {
            return d.course_name === SelectedcoursebyName;
        });


        $http({
            method: "POST",
            url: 'ec2-54-186-158-202.us-west-2.compute.amazonaws.com:3000/setCourseToAttendee',
            data:{
                user_id: user_id,
                course_id: Selectedcourse[0].course_id,
                user_mobile:user.user_mobile,
                selected_course_name:SelectedcoursebyName,
                user_firstname:user.user_firstname,
                progress:0
            }
        }).success(function (data) {

            if (data.statusCode === 200) {
                console.log("Success");
                $scope.AttendeeRegister = true;
                $scope.AttendeeAlreadyRegister = false;
                //$scope.attendeeList = data.result;
                /* $scope.fname = data.Result[0].user_firstname;
                 $scope.lname = data.Result[0].user_lastname;
                 $scope.username = data.Result[0].username;
                 */

            }if(data.statusCode === 501){
                console.log("course is already registered.");
                $scope.AttendeeRegister = false;
                $scope.AttendeeAlreadyRegister = true;
            }
            else {
                console.log("Failure");
                $scope.AttendeeRegister = false;
                $scope.AttendeeAlreadyRegister = false;
            }

        });
    }

    $scope.filterData = function(){

        if($scope.username==''){

            $scope.attendeeList = $scope.attendeeListParent;
        }
        else {
            var SelectedattendeeList= $filter('filter')($scope.attendeeListParent, function (d) {

                return $scope.username === d.username;
            });
            console.log("SelectedAllBillList" + SelectedattendeeList);
            $scope.attendeeList = SelectedattendeeList;
        }
    }
});