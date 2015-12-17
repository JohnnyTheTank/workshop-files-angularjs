angular.module('translate', [])
    .service('translateService', function () {

        this.stringList = function () {
            return [
                {
                    'T_MOUSE': {
                        'de': "Maus",
                        'en': "mouse",
                        'fr': "souris"
                    }
                },
                {
                    'T_BACKPACK': {
                        'de': "Rucksack",
                        'en': "backpack",
                        'fr': "havresac"
                    }
                }
            ]
        };

        this.translate = function (string, langauge) {
            var returnString = "no translation";

            angular.forEach(this.stringList(), function (value, key) {
                if(typeof value[string] !== "undefined") {
                    if(typeof value[string][langauge] !== "undefined") {
                        returnString = value[string][langauge];
                        return;
                    }
                }
            });

            return returnString;
        };
    });