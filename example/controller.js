/**
 * Created by declan on 17/1/2.
 */
angular
    .module('ngSimditorExample')
    .controller('mainCtrl', function ($scope) {

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

        $scope.logContent = function() {
            console.log("A");
            console.info("content", $scope.content);
        };

    });
