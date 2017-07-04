app.controller('module1Ctrl', function ($scope, $http) {


    $scope.getMessage = function () {
        $http.get('https://pristine-redwood-46633.herokuapp.com/api/Messages/greet')
            .then(function (response) {
                $scope.data = response.data.greeting
            }, function (error) {
                // Handle error here
                $scope.error = JSON.stringify(error.data.error)
            })
    }

    $scope.testFunction = function () {
        $scope.error = ''
    }
})