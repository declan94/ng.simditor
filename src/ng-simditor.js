/**
 * Created by declan on 17/1/2.
 */
'use strict';

/**
 * @ngdoc directive
 * @name ngSimditor.directive:simditor
 * @description
 * # simditor
 */
angular.module('ng.simditor', []);

angular.module('ng.simditor')
    .directive('simditor', function () {

        var TOOLBAR_DEFAULT = ['title', 'bold', 'italic', 'underline', 'strikethrough', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'image', 'hr', '|', 'indent', 'outdent'];

        return {
            require: "?^ngModel",
            link: function (scope, element, attrs, ngModel) {
                element.append("<div style='height:300px;'></div>");
                var config = scope.$eval(attrs.config) || {};
                var defaultConfig = {
                    textarea: element.children()[0],
                    pasteImage: true,
                    toolbar: TOOLBAR_DEFAULT,
                    defaultImage: 'images/preload.png'
                };
                for (var key in defaultConfig) {
                    if (!config.hasOwnProperty(key) && defaultConfig.hasOwnProperty(key)) {
                        config[key] = defaultConfig[key];
                    }
                }
                scope.simditor = new Simditor(config);

                var $target = element.find('.simditor-body');

                function readViewText() {
                    ngModel.$setViewValue($target.html());
                    if (attrs.ngRequired !== undefined && attrs.ngRequired !== "false") {
                        var text = $target.text();
                        if (text.trim() === "") {
                            ngModel.$setValidity("required", false);
                        } else {
                            ngModel.$setValidity("required", true);
                        }
                    }
                }

                ngModel.$render = function () {
                    scope.simditor.focus();
                    $target.html(ngModel.$viewValue);
                };

                scope.simditor.on('valuechanged', function () {
                    scope.$apply(readViewText);
                });
            }
        };
    });
