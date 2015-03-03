function DummyApp() {

}
DummyApp.prototype.add = function(a,b) {
	return a + b;
};
DummyApp.prototype.getDivCount = function() {
	return $("div").length;
};