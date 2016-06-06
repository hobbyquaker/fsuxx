#!/usr/bin/env node

/**
 * @author Sebastian Raff https://github.com/hobbyquaker
 * @license MIT
 */

var fsuxx = require('./fsuxx.js');

var testFailed = false;
var testOutput = '';

function test(a, b) {
    if (a !== b) {
        if (testOutput !== '') testOutput += '\n';
        testFailed = true;
        testOutput += '✘ test failed: ' + a + ' !== ' + b;
    }
}

test(fsuxx(-6.8999999999999995), '-6.9');
test(fsuxx(0.020000000000000004), '0.02');
test(fsuxx(0.199000000000000004), '0.199');
test(fsuxx(0.199000000000000004, 2), '0.2');
test(fsuxx(0.199000000000000004, 1), '0.2');
test(fsuxx(0.199000000000000004, 2, true), '0.20');
test(fsuxx('muh'), '');
test(fsuxx(false), '');
test(fsuxx(null), '');
test(fsuxx(), '');
test(fsuxx(NaN), '');
test(fsuxx(Infinity), '');
test(fsuxx({bla: 'blub'}), '');
test(fsuxx({1: 2}), '');
test(fsuxx([1, 2, 3]), '1');
test(fsuxx(6.8999999999999995), '6.9');
test(fsuxx(0.199000000000000004), '0.199');
test(fsuxx(0.199000000000000004, 2), '0.2');
test(fsuxx(0.199000000000000004, 2, true), '0.20');
test(fsuxx(0.199000000000000004, 2, true, true), '0,20');

if (!testFailed) {
    console.log('✔ All tests passed.');
    process.exit(0);
} else {
    console.log(testOutput);
    process.exit(1);
}