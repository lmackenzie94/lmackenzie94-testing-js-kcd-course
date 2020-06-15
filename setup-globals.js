async function test(title, cb) {
  try {
    await cb();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    // toEqual(expected) {},
    // etc...
  };
}

global.test = test;
global.expect = expect;
// node --require ./setup-globals.js simple.js
// gives access to these functions without having to require them in every test file
