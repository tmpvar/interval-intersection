# interval-intersection

compute the intersection of two intervals where an interval is a 2 part array

## install

`npm install interval-intersection`

## use

```javascript
var iisect = require('interval-intersection');

console.log(iisect([-1, 5], [0, 3]));
// output: [0, 3]

console.log(iisect([-2, -1], [1, 2]));
// output: null
```

### api surface

__iisect__(`a`, `b`, `out`)

* `a` is the first interval
* `b` is the second interval
* `out` is an optional 2 part araray. Provide this to avoid generating garbage
* returns: 2 part array or `null` if no intersection

## license

[MIT](LICENSE.txt)
