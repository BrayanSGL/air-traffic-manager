import { clock } from "./time";

export const getActualFlight = (flights) => {
  if (!flights || flights.length === 0) {
    return null;
  }

  // Obtener la fecha actual simulada y restarle 16 días
  const currentTime = new Date(clock());
  const timeSimulation = new Date(currentTime);
  // timeSimulation.setDate(currentTime.getDate() - 16);

  console.log("🕒 Fecha simulada:", timeSimulation);

  // Buscar el vuelo actual comparando los horarios de salida y llegada
  const actualFlight = flights.find((flight) => {
    const departure = new Date(flight.departure);
    const arrival = new Date(flight.arrival);

    console.log("✈️ Vuelo - Salida:", departure);
    console.log("✈️ Vuelo - Llegada:", arrival);

    return timeSimulation >= departure && timeSimulation <= arrival;
  });

  return actualFlight || null;
};
