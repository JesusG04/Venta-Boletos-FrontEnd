'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import useAuth from "@/hooks/useAuth"
import { User } from "firebase/auth"

const PublicRouter = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const { user, loading } = useAuth();

    console.log(user);

    useEffect(() => {
        if (!loading && user) {
            router.push('/');
          }
    }, [user, loading]);


    return <>{children}</>;

}
export default PublicRouter