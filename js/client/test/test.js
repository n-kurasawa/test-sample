describe("karma sample", function(){

	it("you can test simple assert", function(){
		var result = 1 + 1;
		result.should.equal(2);
	});

	it("you can test with another javascript file", function(){
		var app = new DummyApp();
		app.add(1,2).should.equal(3);
	});

	it("you can test with jQuery", function(){
		var app = new DummyApp();
		app.getDivCount().should.equal(1);
	});

	it("you can test with html", function(){
		$('body').append(window.__html__['test/fixture.html']);
		var app = new DummyApp();
		app.getDivCount().should.equal(0);
	});

});