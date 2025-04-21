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
        .instanceof(File,{message:'Debes subir una imagen de perfil'})
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