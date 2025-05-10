"use server"
import { RegisterSchema, SuccessSchema, ErrorSchema, FormRegisterSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[],
    success: boolean
}

type UserData = {
    sexo: string,
    fechaNacimiento: string,
    imgPerfil: string,
    telefono: string,
}


export async function updateDataRegister(
    formData: UserData,
): Promise<ActionStateType> {

    


    return {
        errors: [],
        success: true
    };

}