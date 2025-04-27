'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import useAuth from "@/hooks/useAuth"

const PublicRouter = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { user, loading } = useAuth();

    useEffect(() => {

        const checkUser = async () => {
            if (user && !loading) {

                const idTokenResult = await user.getIdTokenResult();
                const customClaim = idTokenResult.claims.registrado;

                if (customClaim) {
                    router.push('/');
                }

            } else {
                router.push('/');
            }
        }
        checkUser();
    }, [user, loading, router]);
    return <>{children}</>;
}
export default PublicRouter