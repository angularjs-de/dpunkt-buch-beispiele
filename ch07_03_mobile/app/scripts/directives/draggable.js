'use strict';

angular.module('app').directive('draggable', function ($swipe) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            var width   = element[0].offsetWidth,
                height  = element[0].offsetHeight;

            var toggleActive = function () {
                element.toggleClass('swipe-active');
            };

            $swipe.bind(element, {
                'start': toggleActive,
                'move': function (coords) {
                    element.css('left', coords.x-(width/2) + "px");
                    element.css('top', coords.y-(height/2) + "px");
                },
                'end': toggleActive,
                'cancel': toggleActive
            });
        }
    };
});
