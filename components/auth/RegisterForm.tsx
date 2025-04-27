"use client";

import React, { useActionState, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import PasswordField from "@/components/shared/PasswordField";
import { register } from "@/actions/create-account-action";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/src/firebase/firebaseConfig";


const RegisterForm = () => {

  const router = useRouter();
  
  const [state, formAction] = useActionState(register, {
    errors: [],
    success: false
  });
  
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: ''
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {

    const handleEffect = () => {

      /**En caso de que haya errores  */
      if (state.errors) {
        state.errors.forEach(error => {
          toast.error(error, {
            theme: "colored",
            closeOnClick: true,
            autoClose: 1500
          });
        });
      }

      // Manejo de éxito
      if (state.success) {

        const { email, password } = formData;

        const signin = async () => {

          try {
            //Iniciamos sesión 
            await signInWithEmailAndPassword(
              auth,
              email,
              password);

            //Reiniciamos el Formulario
            setFormData({
              email: '',
              name: '',
              password: ''
            });

            //Redireccionamos al usuario
            router.push('/form-register')

          } catch (error) {
            toast.error('Error al Inicar Sesión', {
              theme: "colored",
              closeOnClick: true,
            });
          }

        }

        signin();
      }
    }

    handleEffect();
  }, [state])


  return (

    <form
      noValidate
      className="cover__form"
      action={formAction}
    >

      {/**Adjuntar el logo cuando este listo */}

      <div className="row g-4">

        <div className="col-lg-12">
          <div className="cover__grp">
            <label
              htmlFor="name"
              className="mb-16 fs-18 d-block fw-500 white bodyfont"
            >
              Nombre<span className="base2">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Nombre Completo"
              name="name"
              className="rounded"
              value={formData.name}
              onChange={handleChange}
              suppressHydrationWarning />
          </div>
        </div>

        <div className="col-lg-12">
          <div className="cover__grp">
            <label
              htmlFor="email"
              className="mb-16 fs-18 d-block fw-500 white bodyfont"
            >
              Correo Electronico <span className="base2">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ejemplo: electroculture@gmail.com"
              name="email"
              className="rounded"
              value={formData.email}
              onChange={handleChange}
              suppressHydrationWarning />
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

              <span>Registrarme</span>
            </button>

          </div>

          <p className="ffs-16 text-center bodyfont pra fw-500">
            ¿Ya tienes cuenta?{" "}
            <Link href="signin" className="base">
              Iniciar Sesión.
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
};

export default RegisterForm;
