

indexPage.controller('signup', function($scope, $http,$state) {

    console.log("Inside Signup.");
    $scope.invalid_register = true;
    $scope.valid_register = true;
    $scope.already_exists = true;

    $scope.register = function()
    {

        if($scope.Attendee==1) {
            $scope.role = 'attendee';
        }else{
            $scope.role = 'volunteer';
        }

        $http({
            method : "POST",
            url : 'ec2-50-112-219-13.us-west-2.compute.amazonaws.com:3000/signupForVolunteerAndAttendee',
            data: {
                first_name: $scope.first_name,
                last_name:$scope.last_name,
                userName:$scope.username,
                gender:$scope.gender,
                city:$scope.city,
                inputPassword:$scope.inputPassword,
                dob:$scope.dob,
                role:$scope.role,
                mobile:$scope.mobile
                
            }
        }).success(function(data) {

            if (data.statusCode == 200) {
                console.log("Success");
                $scope.invalid_register = true;
                $scope.valid_register = false;
                window.location.assign("/");

            } else {
                console.log("Failure");
                $scope.already_exists = false;
            }

        });
    }

});