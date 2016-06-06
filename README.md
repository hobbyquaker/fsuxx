> Takes a number and returns fixed digit string

# Examples

```javascript
var fsuxx = require("fsuxx");

console.log(fsuxx(0.199000000000000004));           // "0.199"
console.log(fsuxx(0.199000000000000004, 2));        // "0.2"
console.log(fsuxx(0.199000000000000004, 2, true));  // "0.20"
```


# Documentation

## fsuxx(num, [digits], [trailing]) ⇒ <code>string</code>
Takes a number and returns a rounded fixed digit string.
Returns an empty string if first parameter is NaN, (-)Infinity or not of type number.
If parameter trailing is set to true trailing zeros will be kept.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num | <code>number</code> |  | the number |
| [digits] | <code>number</code> | <code>3</code> | digit count |
| [trailing] | <code>boolean</code> | <code>false</code> | keep trailing zeros |


# License

MIT (c) Sebastian Raff https://github.com/hobbyquaker