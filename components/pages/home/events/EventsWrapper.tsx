import Events from "./Events";

import { getEvents } from "@/actions/events";

const EventsWrapper = async () => {

  const events = await getEvents();
  console.log(events);
  
  return events ? (
    <Events data={events} />
  ) : (
    <div>No se pudieron cargar los eventos.</div>
  );
};

export default EventsWrapper;