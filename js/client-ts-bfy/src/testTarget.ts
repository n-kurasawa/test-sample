///<reference path="../typings/tsd.d.ts" />

export default class TestTarget {
  sum(a: number, b: number): number {
    return a + b;
  }

  getDivText(): string {
    return $('div').text();
  }

  setEvent() {
    $("button").on("click", ()=>{
      $("div").text("world");
    });
  }
}
