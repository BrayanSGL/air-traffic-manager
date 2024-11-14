import { clock } from "./time";

export const getActualFlight = (flights) => {
  // sumarle 16 dias a la fecha actual
  const time = clock();
  const actualFlight = flights.find(
    (flight) => {
      console.log(flight.departure, flight.arrival);
      console.log(time);
      return time >= flight.departure && time <= flight.arrival
    }
  );
  return actualFlight;
};
