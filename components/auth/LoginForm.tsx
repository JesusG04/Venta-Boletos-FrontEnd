"use client"

import Link from "next/link";
import PasswordField from "../shared/PasswordField";
import React, { useEffect, useState } from "react";
import { LoginSchema } from "@/src/schemas";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { FirebaseError } from 'firebase/app';

const LoginForm = () => {

    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState<string[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        //Validamos los datos ingresados por el usuario 
        const login = LoginSchema.safeParse(formData);

        if (!login.success) {
            const messages = login.error.errors.map(error => error.message);
            setErrors(messages);
            return;
        }

        const { email, password } = login.data;
        //En caso de pase la validacion se debe iniciar sesion
        try {
            await signInWithEmailAndPassword(
                auth,
                email,
                password
            )
            //Reiniciamos el Formulario
            setFormData({
                email: '',
                password: ''
            });
            //Redireccionamos al usaurio
            router.push('/')
        } catch (error) {

            if (error instanceof FirebaseError) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        setErrors(['El Usuario no existe']);
                        break;
                    case 'auth/wrong-password':
                        setErrors(['La contrseña es incorrecta']);
                        break;
                    default:
                        setErrors(['Hubo un error inesperdo intentalo mas tarde']);
                        break;
                }
            }

        }

    }

    //Cuando cambie el valor del array de errores 
    useEffect(() => {
        errors.forEach((error) => {
            toast.error(error, {
                theme: "dark",
                closeOnClick: true,
                autoClose: 1500
            })
        })
    }, [errors]);

    return (
        <form
            noValidate
            className="cover__form"
            onSubmit={handleSubmit}
        >
            <div className="row g-4">
                <div className="col-lg-12">
                    <div className="cover__grp">
                        <label
                            htmlFor="email"
                            className="mb-16 fs-18 d-block fw-500 white bodyfont"
                        >
                            Correo Electrónico
                            <span className="base2">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Ejemplo: electroculture@gmail.com"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            suppressHydrationWarning
                        />
                    </div>
                </div>
                <div className="col-lg-12">
                    <PasswordField onChange={handleChange} />
                </div>

                <div className="col-lg-12">
                    <div className="cover__grp mb-30 sign__inbtn">
                        <button
                            type="submit"
                            aria-label="submit button"
                            className="cmn--btn d-block w-100"
                            suppressHydrationWarning
                        >
                            <span>Iniciar Sesión</span>
                        </button>
                    </div>

                    <p className="ffs-16 text-center bodyfont pra fw-500">
                        ¿No tienes cuenta?{" "}
                        <Link href="signup" className="base">
                            Registrate
                        </Link>
                    </p>

                    <p className=" text-center bodyfont ffs-16 fw-500 bodyfont ">
                        <Link href="#0" className="base ">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </p>

                </div>
            </div>
        </form>
    );
}

export default LoginForm;