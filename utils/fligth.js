import { clock } from "./time";

export const getActualFlight = (flights) => {
  if (!flights || flights.length === 0) {
    return null;
  }
  // sumarle 16 dias a la fecha actual
  const t = new Date(flights[0].departure);
  const time = clock();
  const timeSimulation = new Date(time) - 16 * 24 * 60 * 60 * 1000;
  const daysDiff = t.getDate() - timeSimulation.getDate();
  timeSimulation.setDate(timeSimulation.getDate() - daysDiff);
  const actualFlight = flights.find(
    (flight) => {
      const departure = new Date(flight.departure);
      const arrival = new Date(flight.arrival);
      console.log("🥑 ~ getActualFlight ~ departure:", departure)
      console.log("🥑 ~ getActualFlight ~ timeSimulation:", timeSimulation)
      console.log("🥑 ~ getActualFlight ~ arrival:", arrival)
      return timeSimulation >= departure && timeSimulation <= arrival
    }
  );
  return actualFlight;
};
