/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../lib.ts"/>

interface Window {
    __html__: any;
}

describe('ts sample', () => {

	it("you can test simple assert", () => {
		let result = 1 + 1;
		result.should.equal(2);
	});

	it("you can test simple assert", () => {
		let app = new TsDummyApp();
		app.add(1,2).should.equal(3);
	});

	it("you can test with jQuery", () => {
		let app = new TsDummyApp();
		app.getDivCount().should.equal(0);
	});

	it("you can test with jQuery", () => {
		$('body').append(window.__html__['test/fixture.html']);
		let app = new TsDummyApp();
		app.getDivCount().should.equal(1);
	});

});
