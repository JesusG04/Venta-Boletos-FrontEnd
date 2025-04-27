"use client"

// import { songUpgradeData } from "@/public/data/songUpgrdeData";
// import { weeklytopTrackData } from "@/public/data/weeklyTopTracksData";
import {
  IconGenderFemale,
  IconShare3,
  IconPhone,
  // IconMail,
  IconCalendar,
  IconGenderBigender,
  IconEdit
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";


const ProfileSection = () => {

  const { user } = useAuth();

  if (user) {
    return (
      <section className="profile__section custom__space pr-24 pl-24 pb-80">
        <div className="container">

          {/* <div className="event__createcover profile__cover">
            <div className="event__coverhead profile__coverchange">

              <div className="story__change2 ralt">
                <div className="thumb">
                  <Image
                    width={110}
                    height={110}
                    src={user.photoURL || 'https://firebasestorage.googleapis.com/v0/b/apphive-inc.appspot.com/o/usersmedia%2FsG4D2Am3Nq6G4diGKs6ojn?alt=media&token=3fabd5b9-9af8-4e34-bc4e-7e1aad99df1e'}
                    alt="img"
                  />
                  <div className="boxes">
                    <IconPlus />
                    <input type="file" accept="image/*" />
                  </div>
                </div>
                <div className="content">
                  <span className="fs-20 fw-500 d-block white bodyfont mb-1">
                    {user.displayName}
                  </span>
                  <span className="fs-14 fw-500 d-block white mb-3">
                    {user.email}
                  </span>
                  <Link
                    href="#0"
                    className="d-flex fs-14 fw-500 bodyfont base2 align-items-center gap-2"
                  >
                    <IconEdit />
                    Editar Perfil
                  </Link>
                </div>
              </div>
            </div>

            


          </div> */}

          {/* Card para foto de perfil y datos */}
          <div className="row d-flex justify-content-center">
            <div className="col-lg-5">
              <div className="follower__box mb-24">
                <div className="thumb">
                  <Image
                    width={200}
                    height={200}
                    src={user.photoURL || 'https://firebasestorage.googleapis.com/v0/b/apphive-inc.appspot.com/o/usersmedia%2FsG4D2Am3Nq6G4diGKs6ojn?alt=media&token=3fabd5b9-9af8-4e34-bc4e-7e1aad99df1e'}
                    alt="img"
                  />
                </div>


                <p className="fs-20 fw-500 d-block white bodyfont mb-1 mt-3 text-center">
                  {user.displayName}
                </p>
                <p className="fs-23 fw-500 d-block white bodyfont mb-1 text-center">
                  {user.email}
                </p>
                <p className="d-flex mb-10 align-items-center gap-3 fs-6 white mt-3 fw-500 bodyfont">
                  <IconCalendar className="fs-24 base" />
                  08/08/199
                </p>
                <p className="d-flex mb-10 align-items-center gap-3 fs-6 white fw-500 bodyfont">
                  <IconPhone className="fs-24 base" />
                  +52 5540287187
                </p>
                <p className="d-flex mb-10 align-items-center gap-3 fs-6 white fw-500 bodyfont">
                  {/* Agregar validacion */}
                  <IconGenderBigender className="fs-24 base" />
                  Hombre
                </p>

                <div className="d-flex justify-content-center mt-3">
                  <Link
                    href="profile-edit"
                    className="btn-editar px-3 py-1"
                  >
                    <span> <IconEdit className="fs-24 me-2" />
                      Editar</span>
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* Menu para el perfil */}
          <div className="profile__tabsbar mb-60">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pro1-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pro1-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="pro1-tab-pane"
                  aria-selected="true"
                  aria-label="button"
                >
                  Mis Eventos
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pro2-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#pro2-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="pro2-tab-pane"
                  aria-selected="false"
                  aria-label="button"
                >
                  Mis Compras
                </button>
              </li>
            </ul>
          </div>


          {/* Lo que se va a mostrar cuando se presione el boton */}
          <div className="profile__bodys">
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="pro1-tab-pane"
                role="tabpanel"
                aria-labelledby="pro1-tab"
              >
                <div className="row g-4">
                  <div className="col-lg-7">
                    <div className="profile__explore">
                      <div className="latest__songwrap moods__allsong">
                        <table className="table ctablemy align-middle align-center w-100">
                          <tbody>
                            {/* {exploreSectionData.map(({ id, ...props }, index) => (
                              <ExploreSectionTableRow
                                key={id}
                                {...props}
                                index={index}
                              />
                            ))} */}
                          </tbody>
                        </table>
                      </div>
                      <div className="text-center mt-40">
                        <Link href="#0" className="cmn__simple2">
                          Load More
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">


                    <div className="weekly__tracks">
                      <h3 className="mb-24 white">Weekly Top Tracks</h3>
                      <ul className="weeklytop__tracks">
                        {/* {weeklytopTrackData.map(({ id, ...props }) => (
                          <WeeklyTopTrack key={id} {...props} />
                        ))} */}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pro2-tab-pane"
                role="tabpanel"
                aria-labelledby="pro2-tab"
              >
                <div className="row g-4">
                  <div className="col-lg-7">
                    <div className="latest__songwrap moods__allsong">
                      <table className="table align-middle align-center w-100">
                        <tbody>
                          {/* {songUpgradeData
                            .slice(0, 5)
                            .map(({ id, ...props }, index) => (
                              <SongUpgradeTableRow
                                key={id}
                                {...props}
                                index={index + 1}
                              />
                            ))} */}
                        </tbody>
                      </table>
                      <div className="text-center mt-40">
                        <Link href="#0" className="cmn__simple2">
                          Load More
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-5">
                    <div className="follower__box mb-24">
                      <div className="thumb">
                        <Image
                          width={160}
                          height={160}
                          src="/img/profile/followers.jpg"
                          alt="img"
                        />
                      </div>
                      <div className="d-flex mb-24 align-items-center justify-content-between">
                        <div className="follow__item">
                          <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                            Tracks
                          </span>
                          <span className="d-block bodyfont white fw-600 fs-24">
                            0
                          </span>
                        </div>
                        <div className="follow__item">
                          <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                            Followers
                          </span>
                          <span className="d-block bodyfont white fw-600 fs-24">
                            75
                          </span>
                        </div>
                        <div className="follow__item">
                          <span className="pra d-block fs-18 fw-500 bodyfont mb-1">
                            Following
                          </span>
                          <span className="d-block bodyfont white fw-600 fs-24">
                            2k
                          </span>
                        </div>
                      </div>
                      <Link
                        href="#0"
                        className="d-flex mb-10 align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                      >
                        <IconGenderFemale className="fs-24 base" />
                        Male
                      </Link>
                      <Link
                        href="#0"
                        className="d-flex align-items-center gap-3 fs-18 pra fw-500 bodyfont"
                      >
                        <IconShare3 className="fs-24 base" />
                        Social Links
                      </Link>
                    </div>
                    <div className="weekly__tracks">
                      <h3 className="mb-24 white">Weekly Top Tracks</h3>
                      <ul className="weeklytop__tracks">
                        {/* {weeklytopTrackData.map(({ id, ...props }) => (
                          <WeeklyTopTrack key={id} {...props} />
                        ))} */}
                      </ul>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    );
  } else {
    <div>Para ver esta pagina incia sesion Inicia Sesion</div>
  }



};

export default ProfileSection;
