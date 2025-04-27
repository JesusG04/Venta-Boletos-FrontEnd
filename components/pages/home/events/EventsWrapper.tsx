import Events from "./Events";
import { EventMapSchema } from "@/src/schemas";

const EventsWrapper = async () => {

  // Consulta de datos para mostrar lo evento populares
  //Consultar a la Api para registrar al usuario
  const url = `${process.env.API_NITEO_URL}/events/popular`;

  const req = await fetch(url, {
    
    headers: {
      'Content-Type': 'application/json'
    },
  });

  const json = await req.json();

  const events = EventMapSchema.parse(json.data);

  return <Events data={events} />;

};

export default EventsWrapper;