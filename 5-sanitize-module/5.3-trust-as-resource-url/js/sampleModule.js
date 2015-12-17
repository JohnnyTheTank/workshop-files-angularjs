"use strict";

angular.module('sample', ['ngSanitize'])
    .controller('sampleController', function ($scope, $sce) {

        $scope.videos = [
            {
                name: "OK KID - Gute Menschen",
                youtubeId: "WnP4w8eTAxU",
            },
            {
                name: "MoTrip - So wie du bist",
                youtubeId: "tC76tIp0kBk",
            },
            {
                name: "Torsun - Formlos und Frei",
                youtubeId: "HMPp_e4rHFk",
            },
        ];


        $scope.getEmbedLink = function (youtubeId) {
            return 'https://www.youtube.com/embed/'+youtubeId;
        };


        $scope.getUrl = function (url) {
            if(url) {
                return $sce.trustAsResourceUrl(url);
            }
        };


    });
