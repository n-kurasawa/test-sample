var assert = require("power-assert");
var agent = require("superagent");
var restify = require("restify");

describe("api E2E test sample", function(){

	var server;

	beforeEach(function(done){

		// If you want DB setup, write here.

		// dummy application ----------------------------------
		server = restify.createServer();
		server.get("/test/", function(req,res,next){
			res.send("sample api");
		});
		server.post("/test/", function(req,res,next){
			res.send("post api");
		});
		server.get("/status/", function(req,res,next){
			res.send(500, "error");
		});
		server.listen(3000, function(){
			done();	
		});
		// ---------------------------------- dummy application
		
	});

	afterEach(function(done){

		// If you want DB teardown, write here.

		server.close();
		done();
	});


	it("you can test API response", function(done){
		agent.get("localhost:3000/test").end(function(err, res){
			assert.equal(res.body, "sample api");
			done();
		});
	});

	it("you can test POST request", function(done){
		agent.post("localhost:3000/test").end(function(err, res){
			assert.equal(res.body, "post api");
			done();
		});
	});

	it("you can test HTTP StatusCode", function(done){
		agent.get("localhost:3000/status").end(function(err, res){
			assert.equal(res.statusCode, 500);
			assert.equal(res.body, "error");
			done();
		});
	});

});