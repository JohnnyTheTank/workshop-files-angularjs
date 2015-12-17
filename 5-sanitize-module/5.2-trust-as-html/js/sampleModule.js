"use strict";

angular.module('sample', ['ngSanitize'])
    .controller('sampleController', function ($scope, $sce) {
        $scope.htmlText = "<h1>Überschrift</h1>\nhallo\n<br><strong>ich bin fett</strong>";

        $scope.getHtml = function (string) {
            if(string) {
                return $sce.trustAsHtml(string);
            }
        };

        $scope.getUnsafeHTML = function () {
            return "<strong>Hi</strong>";
        }
    });
