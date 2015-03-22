var test = require('tape');
var isect = require('./interval-intersection');

test('intersection', function(t) {
  var r = isect([-1, 1], [0, 2]);
  t.deepEqual(r, [0, 1]);
  t.end();
});

test('no intersection', function(t) {
  var r = isect([-1, 1], [2, 3]);
  t.equal(r, null);
  t.end();
});

test('accepts out param', function(t) {
  var out = [0, 0];
  var r = isect([1, 5], [3, 10], out);

  t.equal(r, out);
  t.deepEqual(r, [3, 5]);
  t.end();
});
