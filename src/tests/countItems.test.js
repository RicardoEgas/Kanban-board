/** @jest-environment jsdom */
import { countItems } from '../modules/countDogs.js';

describe('Count dog Items', () => {
  test('number of dogs should be 3', () => {
    const Array = [1, 2, 3];
    expect(countItems(Array)).toEqual(3);
  });

  test('number of dogs should be 0', () => {
    const Array = [];
    expect(countItems(Array)).toEqual(0);
  });

  test('number of dogs should be 20', () => {
    const test = Array(20).fill(0);
    expect(countItems(test)).toEqual(20);
  });
});