"use client"
import { useEffect,useState } from "react"
import { redirect, useRouter } from "next/navigation"
import useAuth from "@/hooks/useAuth"
import { getUser } from "@/actions/get-user"

const PublicRouter = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true); 
    

    useEffect(() => {
        const checkUserStatus = async () => {
            // Si el usuario está disponible, verificamos su estado
            if (user) {
                const isRegistered = await getUser(user.uid);
                if (isRegistered) {
                    // Si está registrado, lo redirigimos a la página principal
                    router.push('/');
                } 
            } else {
                // Si no hay usuario, lo redirigimos al login o página de inicio
                router.push('/login');
            }
            setLoading(false);  // Una vez que la redirección se ha realizado, cambiamos el estado de carga
        };

        if (user !== null) {  // Solo ejecutamos si el usuario está definido
            checkUserStatus();
        }
    }, [user, router]); 


    return <>{children}</>;
}
export default PublicRouter