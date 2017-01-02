# ng.simditor
angular rich text editor using simditor

## Install:
```
bower install ng.simditor --save
```
## Usage:
```html
<link rel="stylesheet" href="bower_components/simditor/styles/simditor.css" />

<script src="bower_components/simple-module/lib/module.js"></script>
<script src="bower_components/simple-hotkeys/lib/hotkeys.js"></script>
<script src="bower_components/simditor/lib/simditor.js"></script>
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/ng.simditor/dist/js/ng-simditor.js"></script>
```

```html
<simditor ng-model="content" config="simditorConfig"></simditor>
```

```js
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
            console.info("content", $scope.content);
        };

    });
```

