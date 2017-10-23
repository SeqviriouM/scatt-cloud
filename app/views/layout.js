'use strict';

module.exports = () => `
<html>
    <head>
        <title>Scatt cloud</title>
        <meta charset="utf-8">
        <script src="http://localhost:9090/build/bundle.js" defer></script>
    </head>
    <body>
        <div id="root" />
    </body>
</html>
`.trim();