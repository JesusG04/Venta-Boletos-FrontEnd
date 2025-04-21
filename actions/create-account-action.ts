"use server"
import { RegisterSchema, SuccessSchema, ErrorSchema } from "@/src/schemas";

type ActionStateType = {
    errors: string[]
    success: boolean
}

export async function register(prevState: ActionStateType, formData: FormData) {

    const registerData = {
        email: formData.get('email'),
        name: formData.get('name'),
        password: formData.get('password')
    };

    //Validar 
    const register = RegisterSchema.safeParse(registerData);

    //Retonar los errores
    if (!register.success) {
        const errors = register.error.errors.map(error => error.message);
        return {
            errors,
            success: false
        };
    }

    //Consultar a la Api para registrar al usuario 
    const url = `${process.env.API_NITEO_URL}/auth/register`;

    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(register.data)
    });

    const json = await req.json();

    if (req.status === 409) {
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
