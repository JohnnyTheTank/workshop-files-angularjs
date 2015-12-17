"use strict";

angular.module('sample', [])
    .controller('sampleController', ['$scope', function ($scope) {

        $scope.eventListener = function ($event) {
            if($event) {
                console.info($event);

                var keyCode = $event.which || $event.keyCode;
                if(keyCode) {
                    $scope.keyCode = keyCode;
                }
            } else {
                console.info("no $event")
            }

        };


    }]);
