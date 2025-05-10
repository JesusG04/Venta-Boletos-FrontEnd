"use client";

import { useState, useCallback } from "react";
import MyDatePicker from "../ui/DatePicker";
import useAuth from "@/hooks/useAuth";
import {
  IconUpload
} from '@tabler/icons-react';
import { useDropzone } from 'react-dropzone'
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FormRegisterSchema } from "@/src/schemas";
import { storage, ref, uploadBytesResumable, getDownloadURL, updateProfile, dataRef, child, update, auth } from "@/src/firebase/firebaseConfig";

type UserData = {
  imgPerfil: string;
  sexo: string;
  fechaNacimiento: string;
  telefono: string;
};

const FormDataUser = () => {
  const router = useRouter();
  const userRef = child(dataRef, "Usuarios");
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    sexo: '',
    fechaNacimiento: '',
    telefono: '',
    // imgPerfil: File
  })
  //Imagen que aparece en el formulario
  const [imgPerfil, setImgPerfil] = useState<string>('');

  //Funcion cuando el usuario agrege una img de perfil
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    const file = acceptedFiles[0];

    if (file) {

      const maxSize = 5 * 1024 * 1024; // 1 MB en bytes
      if (file.size > maxSize) {
        toast.error("El archivo no debe exceder los 1MB.", {
          theme: "dark",
          autoClose: 1500,
          closeOnClick: true,
        });
        return; // Detener el proceso si el archivo es demasiado grande
      }

      const objectUrl = URL.createObjectURL(file);

      setImgPerfil(prev => {
        if (prev && prev.startsWith('blob:')) {
          URL.revokeObjectURL(prev); // limpia el anterior

        }
        return objectUrl;
      });

      setFormData((prevFormData) => ({
        ...prevFormData,
        imgPerfil: file,
      }));

    }

  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //Validamos si el usuario lleno todos los campos
    const registerUpdateData = FormRegisterSchema.safeParse(formData);

    if (!registerUpdateData.success) {
      const errors = registerUpdateData.error.errors.map(error => error.message)
      errors.forEach(error => {
        toast.error(error, {
          theme: 'dark',
          closeOnClick: true,
          autoClose: 1700
        })
      })
      return;
    }

    try {
      //Subir imagen al local storage 
      const { imgPerfil } = registerUpdateData.data

      //Creaos una referencia a la imagen
      const imageRef = ref(storage, `${imgPerfil.name + Date.now()}`);

      // Subir la imagen
      const uploadTask = uploadBytesResumable(imageRef, imgPerfil);

      // Esperar a que la carga termine y obtener la URL
      await uploadTask;

      // Obtener la URL de la imagen subida
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

      //Enviamos la informacion a la bd
      const userData = {
        ...registerUpdateData.data,
        imgPerfil: downloadURL
      }

      await updateDataRegister(userData);

      // if (user) {
      //   const authUser = {
      //     tokenId: await user.getIdToken(),
      //     userId: user.uid
      //   };


      //   const userData = {
      //     ...formData,
      //     imgPerfil: downloadURL
      //   }

      // 
      //   if (!result.success) {
      //     const errors = result.errors.map(error => error)
      //     errors.forEach(error => {
      //       toast.error(error, {
      //         theme: 'dark',
      //         closeOnClick: 
      //         true,
      //         autoClose: 1700
      //       })
      //     })
      //     return;
      //   }

      //   try {
      //     //Actualizar la informacion del usuario de manera local
      //     await updateProfile(user, {
      //       photoURL: userData.imgPerfil
      //     })
      //     await user.reload();
      //     setUser(auth.currentUser);
      //   } catch (error) {
      //     console.log(error);
      //   }
      //   //Reiniciar Formulario
      //   // Si tienes algo como:
      //   setFormData({
      //     telefono: '',
      //     sexo: '',
      //     fechaNacimiento: '',
      //   });
      //   //Reiniciar la imagen que subio er usuario
      //   setImgPerfil('');

      //   router.push('/')

      // }

    } catch (error) {
      console.log(error);
      toast.error("Hubo un error al subir la imagen.", {
        theme: 'dark',
        closeOnClick: true,
        autoClose: 1700
      });
    }

  }

  const updateDataRegister = async (userData: UserData) => {

    //Guardamos los datos en la bd
    if (!user) {
      return;
    }

    try {

      await update(child(userRef, user.uid), {
        userData
      });
      //Actualizar la informacion del usuario de manera local
      await updateProfile(user, {
        photoURL: userData.imgPerfil
      })
      await user.reload();
      setUser(auth.currentUser);
      //Reiniciar Formulario
      // Si tienes algo como:
      setFormData({
        telefono: '',
        sexo: '',
        fechaNacimiento: '',
      });
      //Reiniciar la imagen que subio er usuario
      setImgPerfil('');

      router.push('/')

    } catch (error) {
      console.log(error);
      toast.error("Hubo un error al registrase.", {
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

        {/* Input dela imagen de perfil */}
        <div className="col-lg-12">
          <div className="d-flex flex-column align-items-center">

            <Image
              src={imgPerfil || 'https://firebasestorage.googleapis.com/v0/b/apphive-inc.appspot.com/o/usersmedia%2FsG4D2Am3Nq6G4diGKs6ojn?alt=media&token=3fabd5b9-9af8-4e34-bc4e-7e1aad99df1e'}
              alt="Img de Perfil"
              className="rounded-circle dropzone-img object-fit-cover"
              width={200}
              height={200}
            />

            <div {...getRootProps()} className="pt-1">
              <input
                {...getInputProps({
                  id: 'imgPerfil',
                  name: 'imgPerfil',
                })}
                type="file"
                accept="image/*"
                suppressHydrationWarning />
              {
                isDragActive ?
                  <IconUpload className="icono" /> :
                  <IconUpload className="icono" />
              }
            </div>
          </div>
        </div>

        {/* Input de nombre */}
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
              className="rounded"
              defaultValue={user?.displayName ? user.displayName : 'Sin nombre'}
              disabled={user?.displayName ? true : false}
              suppressHydrationWarning />
          </div>
        </div>

        {/* Input de email */}
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
              placeholder="Ejemplo: niteo@gmail.com"
              className="rounded"
              defaultValue={user?.email ? user.email : 'Sin correo'}
              disabled={user?.email ? true : false}
              suppressHydrationWarning />
          </div>
        </div>

        {/* Input del sexo */}
        <div className="col-lg-12">
          <div className="cover__grp">
            <label htmlFor="sexo" className="mb-16 fs-18 d-block fw-500 white bodyfont">
              Sexo <span className="base2">*</span>
            </label>
            <select
              name="sexo"
              id="sexo"
              className="rounded"
              value={formData.sexo}
              onChange={handleChange}
              suppressHydrationWarning
            >
              <option value="">Seleccionar...</option>
              <option value="Mujer">Mujer</option>
              <option value="Hombre">Hombre</option>
              <option value="Otro">Otro</option>

            </select>
          </div>
        </div>

        {/* Input de la fecha de nacimiento */}
        <div className="col-lg-12">
          <div className="cover__grp">
            <label htmlFor="fechaNacimiento" className="mb-16 fs-18 d-block fw-500 white bodyfont">
              Fecha de Nacimiento <span className="base2">*</span>
            </label>
            <MyDatePicker onChange={handleChange} ></MyDatePicker>
          </div>
        </div>

        {/* Input de telefono */}
        <div className="col-lg-12">
          <div className="cover__grp">
            <label
              htmlFor="telefono"
              className="mb-16 fs-18 d-block fw-500 white bodyfont"
            >
              Teléfono <span className="base2">*</span>
            </label>
            <input
              type="tel"
              id="telefono"
              placeholder="Ejemplo: +52 5598635475"
              name="telefono"
              className="rounded"
              value={formData.telefono}
              onChange={handleChange}
              suppressHydrationWarning
            />
          </div>
        </div>

        {/* Boton de envio */}
        <div className="col-lg-12">
          <div className="cover__grp mb-30 sign__inbtn">
            <button
              type="submit"
              aria-label="submit button"
              className="cmn--btn d-block w-100"
              suppressHydrationWarning
            >
              <span>Completar</span>
            </button>
          </div>
        </div>

      </div>

    </form>

  );
};

export default FormDataUser;
