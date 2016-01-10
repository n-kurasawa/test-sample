"use strict";
var TestTarget = (function () {
    function TestTarget() {
    }
    TestTarget.prototype.sum = function (a, b) {
        return a + b;
    };
    TestTarget.prototype.getDivText = function () {
        return $('div').text();
    };
    TestTarget.prototype.setEvent = function () {
        $("button").on("click", function () {
            $("div").text("world");
        });
    };
    return TestTarget;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TestTarget;
//# sourceMappingURL=testTarget.js.map