import { clock } from "./time";

export const getActualFlight = (flights) => {
  // sumarle 16 dias a la fecha actual
  const time = clock();
  const timeSimulation = new Date(time) - 16 * 24 * 60 * 60 * 1000;
  const actualFlight = flights.find(
    (flight) => {
      const departure = new Date(flight.departure);
      console.log("🥑 ~ getActualFlight ~ departure:", departure)
      console.log("🥑 ~ getActualFlight ~ timeSimulation:", timeSimulation)
      console.log("🥑 ~ getActualFlight ~ arrival:", arrival)
      const arrival = new Date(flight.arrival);
      return timeSimulation >= departure && timeSimulation <= arrival
    }
  );
  return actualFlight;
};
