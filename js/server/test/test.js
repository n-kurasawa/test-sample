var assert = require("power-assert");
var sinon  = require("sinon");

describe("serverside javascript test sample", function(){

	beforeEach(function(){

		// If you want DB setup, write here.
		
	});

	afterEach(function(){

		// If you want DB teardown, write here.

	});


	it("you can test simple function", function(){
		var sample = new Sample();
		assert.equal(sample.add(1,2), 3);
	});

	it("you can test with mock object", function(){
		var sample = new Sample();
		var date = new Date();

		var mock = sinon.mock(sample);
		mock.expects("isAfter").withArgs(date).once().returns(true);

		assert.equal(sample.isAfter(date), true);
		assert.equal(mock.verify(), true);
	});

});

function Sample() {

};
Sample.prototype.add = function(a,b) {
	return a + b;
};
Sample.prototype.isAfter = function(date) {
	return new Date().getTime() < date.getTime();
};
