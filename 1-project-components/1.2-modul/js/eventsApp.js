var eventsApp = angular.module('eventsApp', []);

eventsApp.controller('eventsController', ['$scope', function ($scope) {

    $scope.events = [
        {
            date: new Date("2015-10-19"),
            city: "München",
            location: "Ampere",
            link: "http://blabla"
        },
        {
            date: new Date("2015-10-20"),
            city: "Berlin",
            location: "Olympiastadion",
            link: "http://blabla"
        },
        {
            date: new Date("2015-10-23"),
            city: "Köln",
            location: "Galleria Arena",
            link: "http://blabla"
        },
    ];

}]);
