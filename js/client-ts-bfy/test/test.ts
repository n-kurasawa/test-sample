/// <reference path="../typings/tsd.d.ts" />
import TestTarget from '../src/testTarget';
import * as assert from 'power-assert';

describe("sample test", ()=>{
  let server;
  before(() => {
    $("body").html(window.__html__['test/fixtures/fixture.html']);
    server = sinon.fakeServer.create();
  });

  after(()=>{
    $("body").html("");
    server.restore();
    server = null;
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

  it("ajaxのモック", (done)=>{
    server.respondWith('GET', '/path/to/api', [
      200,
      {'Content-Type': 'application/json'},
      JSON.stringify({ data: 'data'})
    ]);

    $.get('/path/to/api', (data, textStatus, jqXHR)=>{
      assert(data.data == 'data');
      done();
    });

    server.respond();
  });
});
