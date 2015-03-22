var max = Math.max;
var min = Math.min;

function interval_intersection(a, b, out) {
  out = out || [];

  out[0] = max(a[0], b[0]);
  out[1] = min(a[1], b[1]);

  if (out[0] > out[1]) {
    return null;
  }

  return out;
}

module.exports = interval_intersection;
