"use strict";

angular.module('sample', [])
    .controller('sampleController', function ($scope) {
        $scope.test = "hallo";


        $scope.getClassByString = function(type){
            switch (type) {
                case "1":
                    return "panel-primary";
                    break;

                case "2":
                    return "panel-success";
                    break;

                case "3":
                    return "panel-danger";
                    break;

                default:
                    return "panel-info";
            }
        }
    });
