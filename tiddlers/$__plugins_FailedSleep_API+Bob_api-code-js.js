/*\
title: $:/plugins/FailedSleep/API+Bob/api-code-js.js
type: application/javascript
module-type: serverroute

localhost:8080/api/code/js/RootWiki?test-code

returns tiddler code, filtered by type
\*/
(function() {
/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

const codeType = '```js';
const mimeType = 'text/javascript';
exports.path = /^\/api\/code\/js\/(.+?)\/?$/;

exports.method = "GET";
exports.handler = function(request,response,state) { 
  $tw.$failedsleep.bobServerRoute(request,response,codeType, mimeType); };

}());