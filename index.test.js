const index = require('./index')

let dougie = index.dougie

test('that our first test passes', () => {
    expect(true).toBe(true)
})

test('that dougie is in fact orange', () => {
    expect(dougie.coulor).toBe('orange')
})