import countReservations from '../modules/reserveCount.js';

describe('Counting reservations in API', () => {
  const data = [{ key1: 'val1' }];
  test('count API reservations', () => {
    expect(countReservations(data)).toBe('Reservation (1)');
  });

  test('No reservation in API', () => {
    const data = [];
    expect(countReservations(data)).toMatch('Reservations (no reservations)');
  });
});
