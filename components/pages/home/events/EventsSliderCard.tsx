import { IconArrowNarrowRight } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Evento } from "@/src/schemas";

const EventsSliderCard = ({ bannerEvento, nombreEvento}: Evento) => {
  return (
    <div className="swiper-slide trending__item round16 p-8">
      <div className="thumb ralt overhid transition">
        <Image
          src={bannerEvento}
          width={390}
          height={370}
          className="transition h-auto"
          alt="img"
        />
        <div className="artist__popup d-flex align-items-center justify-content-between">
          <div className="content">
            <h5 className="mb-1">
              <Link href="artist-allsong" className="white">
                {nombreEvento}
              </Link>
            </h5>
            <span className="fs-16 fw-500 pra3 d-block">En el tenayo</span>
          </div>
          <Link href="artist-allsong" className="cmn__arrow">
            <IconArrowNarrowRight className="arrowrotate" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsSliderCard;
