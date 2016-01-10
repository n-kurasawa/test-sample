/// <reference path="../typings/tsd.d.ts" />
import TestTarget from '../src/testTarget';
import * as assert from 'power-assert';

describe("sample test", ()=>{
  before(() => {
    $("body").html(window.__html__['test/fixtures/fixture.html']);
  });

  after(()=>{
    $("body").html("");
  });

  it("1+1=2であるべき", ()=>{
    let testTarget = new TestTarget();
    assert(testTarget.sum(1,1) == 2);
  });

  it("divのテキストが取得できる", ()=>{
    let testTarget = new TestTarget();
    assert(testTarget.getDivText() == 'hello');
  });

  it("divのテキストが変わる", ()=>{
    let testTarget = new TestTarget();
    testTarget.setEvent();
    $("button").click();
    assert(testTarget.getDivText() == 'world');
  });
});
