"use client";

import React, { useActionState, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import PasswordField from "@/components/shared/PasswordField";
import { register } from "@/actions/create-account-action";
import { auth, dataRef, child, createUserWithEmailAndPassword, updateProfile, set, signInWithEmailAndPassword } from "@/src/firebase/firebaseConfig";
import { RegisterSchema, userInfo } from "@/src/schemas";


const RegisterForm = () => {

  const router = useRouter();

  const userRef = child(dataRef, "Usuarios")

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Validamos la informacion del usuario
    const registerData = RegisterSchema.safeParse(formData);

    //Validamos los datos del usuario y si hay un error lo mostramos
    if (!registerData.success) {
      const errors = registerData.error.errors.map(error => error.message)
      errors.forEach(error => {
        toast.error(error, {
          theme: 'dark',
          closeOnClick: true,
          autoClose: 1700
        })
      })
      return;
    }

    //Creamos el usuario en Firebase, en la Bd e iniciamos sesion de manera local 
    await createUserFirebase(registerData.data);
  }

  const createUserFirebase = async (userInfo: userInfo) => {
    try {
      //Creamos el usuario
      const userCredentiales = await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
      const user = userCredentiales.user

      //Actualizamos el nombre
      await updateProfile(user, {
        displayName: userInfo.name
      });

      //Guardamos los datos en la bd 
      await set(child(userRef, user.uid), {
        Nombre: user.displayName,
        Correo: user.email,
        Registro: Date.now(),
        fechaUltimoAcceso: Date.now(),
        tipoSesion: "Correo",
        registrado: false
      });

      //Iniciamos sesion
      await signInWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );

      //Reiniciamos el Formulario
      setFormData({
        email: '',
        name: '',
        password: ''
      });

      //Redireccionamos al usuario
      router.push('/form-register');

    } catch (error) {
      console.log(error);

      toast.error('Error al Inicar Sesión', {
        theme: 'dark',
        closeOnClick: true,
        autoClose: 1700
      });
    }
  }


  return (
    <form
      noValidate
      className="cover__form"
      onSubmit={handleSubmit}
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
