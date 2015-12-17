"use strict";

angular.module('sample', [])
    .controller('sampleController', function ($scope) {

        $scope.getData = function () {
            console.log("no factory defined");
        };

    });
