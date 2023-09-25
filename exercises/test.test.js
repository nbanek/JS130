const {Dog, hello} = require("./test.js");

describe('Dog class tests', () => {
  let fido;
  beforeEach(() => {
    fido = new Dog('Fido', 'Pug');
  });

  afterEach(() => {
    console.log('zippy')
  })

  test('Name', () => {
    expect(fido.name).toBe(`${fido.name}`);
  });

  test('Object info', () => {
    expect(fido).toEqual({name: 'Fido', breed: 'Pug'});
  })

  test('basic info', () => {
    expect(fido.info()).toBe(`${fido.name} is a ${fido.breed} dog.`);
  })

  test('instaceof Dog', () => {
    expect(fido instanceof Dog).toBeTruthy()
  })

  test('owner throw', () => {
    expect(() => {
      fido.getOwner()
    }).toThrow();
  })

  test('function', () => {
    expect(hello()).toBe('Hello')
  })

  test('fido leg count', () => {
    expect(fido.name).not.toBeUndefined();
  })
});