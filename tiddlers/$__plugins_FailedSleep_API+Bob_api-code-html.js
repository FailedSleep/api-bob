/*\
title: $:/plugins/FailedSleep/API+Bob/api-code-html.js
type: application/javascript
module-type: serverroute

localhost:8080/api/code/html/RootWiki?test-code

returns tiddler code, filtered by type
\*/
(function() {
/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

const codeType = '```html';
const mimeType = 'text/html';
exports.path = /^\/api\/code\/html\/(.+?)\/?$/;

exports.method = "GET";
exports.handler = function(request,response,state) { 
  $tw.$failedsleep.bobServerRoute(request,response,codeType, mimeType); };

}());