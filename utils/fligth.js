import { clock } from "./time";

export const getActualFlight = (flights) => {
  const time = clock();
  // const actualFlight = flights.find(
  //   (flight) => time >= flight.departure && time <= flight.arrival
  // );
  // but ignore the day and month and year of the date
  const actualFlight = flights.find(
    (flight) =>
      time.slice(11) >= flight.departure.slice(11) &&
      time.slice(11) <= flight.arrival.slice(11)
  );
  return actualFlight;
};
