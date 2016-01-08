var TsDummyApp = (function () {
    function TsDummyApp() {
    }
    TsDummyApp.prototype.add = function (a, b) {
        return a + b;
    };
    TsDummyApp.prototype.getDivCount = function () {
        return $("div").length;
    };
    return TsDummyApp;
}());
