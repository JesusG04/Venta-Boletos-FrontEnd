"use client";

import {
  IconArrowNarrowRight,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import EventsSliderCard from "./EventsSliderCard";
import { MapaEventos } from "@/src/schemas";


interface Props {
  data: MapaEventos;
}

const Events = ({ data }: Props) => {

  return (
    // <!--artits section-->
    <section className="artits__section ralt pr-24 pl-24 pb-100 pt-5">
      <div className="container-fluid p-0">
        <div className="header__text mb-24 d-flex align-items-center justify-content-between flex-wrap gap-2">
          <h2>Eventos Populares</h2>
          <Link
            href="artist-allsong"
            className="view__btn white d-flex align-items-center gap-2"
          >
            Ver más
            <IconArrowNarrowRight />
          </Link>
        </div>
        <Swiper
          modules={[Navigation, Scrollbar]}
          speed={200}
          spaceBetween={12}
          loop={true}
          // smartspeed={ 1000}
          breakpoints={{
            320: {
              slidesPerView: 1,
              scrollbar: {
                dragSize: 40,
              },
            },
            575: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
              scrollbar: {
                dragSize: 240,
              },
            },
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
          }}
          navigation={{
            nextEl: ".cmn-button-next2",
            prevEl: ".cmn-button-prev2",
          }}
          className="swiper trending__slider"
        >
          <div className="swiper-wrapper">
            {Object.entries(data).map((entry) => {
              const [id, evento] = entry;
              return (
                <SwiperSlide key={id}>
                  <EventsSliderCard {...evento} />
                </SwiperSlide>
              );
            })}
          </div>
          <div className="d-flex gap-4 mt-40 align-items-center">
            <div className="gap-1 d-flex">
              <div className="cmn-button-prev2">
                <IconChevronLeft />
              </div>
              <div className="cmn-pagination"></div>
              <div className="cmn-button-next2">
                <IconChevronRight />
              </div>
            </div>
            <div className="swiper-scrollbar"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Events;
