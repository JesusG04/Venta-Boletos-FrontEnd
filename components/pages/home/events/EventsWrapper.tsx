import Events from "./Events";
import { EventMapSchema } from "@/src/schemas";

const EventsWrapper = async () => {

  // Consulta de datos para mostrar lo evento populares
  //Consultar a la Api para registrar al usuario
  
  const url = `${process.env.API_NITEO_URL}/events/popular`;

  try {
    const req = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!req.ok) {
      throw new Error(`Error en la solicitud: ${req.statusText}`);
    }
    const json = await req.json();

    const events = EventMapSchema.parse(json.data);
  
    return <Events data={events} />;
  } catch (error) {
    console.error("Error al obtener eventos:", error);
    // Puedes mostrar un mensaje de error o retornar algo por defecto si la API falla
    return <div>Error al cargar los eventos. Intenta nuevamente más tarde.</div>;
  }

};

export default EventsWrapper;