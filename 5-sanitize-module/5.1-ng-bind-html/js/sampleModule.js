"use strict";

angular.module('sample', ['ngSanitize'])
    .controller('sampleController', function ($scope) {
        $scope.htmlText = "<h1>Überschrift</h1>\nhallo\n<br><strong>ich bin fett</strong>";

    });
