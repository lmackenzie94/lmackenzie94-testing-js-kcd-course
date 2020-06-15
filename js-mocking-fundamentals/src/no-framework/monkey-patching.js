const assert = require('assert');
const thumbWar = require('../thumb-war');
const utils = require('../utils');

// store the OG function
const originalGetWinner = utils.getWinner;

// overwrite it to produce a predictable/testable result
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler');
assert.strictEqual(winner, 'Kent C. Dodds');

// cleanup
utils.getWinner = originalGetWinner;
