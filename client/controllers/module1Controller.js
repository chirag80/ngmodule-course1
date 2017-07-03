app.controller('module1Ctrl', function ($scope, $http) {


    $scope.getMessage = function () {
        $http.get('http://localhost:3000/api/Messages/greet')
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