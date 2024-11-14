import { clock } from "./time";

export const getActualFlight = (flights) => {
  const time = clock();
  const actualFlight = flights.find(
    (flight) => time >= flight.departure && time <= flight.arrival
  );
  return actualFlight;
};
