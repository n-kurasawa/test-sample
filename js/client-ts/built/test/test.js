describe('ts sample', function () {
    it("you can test simple assert", function () {
        var result = 1 + 1;
        result.should.equal(2);
    });
    it("you can test simple assert", function () {
        var app = new TsDummyApp();
        app.add(1, 2).should.equal(3);
    });
    it("you can test with jQuery", function () {
        var app = new TsDummyApp();
        app.getDivCount().should.equal(0);
    });
    it("you can test with jQuery", function () {
        $('body').append(window.__html__['test/fixture.html']);
        var app = new TsDummyApp();
        app.getDivCount().should.equal(1);
    });
});
