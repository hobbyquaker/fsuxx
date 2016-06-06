# fsuxx

[![npm version](https://badge.fury.io/js/fsuxx.svg)](https://badge.fury.io/js/fsuxx) 
[![Bower Version](https://badge.fury.io/bo/fsuxx.svg)](http://badge.fury.io/bo/fsuxx)
[![Build Status](https://travis-ci.org/hobbyquaker/fsuxx.svg?branch=master)](https://travis-ci.org/hobbyquaker/fsuxx)

> Trivially round a number and return fixed digit string :whale:

## Examples

```javascript
var fsuxx = require("fsuxx");

console.log(fsuxx(0.199000000000000004));                   // "0.199"
console.log(fsuxx(0.199000000000000004, 2));                // "0.2"
console.log(fsuxx(0.199000000000000004, 2, true));          // "0.20"
console.log(fsuxx(0.199000000000000004, 2, true, true));    // "0,20"
```


## Documentation

### fsuxx(num, [digits, [trailing, [comma]]]) ⇒ <code>string</code>
Takes a number and returns a rounded fixed digit string. Returns an empty string if first parameter is (-)Infinity or 
parseFloat results in NaN. If parameter trailing is set to true trailing zeros will be kept.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| num | <code>number</code> |  | the number |
| [digits] | <code>number</code> | <code>3</code> | digit count |
| [trailing] | <code>boolean</code> | <code>false</code> | keep trailing zeros |
| [comma] | <code>boolean</code> | <code>false</code> | use comma as decimal separator |


## License

MIT (c) Sebastian Raff https://github.com/hobbyquaker