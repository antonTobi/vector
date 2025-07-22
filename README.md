# vector.js
Utility methods for treating Javascript arrays as 2d vectors.

This script attaches methods directly to the Array prototype, which is generally frowned upon ([for good reason](https://developer.chrome.com/blog/smooshgate/)), so you definitely should not use this in your code.

However, if you do, you could write things like:
```js
[1, 2].plus([3, 4])
// returns [4, 6]

[1, 0].rotate(Math.PI/4)
// returns [0.7071..., 0.7071...]

let position = [2, 5]
let velocity = [1, 1]
let dt = 0.1
position.add(velocity.times(dt))
// position is now [2.1, 5.1]
```
