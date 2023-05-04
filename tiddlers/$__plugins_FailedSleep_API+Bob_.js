(function () {

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

if (!$tw.$failedsleep) $tw.$failedsleep={};

const getCode = (text='', codeType='```', r='', lines = text.split('\n'), append=false ) => {
  while (lines.length){
    let line = lines.shift();
    if (line.substr(0,3)==='```'){
      append = (line.substr(0,codeType.length)===codeType);
      while (lines.length && lines[0].substr(0,3)!=='```'){
        if (append) r += lines[0] + '\n';
        lines.shift();
      }
      lines.shift();
    }
  }
  return r;
};

$tw.$failedsleep.bobServerRoute = (request,response, codeType='',mime='text/text') => {
	if($tw.settings.API.enableFetch !== 'yes') return response.writeHead(403).end('API Fetch not enabled');

	const URL = require('url');
	const parsed = URL.parse(request.url);
	const wikiName = request.params[0];
	const tiddlerTitle = decodeURIComponent(parsed.query);

	if(typeof parsed.query !== 'string') return response.writeHead(403).end();

	const token = $tw.Bob.getCookie(request.headers.cookie, 'token');

	// make sure that the wiki exists
	const exists = $tw.ServerSide.existsListed(wikiName);
	const authorised = $tw.Bob.AccessCheck(wikiName, token, 'view', 'wiki');

	if(!exists || !authorised) return response.writeHead(403).end();

	$tw.ServerSide.loadWiki(wikiName);
	const tiddler = $tw.Bob.Wikis[wikiName].wiki.getTiddler(tiddlerTitle);

	if(!tiddler) return response.writeHead(403).end("No Tiddler");

	let text = tiddler.getFieldString("text");

	if (codeType!=='') text = getCode(text,codeType);

	response.writeHead(200, {"Content-Type": mime});
	response.end(text,"utf8");
};


exports.name = "failedsleep-test"; exports.after = ["rootwidget"];
exports.startup = function () { return $tw.$failedsleep; }

})();






