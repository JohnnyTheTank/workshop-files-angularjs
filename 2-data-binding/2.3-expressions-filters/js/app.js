"use strict";

angular.module('app', ['events'])
    .run(function ($rootScope) {
        $rootScope.name = "Jonathan";
    });
