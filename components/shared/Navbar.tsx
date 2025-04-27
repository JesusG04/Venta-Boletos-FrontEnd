"use client";
import { sideBarData } from "@/public/data/navBarData";
import { RootState } from "../../redux/store";
import { navbarContext } from "@/src/utils/reactContext";
import {
  IconBell,
  IconChecks,
  IconChevronDown,
  IconSearch,
  IconShoppingCart,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import useAuth from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/src/firebase/firebaseConfig";
import { toast } from "react-toastify";

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(navbarContext);
  // const [isSubDropDownOpen, setSubDropDownOpen] = useState(false);
  // const [isSubMenuOpen, setSubMenuOpen] = useState<string | null>(
  //   sideBarData[0].id
  // );
  const router = useRouter();
  const pathName = usePathname();
  const { quantity } = useSelector((state: RootState) => state.cart.value);
  const { user, setLoading, loading } = useAuth();


  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLoading(!loading);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error('Error Al cerrar sesión', {
        theme: "colored",
        closeOnClick: true,
        autoClose: 1500
      });
    }
  }

  const handleNavigation = (path: string) => {
    router.push(path);
  };


  return (
    // <!-- Header Here -->
    <>
      <div className="header__section__attachment">
        <div className="container-fluid p-0-fluid p-0">
          <div className="d-flex">
            <div
              className={`sidebar-wrapper mainbg ${isSidebarOpen && "active"}`}
            >
              <div className="d-flex logo__wrap align-items-center justify-content-between position-relative">
                <Link
                  href="/"
                  className="logo"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <Image
                    width={180}
                    height={52}
                    src="/img/electro/LogoElectro.jpg"
                    alt="img"
                  />
                </Link>
                <div
                  className="position-absolute  menu-close-button d-xl-none"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <IconX />
                </div>
              </div>
              
              {/* Menu movil */}
              <div className="sidebar__wrapbox">
                <ul className="sidebar__menu">
                  
                  {/*==============side menu===== */}
                  {sideBarData.map(
                    ({ id, menuTitle, icon, path }) => {

                      return(

                        <li key={id} onClick={() => setIsSidebarOpen(false)}>
                          <Link
                            // onClick={() => setSubMenuOpen(null)}
                            href={path}
                            className={`d-flex hcolor align-items-center gap-2 ${pathName === path ? "navbar-item-active" : ""
                              }`}
                          >
                            {icon}
                            {menuTitle}
                          </Link>
                        </li>

                      );
                    }
                  )}
                </ul>
              </div>

              
            </div>


            <div
              className={`header-wrapper mainbg menu-fixed ${isSidebarOpen && "body-collapse"
                }`}
            >


              {/*==============main menu===== */}
              <ul className="main-menuone">
                <li className="small__logo">
                  <Link href="/">
                    <Image
                      width={68}
                      height={51}
                      src="/img/electro/LogoElectro.jpg"
                      alt="img"
                    />
                  </Link>
                </li>
                <li className="search__show">
                  <form action="" className="d-flex align-items-center">
                    <button aria-label="submit button" type="submit" suppressHydrationWarning >
                      <IconSearch />
                    </button>
                    <input
                      type="text"
                      placeholder="Buscar eventos, restaurantes..."
                      suppressHydrationWarning
                    />
                  </form>
                </li>

              </ul>

              <div className="menu__right__components d-flex align-items-center">
                <div className="menu__components d-flex align-items-center">

                  {/*Icono del carrito*/}
                  <Link href="cart" className="shop__tolley">
                    <IconShoppingCart className="pra fs-30" />
                    <span className="shop__badge">{quantity}</span>
                  </Link>


                  {/**Barra del nombre con un submenu poner logica en caso de que no haya inciaco sesion */}
                  {user ? (

                    <div className="dropdown profie__dropdown">

                      <Link
                        href="#0"
                        className="link user__active d-flex align-items-center"
                        data-bs-toggle="dropdown"
                        data-bs-offset="0,16"
                        aria-expanded="true"
                      >
                        <Image
                          width={38}
                          height={39}
                          src={user.photoURL || "/img/bn/profile.jpg"}
                          alt="image"
                          className="img-fluid profile__img rounded-circle objec-fit-cover"
                        />
                        <span className="d-flex fs-14 fw-500 pra align-items-center gap-1 d-none d-sm-block">
                          {user.displayName}
                          <IconChevronDown />
                        </span>
                      </Link>

                      <div
                        className="dropdown-menu dropdown-menu-end"
                        data-popper-placement="bottom-end"
                      >

                        {/** Submenu cuando precionas el nombre del usaurio */}
                        <div className="p-6">

                          <div className="d-flex flex-column align-items-center mb-24 gap-3 max-width">

                            <div className="jerny__uer ralt">
                              <Image
                                width={200}
                                height={200}
                                src={user.photoURL || "/img/bn/profile.jpg"}
                                alt="image"
                                className="img-fluid jenny rounded-circle object-fit-cover flex-shrink-0"
                              />
                              <IconChecks className="checks" />
                            </div>

                            <div className="flex-grow-1">
                              <h5 className="fs-20 fw-600 white mb-0 text-center">
                                {user.displayName}
                              </h5>
                              <span className="d-block fw-400 pra fs-16 text-center">
                                {user.email}
                              </span>
                            </div>

                          </div>

                          <ul className="list">
                            <li className="mb-16">
                              <Link
                                href="profile"
                                className="link d-flex align-items-center gap-2 dropdown-item"
                              >
                                <i className="bi bi-bell fs-20"></i>
                                <span className="d-block fs-16 pra fw-500 ">
                                  {" "}
                                  Perfil{" "}
                                </span>
                              </Link>
                            </li>
                            <li className="mb-16">
                              <Link
                                href="#"
                                className="link d-flex align-items-center gap-2 dropdown-item"
                              >
                                <i className="bi bi-bell fs-20"></i>
                                <span className="d-block fs-16 pra fw-500 ">
                                  {" "}
                                  Eventos{" "}
                                </span>
                              </Link>
                            </li>
                          </ul>

                          <ul className="list">
                            <li className="mb-16">
                              <Link
                                href="#"
                                className="link d-flex align-items-center gap-2 dropdown-item"
                              >
                                <i className="bi bi-credit-card-2-back fs-20"></i>
                                <span className="d-block fs-16 pra fw-500 ">
                                  {" "}
                                  Ayuda{" "}
                                </span>
                              </Link>
                            </li>
                            <li className="mb-16">
                              <Link
                                href="#"
                                className="link d-flex align-items-center gap-2 dropdown-item"
                              >
                                <i className="bi bi-credit-card-2-back fs-20"></i>
                                <span className="d-block fs-16 pra fw-500 ">
                                  {" "}
                                  Términos y Condiciones{" "}
                                </span>
                              </Link>
                            </li>
                            <li className="mb-16">
                              <Link
                                href="#"
                                className="link d-flex align-items-center gap-2 dropdown-item"
                              >
                                <i className="bi bi-gear fs-20"></i>
                                <span className="d-block fs-16 pra fw-500 ">
                                  {" "}
                                  Configuración{" "}
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="link d-flex align-items-center gap-2 dropdown-item"
                                onClick={handleLogout}
                              >
                                <i className="bi bi-file-earmark-plus fs-20"></i>
                                <span className="d-block fs-16 pra fw-500 ">
                                  {" "}
                                  Cerrar Sesión{" "}
                                </span>
                              </Link>
                            </li>
                          </ul>

                        </div>

                      </div>
                    </div>

                  ) : (
                    <div className="d-flex gap-3">
                      <button
                        className="btn-inciar"
                        onClick={() => handleNavigation("/signin")}
                        suppressHydrationWarning
                      >
                        Iniciar Sesión
                      </button>
                      <button
                        className="btn-registrarse"
                        onClick={() => handleNavigation("/signup")}
                        suppressHydrationWarning
                      >
                        Registrarse
                      </button>
                    </div>
                  )

                  }

                  {/**Icono de notioficaciones  */}
                  <div className="dropdown notification__dropdown">
                    <Link
                      href="#"
                      className="link glose__icon"
                      data-bs-toggle="dropdown"
                      data-bs-offset="0,14"
                      aria-expanded="true"
                    >
                      <IconBell />
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-end "
                      data-popper-placement="bottom-end"
                    >
                      <ul className="list">
                        <li className="mb-16">
                          <Link href="#0" className="link d-flex dropdown-item">
                            <Image
                              width={200}
                              height={200}
                              src="/img/mood/mood2.jpg"
                              className="notification__thumb"
                              alt="img"
                            />
                            <span className="notify__content">
                              <span className="fs-16 d-block fw-600 white ">
                                David95
                              </span>
                              <span className="fs-14 message d-block fw-500 pra ">
                                Message alert!
                              </span>
                              <span className="fs-10 fw-400 pra ">
                                10 Min ago
                              </span>
                            </span>
                          </Link>
                        </li>
                        <li className="mb-16">
                          <Link href="#0" className="link d-flex dropdown-item">
                            <Image
                              width={200}
                              height={200}
                              src="/img/mood/mood4.jpg"
                              className="notification__thumb"
                              alt="img"
                            />
                            <span className="notify__content">
                              <span className="fs-16 d-block fw-600 white ">
                                Mlan MCcoy
                              </span>
                              <span className="fs-14 message d-block fw-500 pra ">
                                Message alert!
                              </span>
                              <span className="fs-10 fw-400 pra ">
                                1 days ago
                              </span>
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#0" className="link d-flex dropdown-item">
                            <Image
                              width={200}
                              height={200}
                              src="/img/mood/mood5.jpg"
                              className="notification__thumb"
                              alt="img"
                            />
                            <span className="notify__content">
                              <span className="fs-16 d-block fw-600 white ">
                                Neymer Jr
                              </span>
                              <span className="fs-14 message d-block fw-500 pra ">
                                Message alert!
                              </span>
                              <span className="fs-10 fw-400 pra ">
                                2 Month ago
                              </span>
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
