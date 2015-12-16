"use strict";

angular.module('news', [])
    .controller('newsController', ['$scope', function ($scope) {

        $scope.news = [
            {
                date: new Date("2015-10-19"),
                title: "New Store",
                body: "We opened new store in Munich"
            },
            {
                date: new Date("2015-10-20"),
                title: "Looking for Jobs?",
                body: "We hiring now"
            },
            {
                date: new Date("2015-10-23"),
                title: "Store closed",
                body: "We need to close the store after 4 days"
            },
            {
                date: new Date("2015-10-25"),
                title: "Store re-launch",
                body: "Big news: we re-opened our store"
            },
            {
                date: new Date("2015-10-31"),
                title: "Halloween Party",
                body: "Come to our big Halloween Party!"
            },
        ];

    }]);
