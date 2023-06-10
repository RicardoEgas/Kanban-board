const countReservations = (resdata) => {
  let result;
  const len = resdata.length;
  if (len === 0) {
    result = 'Reservations (no reservations)';
  } else if (len > 0) {
    result = `Reservation (${len})`;
  }
  return result;
};

export default countReservations;
