///<reference path="typings/tsd.d.ts" />

class TsDummyApp {
	add(a, b) {
		return a + b;
	}
	getDivCount() {
		return $("div").length;
	}
}
