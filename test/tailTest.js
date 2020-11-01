const assert = require('chai').assert;
const tail = require('../tail');


describe('#tail', () => {

  it("return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("return [] for ['Lighthouse']", () => {
    assert.deepEqual(tail(['Lighthouse']), []);
  });

  it("return [] for []", () => {
    assert.deepEqual(tail([]), []);
  });


});
