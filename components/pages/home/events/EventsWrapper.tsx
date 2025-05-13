import Events from "./Events";

import { getEvents } from "@/actions/events";

const EventsWrapper = async () => {
  try {
    const events = await getEvents();
    return (
      <>
        <h1>Eventos cargados</h1>
        <pre>{JSON.stringify(events, null, 2)}</pre>
        <Events data={events ?? {}} />
      </>
    );
  } catch (error) {
    return (
      <div style={{ color: 'red' }}>
        <h2>Error al cargar eventos</h2>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
};

export default EventsWrapper;