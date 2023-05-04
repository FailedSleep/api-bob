/*\
title: $:/plugins/FailedSleep/API+Bob/api-code-bash.js
type: application/javascript
module-type: serverroute

localhost:8080/api/code/bash/RootWiki?test-code

returns tiddler code, filtered by type
\*/
(function() {
/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

const codeType = '```bash';
const mimeType = 'text/x-shellscript';

exports.method = "GET";
exports.path = /^\/api\/code\/bash\/(.+?)\/?$/;
exports.handler = function(request,response,state) { 
  $tw.$failedsleep.bobServerRoute(request,response,codeType, mimeType); };

}());