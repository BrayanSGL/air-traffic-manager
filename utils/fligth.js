export const getActualFlight = (clock, flights) => {
  const time = clock();
  const actualFlight = flights.find(
    (flight) => time >= flight.departure && time <= flight.arrival
  );
  return actualFlight;
};
