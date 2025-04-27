import { z } from "zod";

export const RegisterSchema = z.object({
        name: z.string()
                .min(1, { message: 'El nombre es obligatorio' })
                .trim(),
        email: z.string()
                .min(1, { message: 'El correo es obligatorio' })
                .email({ message: 'El correo no es valido' })
                .trim(),

        password: z.string()
                .min(8, { message: 'El password es muy corto, minimo 8 caracteres' })
                .trim()
})

export const LoginSchema = z.object({
        email: z.string()
                .min(1, { message: 'El correo es obligatorio' })
                .email({ message: 'El correo no es valido' })
                .trim(),
        password: z.string()
                .min(8, { message: 'El password es muy corto, minimo 8 caracteres' })
                .trim()
})

export const FormRegisterSchema = z.object({
        imgPerfil: z
                .instanceof(File, { message: 'Debes subir una imagen de perfil' })
                .refine(file => file.size > 0, { message: "Por favor, sube una imagen" }),

        sexo: z
                .string()
                .min(1, { message: "Seleciona tu sexo" })
                .trim(),

        telefono: z
                .string()
                .min(1, { message: "Por favor, escribe tu numero de telefono" })
                .trim(),

        fechaNacimiento: z
                .string()
                .min(1, { message: "La fecha de nacimiento es obligatoria." })
                .trim()
                .refine(val => !isNaN(Date.parse(val)), { message: "Fecha inválida." })
                .refine(val => calculateAge(val) >= 18, { message: "Debes ser mayor de 18 años." }),
})

export const SuccessSchema = z.object({
        message: z.string()
})

export type SuccessResponse = z.infer<typeof SuccessSchema>;

export const ErrorSchema = z.object({
        message: z.string(),
})

export const EventSchema = z.object({
        bannerEvento: z.string()
                .url(),
        cantidadDisponible: z.number(),
        cantidadMaximaCompra: z.number(),
        // contadorNotificacion: z.string(),
        correoResponsable: z.string()
                .email(),
        descripcionCorta: z.string(),
        descripcionLarga: z.string(),
        destacadoEvento: z.boolean(),
        enlaceBoleto: z.string()
                .url(),
        fechaCreacion: z.number(),
        fechaFin: z.number(),
        fechaInicio: z.number(),
        fechaVencimiento: z.number(),
        imagenOrganizador: z.string()
                .url(),
        isVisible: z.boolean(),
        latitudeLugar: z.string(),
        longitudeLugar: z.string(),
        nombreEvento: z.string(),
        nombreOrganizador: z.string(),
        organizadorId: z.string(),
        precio: z.number(),
        subCategoria: z.string(),
        telefonoResponsable: z.string(),
        tipo: z.string()
});

export const EventMapSchema = z.record(EventSchema);

export type Evento = z.infer<typeof EventSchema>;
export type MapaEventos = z.infer<typeof EventMapSchema>;

function calculateAge(birthDate: string): number {
        const today = new Date();  // Fecha actual
        const birthDateObj = new Date(birthDate);  // Convertir la fecha de nacimiento a un objeto Date

        // Calcular la edad preliminar (diferencia entre el año actual y el año de nacimiento)
        let age = today.getFullYear() - birthDateObj.getFullYear();

        // Verificar si la persona ya cumplió años este año
        const month = today.getMonth();  // Mes actual
        const day = today.getDate();     // Día actual
        const birthMonth = birthDateObj.getMonth();  // Mes de nacimiento
        const birthDay = birthDateObj.getDate();     // Día de nacimiento

        // Si el cumpleaños aún no ha pasado este año, restamos 1 a la edad
        if (month < birthMonth || (month === birthMonth && day < birthDay)) {
                age--;
        }

        return age;
}