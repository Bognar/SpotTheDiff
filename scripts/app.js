var app = angular.module('plunker', []);

app.controller('MainCtrl', function ($scope) {
    $scope.name = 'World';
    $scope.preostalo = 5;
    $scope.box1 = function () {
        $scope.preostalo--;
        $scope.skriveno1 = true;
    }
    $scope.box2 = function () {
        $scope.preostalo--;
        $scope.skriveno2 = true;
    }
    $scope.box3 = function () {
        $scope.preostalo--;
        $scope.skriveno3 = true;
    }
    $scope.box4 = function () {
        $scope.preostalo--;
        $scope.skriveno4 = true;
    }
    $scope.box5 = function () {
        $scope.preostalo--;
        $scope.skriveno5 = true;
    }
});
