"use strict";
var testTarget_1 = require('../src/testTarget');
var assert = require('power-assert');
describe("sample test", function () {
    before(function () {
        $("body").html(window.__html__['test/fixtures/fixture.html']);
    });
    after(function () {
        $("body").html("");
    });
    it("1+1=2であるべき", function () {
        var testTarget = new testTarget_1.default();
        assert(testTarget.sum(1, 1) == 2);
    });
    it("divのテキストが取得できる", function () {
        var testTarget = new testTarget_1.default();
        assert(testTarget.getDivText() == 'hello');
    });
    it("divのテキストが変わる", function () {
        var testTarget = new testTarget_1.default();
        testTarget.setEvent();
        $("button").click();
        assert(testTarget.getDivText() == 'world');
    });
});
//# sourceMappingURL=test.js.map