/// <reference path="../typings/tsd.d.ts" />
import TestTarget from '../src/testTarget';
import * as assert from 'power-assert';

describe("sample test", ()=>{
  it("1+1=2であるべき", ()=>{
    let testTarget = new TestTarget();
    assert(1+1 == 3);
  });
});
