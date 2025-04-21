import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitch,
  IconBrandYoutube,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    // <!--Footer Section-->
    <footer className="footer__section pl-24 pr-24">
      <div className="container">
        <div className="footer__top">
          <div className="row g-4">


            <div className="col-md-4 col-sm-6 quick__space">

              <div className="footer__widget">

                <h4 className="white mb-30 text-center">Enlaces</h4>

                <div className="link__attacht">

                  <ul className="w-100 d-flex justify-content-around">
                    <li className="mb-16">
                      <Link href="#" className="fs-16 fw-400 bodyfont pra">
                        Carrito
                      </Link>
                    </li>
                    <li className="mb-16">
                      <Link
                        href="profile"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        Mi Perfil
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="artist-allsong"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        Eventos
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="artist-allsong"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        Boletos
                      </Link>
                    </li>
                  </ul>

                </div>

                {/* <div className="footer__form">
                  <h4 className="white mb-24">Newslatter Our</h4>
                  <form
                    action="#0"
                    className="d-flex align-items-center justify-content-between gap-1"
                  >
                    <div className="input-item">
                      <input type="email" placeholder="Email address" />
                    </div>
                    <button type="submit" aria-label="submit button">
                      <span>Go</span>
                    </button>
                  </form>
                </div> */}

              </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 footer__streamio">
              <div className="footer__widget">

                <h4 className="white mb-30 text-center">Redes Sociales</h4>
                <ul className="social d-flex align-items-center text-white">
                  <li>
                    <Link href="#">
                      <IconBrandFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <IconBrandTwitch />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <IconBrandInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <IconBrandDiscord />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <IconBrandYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


            <div className="col-md-4 col-sm-6 footercontact__link">
              <div className="footer__widget">
                <h4 className="white mb-30">Contacto</h4>
                <div className="link__attach mb-60 d-flex">
                  <ul className="link">
                    <li className="mb-16">
                      <Link
                        href="tel:+3567897483"
                        className="fs-16 fw-400 bodyfont pra"
                      >
                        UA: +3 567 897 483
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="fs-16 fw-400 bodyfont pra">
                        ronyui3630.com
                      </Link>
                    </li>
                  </ul>

                </div>

              </div>
            </div>

          </div>
        </div>

        <div className="footer__bottom d-flex align-items-center">
          <p className="pra fs-14 fw-400 bodyfont">
          Copyright 2025 &copy; Niteo
          </p>
          <ul className="privacy d-flex align-items-center gap-2">
            <li>
              <Link href="privacy" className="fs-14 fw-400 bodyfont white">
                Privacidad
              </Link>
            </li>
            <li>
              <Link href="privacy" className="fs-14 fw-400 bodyfont white">
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
