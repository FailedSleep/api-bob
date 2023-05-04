/*\
title: $:/plugins/FailedSleep/API+Bob/api-raw.js
type: application/javascript
module-type: serverroute

localhost:8080/api/raw/RootWiki?test-code

returns tiddler text
\*/
(function() {
/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.method = "GET";

exports.path = /^\/api\/raw\/(.+?)\/?$/;

exports.handler = function(request,response,state) { $tw.$failedsleep.bobServerRoute(request,response); };

}());