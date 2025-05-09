import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import LatestEventCard from "./LatestEventsCard";
import { EventMapSchema } from "@/src/schemas";
import { dataRef, child, get } from "@/src/firebase/firebaseConfig";

const LatestEvents = async () => {

  const eventoRef = child(dataRef, "Evento");

  //Consultar los eventos destacados
  try {
    const snapshot = await get(eventoRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      // Parsear los datos usando el esquema de eventos
      const events = EventMapSchema.parse(data);
      // Pasar los eventos al componente `Events`
      return (
        // <!--latest section-->
        <section className="latest__section pr-24 pl-24 pb-100">
          <div className="container-fluid p-0">
            <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h2>Ultimos eventos</h2>
              <Link
                href="blog"
                className="view__btn white d-flex align-items-center gap-2"
              >
                Ver más
                <IconArrowNarrowRight />
              </Link>
            </div>
            <div className="row g-4">
              {Object.entries(events).slice(0, 3).map((entry) => {
                const [id, evento] = entry;
                return (<LatestEventCard key={id} {...evento} />);
              })}


            </div>
          </div>
        </section>
      );
    }
    else {
      return <div>Error al cargar los eventos. Intenta nuevamente más tarde.</div>;
    }
  } catch (error) {
    console.error("Error al obtener eventos:", error);
    // Puedes mostrar un mensaje de error o retornar algo por defecto si la API falla
    return <div>Error al cargar los eventos. Intenta nuevamente más tarde.</div>;
  }

};

export default LatestEvents;
