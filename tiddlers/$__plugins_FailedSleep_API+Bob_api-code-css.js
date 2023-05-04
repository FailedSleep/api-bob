/*\
title: $:/plugins/FailedSleep/API+Bob/api-code-css.js
type: application/javascript
module-type: serverroute

localhost:8080/api/code/css/RootWiki?test-code

returns tiddler code, filtered by type
\*/
(function() {
/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

const codeType = '```css';
const mimeType = 'text/css';
exports.path = /^\/api\/code\/css\/(.+?)\/?$/;

exports.method = "GET";
exports.handler = function(request,response,state) { 
  $tw.$failedsleep.bobServerRoute(request,response,codeType, mimeType); };

}());