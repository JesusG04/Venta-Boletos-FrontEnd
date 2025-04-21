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
type AuthUser = {
    tokenId: string,
    userId: string,
}

export async function updateDataRegister(
    formData: UserData,
    auhtUser: AuthUser
): Promise<ActionStateType> {

    const { tokenId, userId } = auhtUser

    const url = `${process.env.API_NITEO_URL}/auth/${userId}`;

    const req = await fetch(url, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const json = await req.json();

    if (!req.ok) {
        const { message } = ErrorSchema.parse(json);
        return {
            errors: [message],
            success: false
        };
    }

    return {
        errors: [],
        success: true
    };

}