var assert = require("power-assert");
var Browser = require("zombie");
var http = require("http");
var fs = require("fs");
var qs = require("querystring");

describe("view E2E test sample", function(){

	var server;

	beforeEach(function(done){

		// If you want DB setup, write here.


		// dummy application ----------------------------------
		server = http.createServer(function(req,res){
			if(req.url == "/test/") {
				return fs.createReadStream("./test/test.html").pipe(res);
			}

			if(req.url == "/async/") {
				return fs.createReadStream("./test/async.html").pipe(res);
			}

			if(req.url == "/next/") {
				var body = "";
				req.on("data", function(data){ body += data; })
				return req.on("end", function(){
					var _post = qs.parse(body);
					res.end('<!DOCTYPE html><html><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>next page</title><link rel="stylesheet" href=""></head><body><div id="loginid">'+_post.loginid+'</div><div id="password">'+_post.password+'</div></body></html>');
				});
			}
			
		}).listen(3000, function(){
			Browser.localhost("localhost:3000", 3000);
			done();	
		});
		// ---------------------------------- dummy application
		

	});

	afterEach(function(done){

		// If you want DB teardown, write here.

		server.close();
		done();
	});


	it("you can test view", function(done){
		var browser = new Browser();

		browser.visit("/test/", function(err){
			browser.assert.attribute("form", "method", "post");
			browser.assert.attribute("form", "action", "/next/");
				
			browser.fill("input[name='loginid']", 'samplename');
			browser.fill("input[name='password']", 'password');

			browser.pressButton("submit", function(err){
				browser.assert.text("title", "next page");
				browser.assert.text("#loginid", "samplename");
				browser.assert.text("#password", "password");
				done();
			});

		});

	});

	it("you can test view with async", function(done){
		var browser = new Browser();

		browser.visit("/async/", function(err){
			browser.pressButton("#click", function(err){
				browser.assert.text("#result", "you click");
				done();
			});

		});
	});

});