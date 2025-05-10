import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import FeatureEventLeftCard from "./FeatureEventLeftCard";
import FeatureEventRightCard from "./FeatureEventRightCard";
import { EventMapSchema } from "@/src/schemas";
import { dataRef, child, get } from "@/src/firebase/firebaseConfig";

const FeaturedEvents = async () => {
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
        // <!--show feature section-->
        <section className="featuredshow__section pr-24 pl-24 mb-100 overflow-hidden">
          <div className="container-fluid p-0">
            <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
              <h2>Eventos Destacados</h2>
              <Link
                href="freature-show"
                className="view__btn white d-flex align-items-center gap-2"
              >
                Ver más
                <IconArrowNarrowRight />
              </Link>
            </div>
            <div className="row g-4">

              {Object.entries(events).slice(0, 2).map((entry) => {
                const [id, evento] = entry;
                return (<FeatureEventLeftCard key={id} {...evento} />);
              })}

              <div className="col-xxl-4 col-12">
                <div className="show__rightbox featured__show-right">

                  {Object.entries(events).slice(2, 5).map((entry) => {
                    const [id, evento] = entry;
                    return (<FeatureEventRightCard key={id} {...evento} />);
                  })}

                </div>
              </div>

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
    return <div>Error al cargar los eventos. Intenta nuevamente más tarde.</div>;
  }

};

export default FeaturedEvents;
