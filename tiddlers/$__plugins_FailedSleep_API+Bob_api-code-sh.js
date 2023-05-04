/*\
title: $:/plugins/FailedSleep/API+Bob/api-code-sh.js
type: application/javascript
module-type: serverroute

localhost:8080/api/code/sh/RootWiki?test-code

returns tiddler code, filtered by type
\*/
(function() {
/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

const codeType = '```sh';
const mimeType = 'text/x-shellscript';
exports.path = /^\/api\/code\/sh\/(.+?)\/?$/;

exports.method = "GET";
exports.handler = function(request,response,state) { 
  $tw.$failedsleep.bobServerRoute(request,response,codeType, mimeType); };

}());