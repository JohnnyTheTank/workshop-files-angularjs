"use strict";

angular.module('sample', ['translate'])
    .controller('sampleController', function ($scope, translateService) {
        $scope.original;

        $scope.setOriginal = function ($event) {

            if($event && $event.currentTarget) {
                $scope.original = $event.currentTarget.textContent || "NOT DEFINED";
            }
        };


        $scope.translateOriginal = function (string, language ) {
            if(string) {
                $scope.translated = translateService.translate(string, language);
            }
        };


    });
