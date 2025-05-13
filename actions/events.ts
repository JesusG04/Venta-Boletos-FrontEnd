"use server"
import { dataRef, child, get } from "@/src/firebase/firebaseConfig"

import { EventMapSchema } from "@/src/schemas";

export async function getEvents()  {

    const eventoRef = child(dataRef, "Evento"); 

    try {
        const eventSnapShot = await get(eventoRef);
        if (eventSnapShot.exists()) {
            const data = eventSnapShot.val();
                  // Parsear los datos usando el esquema de eventos
            const events = EventMapSchema.parse(data);

            return events;
        }
        return null; // 🔄 antes era `true`
    } catch (error) {
        console.error("Error al obtener eventos:", error);
        return null; // 🔄 antes era `true`
    }
}