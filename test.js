const assert = require('assert');

// A simple test to simulate a passing CI check
assert.strictEqual(1 + 1, 2, 'Math is broken!');

// A simple test to simulate a failing CI check
assert.strictEqual(1 + 1, 3, 'Math is broken!');

console.log('Tests passed. Ready for deployment.');