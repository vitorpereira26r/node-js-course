// run: npm run test
// "test" was defined in the scripts at package.json
// jest

const calculator = require('./calculator.js')

test('Add 1 + 1 = 2', () => {
    expect(calculator.add(1,1)).toBe(2);
});