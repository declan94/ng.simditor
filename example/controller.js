/**
 * Created by declan on 17/1/2.
 */
angular
    .module('ngSimditorExample')
    .controller('mainCtrl', function ($scope, $sce) {

        $scope.simditorConfig = {
            placeholder: "I'm placeholder",
            defaultImage: 'preload.png',
            params: {},
            tabIndent: true,
            toolbar: [
                'title',
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'fontScale',
                'color',
                'ol',
                'ul',
                'blockquote',
                'code',
                'table',
                'link',
                'image',
                'hr',
                'indent',
                'outdent',
                'alignment'
            ],
            toolbarFloat: true,
            toolbarFloatOffset: 0,
            toolbarHidden: false,
            pasteImage: false,
            cleanPaste: false,
            upload: false
        };

        $scope.syntaxHighlight = function (json) {
            if (typeof json != 'string') {
                json = JSON.stringify(json, undefined, 2);
            }
            json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
            var str = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                var cls = 'number';
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        cls = 'key';
                    } else {
                        cls = 'string';
                    }
                } else if (/true|false/.test(match)) {
                    cls = 'boolean';
                } else if (/null/.test(match)) {
                    cls = 'null';
                }
                return '<span class="' + cls + '">' + match + '</span>';
            });
            return $sce.trustAsHtml(str);
        };

        $scope.logContent = function() {
            console.info("content", $scope.content);
        };

    });
