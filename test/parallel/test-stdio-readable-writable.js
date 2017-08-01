'use strict';
require('../common');
const assert = require('assert');

assert(process.stdout.writable);
assert(!process.stdout.readable);

assert(process.stderr.writable);
assert(!process.stderr.readable);

assert(!process.stdin.writable);
assert(process.stdin.readable);
