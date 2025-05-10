import Events from "./Events";
import { EventMapSchema } from "@/src/schemas";
import { dataRef, child, get } from "@/src/firebase/firebaseConfig";

const EventsWrapper = async () => {

  const eventoRef = child(dataRef, "Evento");

  try {
    const snapshot = await get(eventoRef);
    if (snapshot.exists()) {
      const data = snapshot.val();
      // Parsear los datos usando el esquema de eventos
      const events = EventMapSchema.parse(data);
      // Pasar los eventos al componente `Events`
      return <Events data={events} />;
    }
    console.log('error en la consulta');
  } catch (error) {
    console.log('error');
    
    console.error("Error al obtener eventos:", error);
    // Puedes mostrar un mensaje de error o retornar algo por defecto si la API falla
    return <div>Error al cargar los eventos. Intenta nuevamente más tarde.</div>;
  }

};

export default EventsWrapper;