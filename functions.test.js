const functions = require('./functions');

test('Adds 2 + 2 equal 4', ()=> {
    expect(functions.add(2,2)).toBe(4)
})

test('Adds 2 + 2 NOT equal 5', ()=> {
    expect(functions.add(2,2)).not.toBe(5)
})

test('Shuld be null', ()=> {
    expect(functions.isNull()).toBeNull()
})