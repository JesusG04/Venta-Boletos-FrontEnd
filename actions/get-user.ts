"use server"
import { dataRef, child, get } from "@/src/firebase/firebaseConfig"
import { UsuarioSchema } from "@/src/schemas";

export async function getUser(userId: string): Promise<boolean> {

    const userRef = child(dataRef, "Usuarios");

    try {
        const userSnapShot = await get(child(userRef, userId));
        if (userSnapShot.exists()) {
            const data = userSnapShot.val(); 
            
            const userInfo = UsuarioSchema.parse(data);

            return userInfo.registrado;
        }
        return true;
    } catch (error) {
        return true;
    }

}